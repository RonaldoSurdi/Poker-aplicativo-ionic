import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams, AlertController, LoadingController, Platform, ToastController } from 'ionic-angular';
import { ClientrestPokerclubsProvider } from '../../providers/clientrest-pokerclubs/clientrest-pokerclubs';
import { LaunchNavigator, LaunchNavigatorOptions, AppSelectionOptions } from '@ionic-native/launch-navigator';
import { GlobalVarsProvider  } from '../../providers/global-vars/global-vars';
import { GoogleMaps, GoogleMap, LatLng, GoogleMapsEvent, GoogleMapOptions, Marker, MyLocation, GoogleMapsMapTypeId } from '@ionic-native/google-maps';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Storage } from '@ionic/storage';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { AppMinimize } from '@ionic-native/app-minimize';

@IonicPage()
@Component({
  selector: 'page-tab1-pokerclubs',
  templateUrl: 'tab1-pokerclubs.html',
})
export class Tab1PokerclubsPage {

  public unregisterBackButtonAction: any;
  @ViewChild("map_pokerclubs") mapElement: ElementRef;
  map_pokerclubs:GoogleMap;
  toast: any;
  map_itens: any = {};
  location: LatLng;
  locations = [];
  myLocationEnabled: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private clientrest: ClientrestPokerclubsProvider, public alertCtrl: AlertController,
              public modalCtrl: ModalController, public loadingController: LoadingController,
              public platform: Platform, public globalvars: GlobalVarsProvider, 
              public launchNavigator: LaunchNavigator, public diagnostic: Diagnostic,
              public toastController: ToastController, public storage: Storage, 
              public  openNativeSettings: OpenNativeSettings,
              public appMinimize: AppMinimize ) {
  }

  ionViewDidLoad() {
    this.globalvars.settipoPesquisaClubes("R");
    this.getPermissaoLocalizacao().then(permissao => {
      this.DysplayMap(permissao).then(data => {
          if (this.globalvars.getabriuAPPPelaNotificacao()) {
            this.globalvars.setabriuAPPPelaNotificacao(false);
            this.globalvars.setrecebeuNotificacao(false);
            this.navCtrl.push('VisualizaNotificacaoPokerclubsPage').then(data2 => {
            });
          }
      });
    });
  }

  ionViewDidEnter()
  {        
    this.initializeBackButtonCustomHandler();
    if (this.globalvars.getlocalizandoClubes()) {
        if (this.globalvars.gettipoPesquisaClubes() == "C") {
            let cidadeSelectedArray = this.globalvars.getcodigoCidadeAtual();
            if ((cidadeSelectedArray[0] !== 0) && (cidadeSelectedArray[1] !== '') && (cidadeSelectedArray[2] !== '') && (cidadeSelectedArray[3] !== '')) {
                if (this.globalvars.getLocationInit()) {
                    this.globalvars.setLocationInit(false);
                    this.globalvars.setlatAtualDispositivo(cidadeSelectedArray[2]);
                    this.globalvars.setlngAtualDispositivo(cidadeSelectedArray[3]);
                    this.storage.set('latitude', cidadeSelectedArray[2]);
                    this.storage.set('longitude', cidadeSelectedArray[3]);
                }
                let movepos = new LatLng(cidadeSelectedArray[2], cidadeSelectedArray[3]);
                this.map_pokerclubs.animateCamera({
                    target: movepos,
                    zoom: 10,
                    duration: 1250
                });
            }
        } else if (this.globalvars.gettipoPesquisaClubes() == "N") {
            let clubeSelectedArray = this.globalvars.getcodigoClubeAtual();
            this.globalvars.getcodigoClubeAtual();
            if ((clubeSelectedArray[0] !== 0) && (clubeSelectedArray[1] !== '') && (clubeSelectedArray[2] !== '') && (clubeSelectedArray[3] !== '')) {
                if (this.globalvars.getLocationInit()) {
                    this.globalvars.setLocationInit(false);
                    this.globalvars.setlatAtualDispositivo(clubeSelectedArray[2]);
                    this.globalvars.setlngAtualDispositivo(clubeSelectedArray[3]);
                    this.storage.set('latitude', clubeSelectedArray[2]);
                    this.storage.set('longitude', clubeSelectedArray[3]);
                }
                let movepos = new LatLng(clubeSelectedArray[2], clubeSelectedArray[3]);
                this.map_pokerclubs.animateCamera({
                    target: movepos,
                    zoom: 10,
                    duration: 1250
                });
            }
        }
        this.globalvars.settipoPesquisaClubes("R");
        this.globalvars.setlocalizandoClubes(false);
    }
  }

  ionViewWillLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }

  public initializeBackButtonCustomHandler(): void {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      this.botaoVoltarAndroid();
    }, 101);
  }

  private botaoVoltarAndroid(): void {
    this.appMinimize.minimize().then(data => {
    });
  }

  getPermissaoLocalizacao() {
    return new Promise((resolve) => {
      if (this.platform.is("android")) {
        this.diagnostic.getPermissionAuthorizationStatus(this.diagnostic.permission.ACCESS_COARSE_LOCATION).then((status) => {
          if (status !== this.diagnostic.permissionStatus.GRANTED) {
            this.diagnostic.requestRuntimePermission(this.diagnostic.permission.ACCESS_COARSE_LOCATION).then((data) => {
              if (data == "DENIED" || data == "DENIED_ALWAYS") {
                resolve(false);
              } else {
                resolve(true);
              }
            })
          } else {
            resolve(true);
          }         
        });
      }
      if (this.platform.is("ios")) {
        resolve(true);
      }
    });
  }


  DysplayMap(permissao) {
    return new Promise((resolve, reject) => {
      this.showToast("Carregando mapa. Aguarde...", 3000);
      if (this.globalvars.gettipoPesquisaClubes() == "R") { // Navega no mapa
        let latN = -13.385265;
        let lngN = -52.679194;
        let dataParam = {
            'user_id': this.globalvars.getidUsuario()
        };
        this.clientrest.getClubsAllCidades(dataParam).then(data => {
            if (data["result"] == "S") {
                let clubesAll = data["items"];
                this.createMap(clubesAll, latN, lngN, this);
            }
        }).catch(error => {
            if (this.toast) {
                try {
                    this.toast.dismiss();
                }
                catch (exception) {
                }
            }
        });
      }
      resolve(true);            
    });
  }

  distanceFrom(origLat, origLng, destLat, destLng) {
    let lat = [origLat, destLat];
    let lng = [origLng, destLng];
    let R = 6378137;
    let dLat = (lat[1] - lat[0]) * Math.PI / 180;
    let dLng = (lng[1] - lng[0]) * Math.PI / 180;
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat[0] * Math.PI / 180) * Math.cos(lat[1] * Math.PI / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    let e = (Math.round(d / 1000 * 10) / 10) + 5;
    return Math.round(e);
  }

  addCluster(objectThis) {
    objectThis.map_pokerclubs.addMarkerCluster({
        boundsDraw: false,
        markers: objectThis.locations,
        icons: [
            {min: 2, max: 1000, url: "assets/imgs/m3.png", anchor: {x: 16, y: 16}}
        ]
    }).then((markerCluster) => {
        markerCluster.on(GoogleMapsEvent.MARKER_CLICK).subscribe((cluster: any) => {
            let markerClick: Marker = cluster[1];
            let ItemIdx:number = parseFloat(markerClick.get('zIndex'));

            if (ItemIdx > 99999991000) {
                ItemIdx = ItemIdx - 99999991001;
                let dataParam = {
                    'club_id': objectThis.map_itens[ItemIdx]["id"],
                    "user_id": objectThis.globalvars.getidUsuario()
                };
                console.log(objectThis.globalvars.getidUsuario());
                objectThis.clientrest.getoClub(dataParam).then(data => {
                    if (data["result"] == "N") {
                        objectThis.CriaAlerta("O Clube", data["message"]);
                    }
                    else {
                        objectThis.globalvars.setdadosClubeAtual(data);
                        if (objectThis.map_itens[ItemIdx]["premium"] == "S") {
                            objectThis.loadingPage('ClubpremiumPokerclubsPage');
                        } else {
                            let alert = objectThis.alertCtrl.create({
                                title: objectThis.map_itens[ItemIdx]["name"],
                                message: objectThis.map_itens[ItemIdx]["address"],
                                cssClass: 'alertaCustom',
                                enableBackdropDismiss: false,
                                buttons: [{
                                    text: 'Traçar Rota',
                                    role: 'Traçar Rota',
                                    handler: () => {
                                        objectThis.buttonTracarRota(objectThis.map_itens[ItemIdx]["lat"],objectThis.map_itens[ItemIdx]["lng"]);
                                    }
                                }, {
                                    text: 'Fechar',
                                    handler: () => {
                                        alert.dismiss();
                                    }
                                }]
                            });
                            alert.present();
                        }
                    }
                });
            }
        });
        objectThis.map_pokerclubs.getMyLocation().then((locationSet: MyLocation) => {
            if (!objectThis.myLocationEnabled) {
                objectThis.myLocationEnabled = true;
                objectThis.map_pokerclubs.setMyLocationButtonEnabled(true);
                objectThis.map_pokerclubs.setCompassEnabled(true);
            }
            objectThis.globalvars.setSemPosicaoAtual(false);
            objectThis.globalvars.setlatAtualDispositivo(locationSet.latLng.lat);
            objectThis.globalvars.setlngAtualDispositivo(locationSet.latLng.lng);
            objectThis.storage.set('latitude', locationSet.latLng.lat);
            objectThis.storage.set('longitude', locationSet.latLng.lng);
            let movepos = new LatLng(locationSet.latLng.lat, locationSet.latLng.lng);
            objectThis.map_pokerclubs.animateCamera({
                target: movepos,
                zoom: 10,
                duration: 1250
            });
        }).catch(error => {
            objectThis.storage.get('latitude').then((latitudeSalva) => {
                objectThis.storage.get('longitude').then((longitudeSalva) => {
                    if (latitudeSalva !== null) {
                        let movepos = new LatLng(parseFloat(latitudeSalva), parseFloat(longitudeSalva));
                        objectThis.map_pokerclubs.animateCamera({
                            target: movepos,
                            zoom: 10,
                            duration: 1250
                        });
                    } else {
                        let alert = objectThis.alertCtrl.create({
                            title: 'Localização',
                            message: 'Não foi possível obter sua localização atual. Desejar acessar as configurações de localização?',
                            cssClass: 'alertaCustom',
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: 'Não',
                                    role: 'Não',
                                    handler: () => {
                                        objectThis.globalvars.setSemPosicaoAtual(true);
                                        objectThis.globalvars.setLocationInit(true);
                                        objectThis.navCtrl.parent.select(2);
                                        alert.dismiss();
                                    }
                                },
                                {
                                    text: 'Sim',
                                    handler: () => {
                                        objectThis.openNativeSettings.open("location").then(() => {
                                            objectThis.map_pokerclubs.getMyLocation().then((locationSet: MyLocation) => {
                                                if (!objectThis.myLocationEnabled) {
                                                    objectThis.myLocationEnabled = true;
                                                    objectThis.map_pokerclubs.setMyLocationButtonEnabled(true);
                                                    objectThis.map_pokerclubs.setCompassEnabled(true);
                                                }

                                                objectThis.globalvars.setSemPosicaoAtual(false);
                                                objectThis.globalvars.setlatAtualDispositivo(locationSet.latLng.lat);
                                                objectThis.globalvars.setlngAtualDispositivo(locationSet.latLng.lng);
                                                objectThis.storage.set('latitude', locationSet.latLng.lat);
                                                objectThis.storage.set('longitude', locationSet.latLng.lng);

                                                let movepos = new LatLng(locationSet.latLng.lat, locationSet.latLng.lng);
                                                objectThis.map_pokerclubs.animateCamera({
                                                    target: movepos,
                                                    zoom: 10,
                                                    duration: 1250
                                                });
                                            })
                                        }).catch(error => {
                                            objectThis.globalvars.setSemPosicaoAtual(true);
                                            objectThis.globalvars.setLocationInit(true);
                                            objectThis.navCtrl.parent.select(2);
                                        });
                                        return false;
                                    }
                                }
                            ]
                        });
                        alert.present();
                    }
                });
            });
        });
    });
  }

  createMap(listitens, parseLat,parseLng,objectThis) {
      objectThis.map_itens = listitens;
      objectThis.location = new LatLng(-13.385265, -52.679194);
      objectThis.locations = [];
      let countmarkers = listitens.length;
      let latS:number = 0;
      let lngS:number = 0;
      let imagemIcon = "";
      for (let ItemIdx = 0; ItemIdx < countmarkers; ItemIdx++) {
          latS = parseFloat(listitens[ItemIdx]["lat"]);
          lngS = parseFloat(listitens[ItemIdx]["lng"]);
          if (listitens[ItemIdx]["premium"] == "S") {
              imagemIcon = "assets/imgs/marker-premium.png";
          }
          else {
              imagemIcon = "assets/imgs/marker-nao-premium.png";
          }
          objectThis.locations.push({
              position: {lat: latS, lng: lngS},
              icon: imagemIcon,
              zIndex: 99999991000 + (ItemIdx + 1)
          });
      }


      objectThis.platform.ready().then(() => {
          let mapOptions: GoogleMapOptions = objectThis.getOptionsMapa(parseLat, parseLng, 4);
          let element = objectThis.mapElement.nativeElement;
          objectThis.map_pokerclubs = GoogleMaps.create(element, mapOptions);
          objectThis.map_pokerclubs.one(GoogleMapsEvent.MAP_READY).then(() => {
              let options = {
                  target: objectThis.location,
                  zoom: 4
              };
              objectThis.map_pokerclubs.moveCamera(options);
              setTimeout(() => {objectThis.addCluster(objectThis)}, 500);
          });
      });
  }

  buttonTracarRota(LatDestino, LngDestino){
      let LatOrigem:number = -13.385265;
      let LngOrigem:number = -52.679194;
      if (this.myLocationEnabled) {
          this.map_pokerclubs.getMyLocation().then((locationSet: MyLocation) => {
              LatOrigem = locationSet.latLng.lat;
              LngOrigem = locationSet.latLng.lng;
          });
      }
      let origem  = LatOrigem + ',' + LngOrigem;
      let destino = LatDestino + ',' + LngDestino;

      let optionsSelection: AppSelectionOptions = {
          dialogHeaderText: "Selecione o aplicativo que deseja usar",
          cancelButtonText: "Cancelar"
      };

      let optionsNavigator: LaunchNavigatorOptions = {
          start: origem,
          appSelection: optionsSelection
      };

      this.launchNavigator.navigate(destino, optionsNavigator)
          .then(
              success => {
              },
              error => {
              }
          );
  }

  onAllClick(){
      let movepos = new LatLng(-13.385265, -52.679194);
      this.map_pokerclubs.animateCamera({
          target: movepos,
          zoom: 4,
          duration: 1500
      });
  }

  loadingPage(pageName) {
    const loading = this.loadingController.create({
      spinner: "bubbles",
      cssClass: "class-loading"
    });
    loading.present();
    setTimeout(() =>  {
      this.navCtrl.push(pageName);
    }, 1000);
    setTimeout(() =>  {
        try {
            loading.dismiss();
        }
        catch (exception) {
        }
    }, 2000);
  }

  // Funcao para criar alertas em todo o sistema
  CriaAlerta(titulo, subtitulo)
  {
    let alert = this.alertCtrl.create({
      title: titulo,
      cssClass: 'alertaCustom',
      subTitle: subtitulo,
      enableBackdropDismiss: false,
      buttons: ['OK']
    });
    alert.present();
  }

  //Funcao que cria o model da propaganda quando entrar no mapa
  DysplayBanner()
  {
    let data = {};

    let options = {
      enableBackdropDismiss: false,
      showBackdrop: false
    };
    let bannerModal = this.modalCtrl.create('BannermapPokerclubsPage', data, options);
    bannerModal.present();
  }

  getOptionsMapa(parseLat, parseLng, parseZoom) {
    return {
        backgroundColor: '#38414e',
        mapType: GoogleMapsMapTypeId.ROADMAP,
        controls: {
            'compassButton': false,
            'compass': true,
            'myLocationButton': false,
            'myLocation': true,   // (blue dot)
            'indoorPicker': false,
            'zoom': true,          // android only
            'mapToolbar': false     // android only
        },
        gestures: {
            scroll: true,
            tilt: true,
            zoom: true,
            rotate: true
        },
        camera: {
            target: {lat: parseLat, lng: parseLng},
            zoom: parseZoom,
            tilt: 30,
        },
        preferences: {
            zoom: {
                minZoom: 1,
                maxZoom: 20
            },

            padding: {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0
            },

            building: true
        },
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#746855"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "poi",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#263c3f"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#6b9a76"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#38414e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#212a37"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9ca5b3"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#746855"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#1f2835"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#f3d19c"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#2f3948"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#17263c"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#515c6d"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#17263c"
            }
          ]
        }
      ]
    };
  }

  showToast(messagem, tempo) {
    
    if (this.toast) {
        try {
            this.toast.dismiss();
        }
        catch (exception) {
        }
    }

    this.toast = this.toastController.create({
       message: messagem,
       duration: tempo,
       position: 'middle',
       cssClass: 'class-toast'
    });

    this.toast.onDidDismiss(() => {

    });

    this.toast.present();

  }

}
