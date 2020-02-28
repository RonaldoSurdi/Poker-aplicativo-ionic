import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientrestPokerclubsProvider} from '../../providers/clientrest-pokerclubs/clientrest-pokerclubs';
import { ImageViewerController } from "ionic-img-viewer";
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { GlobalVarsProvider  } from '../../providers/global-vars/global-vars';
import { LaunchNavigator, LaunchNavigatorOptions, AppSelectionOptions } from '@ionic-native/launch-navigator';
import { BrowserTab } from '@ionic-native/browser-tab';

@IonicPage()
@Component({
  selector: 'page-clubpremium-pokerclubs',
  templateUrl: 'clubpremium-pokerclubs.html',
})
export class ClubpremiumPokerclubsPage {

  slider: any;
  public unregisterBackButtonAction: any;
  imagemSeguirOuSeguindo: any;
  logoClube: any;
  possuiLogo: any = false;
  nomeClube: any;
  imagemMensagem: any = "assets/imgs/mensagem-sem.png";


  constructor(public navCtrl: NavController, public navParams: NavParams, public clientrest: ClientrestPokerclubsProvider,
              public imageViewerCtrl: ImageViewerController, public alertCtrl: AlertController,
              public platform: Platform, public loadingController: LoadingController, 
              public globalvars: GlobalVarsProvider, public launchNavigator: LaunchNavigator,
              public browsertab: BrowserTab) {
  }

  ionViewDidLoad() {    

    //console.log("dados do clube", this.globalvars.getdadosClubeAtual());
    if (parseInt(this.globalvars.getidUsuario()) > 1) {
       if (this.globalvars.getdadosClubeAtual()["follow"] == "S") {
          // Se esta seguindo mostra o icone seguindo
          this.imagemSeguirOuSeguindo = 'assets/imgs/seguindo.png';
       } else {
          // Se nao esta seguindo mostrar o icone seguir
          this.imagemSeguirOuSeguindo = 'assets/imgs/seguir.png';
       }
    } else {
        this.imagemSeguirOuSeguindo = 'assets/imgs/seguir.png';
    }
    this.logoClube = this.globalvars.getdadosClubeAtual()["logo"];
    this.nomeClube = this.globalvars.getdadosClubeAtual()["name"];
    if (this.logoClube !== "") {
      this.possuiLogo = true;
    }
  }
  

  ionViewWillLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }


  ionViewDidEnter() {

    this.initializeBackButtonCustomHandler();

    let dataParam    = {
      'club_id' : this.globalvars.getdadosClubeAtual()["id"],
      "user_id": this.globalvars.getidUsuario() 
    };
    
    this.clientrest.getoClub(dataParam).then(data => {
      if (data["result"] == "S") {      
          this.globalvars.setdadosClubeAtual(data);
          if (parseInt(this.globalvars.getidUsuario()) > 1) {
              if (parseInt(this.globalvars.getdadosClubeAtual()["qtd_msg"]) == 0) {
                  this.imagemMensagem = "assets/imgs/mensagem-sem.png"
              } else if (parseInt(this.globalvars.getdadosClubeAtual()["qtd_msg"]) == 1) {
                  this.imagemMensagem = "assets/imgs/mensagem-01.png"
              }
              else if (parseInt(this.globalvars.getdadosClubeAtual()["qtd_msg"]) == 2) {
                  this.imagemMensagem = "assets/imgs/mensagem-02.png"
              }
              else if (parseInt(this.globalvars.getdadosClubeAtual()["qtd_msg"]) == 3) {
                  this.imagemMensagem = "assets/imgs/mensagem-03.png"
              }
              else if (parseInt(this.globalvars.getdadosClubeAtual()["qtd_msg"]) == 4) {
                  this.imagemMensagem = "assets/imgs/mensagem-04.png"
              }
              else if (parseInt(this.globalvars.getdadosClubeAtual()["qtd_msg"]) == 5) {
                  this.imagemMensagem = "assets/imgs/mensagem-05.png"
              }
              else if (parseInt(this.globalvars.getdadosClubeAtual()["qtd_msg"]) == 6) {
                  this.imagemMensagem = "assets/imgs/mensagem-06.png"
              }
              else if (parseInt(this.globalvars.getdadosClubeAtual()["qtd_msg"]) == 7) {
                  this.imagemMensagem = "assets/imgs/mensagem-07.png"
              }
              else if (parseInt(this.globalvars.getdadosClubeAtual()["qtd_msg"]) == 8) {
                  this.imagemMensagem = "assets/imgs/mensagem-08.png"
              }
              else if (parseInt(this.globalvars.getdadosClubeAtual()["qtd_msg"]) == 9) {
                  this.imagemMensagem = "assets/imgs/mensagem-09.png"
              }
              else if (parseInt(this.globalvars.getdadosClubeAtual()["qtd_msg"]) == 10) {
                  this.imagemMensagem = "assets/imgs/mensagem-10.png"
              }
              else if (parseInt(this.globalvars.getdadosClubeAtual()["qtd_msg"]) > 10) {
                  this.imagemMensagem = "assets/imgs/mensagem-mais-10.png"
              } else {
                  this.imagemMensagem = "assets/imgs/mensagem-sem.png"
              }
          } else {
              this.imagemMensagem = "assets/imgs/mensagem-sem.png";
          }
      } else {
        this.CriaAlerta("O Clube", data["message"]);
      }
    });
  }

  public initializeBackButtonCustomHandler(): void {
    // Regitrando o Botao Voltar do Android
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      this.botaoVoltarAndroid();
    }, 101); 
  }

  private botaoVoltarAndroid(): void {
    this.navCtrl.pop();
  }

  openOClubePremium() {
    this.loadingPage("OclubepremiumPokerclubsPage",null);
  }

  openTorneiosPremium() {
    this.loadingPage("TorneiospremiumPokerclubsPage",null);
  }

  openMensagensPremium() {
    if (parseInt(this.globalvars.getidUsuario()) > 1) {
        this.loadingPage("NotificacoespermiumPokerclubsPage",null);
    } else {
        const alert = this.alertCtrl.create({
            title: 'Acesse sua conta',
            message: 'Para utilizar este recurso é necessário acessar ou criar seu cadastro!!!',
            cssClass: 'alertaCustom',
            enableBackdropDismiss: false,
            buttons: [{
                text: 'Ir para Cadastro',
                role: 'continuar',
                handler: () => {
                    this.loadingPage('LoginPokerclubsPage',null);
                }
            }, {
                text: 'Agora não'
            }]
        });
        alert.present();
    }
  }

  openSeguindoPremium() {
    if (parseInt(this.globalvars.getidUsuario()) > 1) {
        let tituloSeguirSeguindoClube    = '';
        let textoSeguirSeguindoClube = '';
        let textoSim = '';
        let seguirOuParar = '';

        if (this.globalvars.getdadosClubeAtual()["follow"] == "S") {
          tituloSeguirSeguindoClube = 'Seguindo Clube';
          textoSim = 'Parar de Seguir';
          seguirOuParar = 'P';
          textoSeguirSeguindoClube = 'Você está seguindo este Clube. ' +
                                       'Ao parar de seguí-lo você não receberá mais notificações deste Clube.';
        } else {
          tituloSeguirSeguindoClube = 'Seguir Clube';
          textoSim = 'Seguir Clube';
          seguirOuParar = 'S';
          textoSeguirSeguindoClube = 'Ao seguir este Clube você receberá notificações como torneios, promoções, ' +
                                       'eventos do Clube.';
        }

        let confirm = this.alertCtrl.create({
          title: tituloSeguirSeguindoClube,
          message: textoSeguirSeguindoClube,
          cssClass: "alertaCustom",
          enableBackdropDismiss: false,
          buttons: [
            {
              text: textoSim,
              handler: () => {
                this.seguirOuPararSeguirClube(seguirOuParar);
              }
            },
            {
              text: 'Cancelar',
              handler: () => {

              }
            }
          ]
        });
        confirm.present();
    } else {
        const alert = this.alertCtrl.create({
            title: 'Acesse sua conta',
            message: 'Para utilizar este recurso é necessário acessar ou criar seu cadastro!!!',
            cssClass: 'alertaCustom',
            enableBackdropDismiss: false,
            buttons: [{
                text: 'Ir para Cadastro',
                role: 'continuar',
                handler: () => {
                    this.loadingPage('LoginPokerclubsPage',null);
                }
            }, {
                text: 'Agora não'
            }]
        });
        alert.present();
    }
  }

  openRankingPremium() {
    this.loadingPage("RankingpremiumPokerclubsPage",null);
  }

  openAoVivoPremium() {
    let linkLive = this.globalvars.getdadosClubeAtual()["live"];
    if (linkLive !== "") { 
      this.browsertab.isAvailable().then((isAvailable: boolean) => {
        if (isAvailable) {
          this.browsertab.openUrl(linkLive);
        } else {
        }
      });
    } else {
      this.CriaAlerta("Ao Vivo.", "Não há eventos ao vivo no momento."); 
    }
  }

  openAgendaPremium() {
    this.loadingPage("AgendapremiumPokerclubsPage",null);
  }

  openFotosPremium() {
    this.loadingPage("GaleriaFotospremiumPokerclubsPage",null);
  }

  voltarAoMapaPremium() {   
    this.navCtrl.pop();
  }

    loadingPage(pageName, pageParams) {
        let loading = this.loadingController.create({
            spinner: "bubbles",
            cssClass: "class-loading"
        });
        loading.present();
        setTimeout(() =>  {
            if (pageParams === null) this.navCtrl.push(pageName);
            else this.navCtrl.push(pageName, pageParams);
        }, 1000);
        setTimeout(() =>  {
            loading.dismiss();
        }, 2000);
    }

  // Funcao para criar alertas em todo o sistema
  CriaAlerta(titulo, subtitulo)
  {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: subtitulo,
      cssClass: 'alertaCustom',
      enableBackdropDismiss: false,
      buttons: ['OK']
    });
    alert.present();
  }
  
  zoomImageClub(image)
  {
    const viewer = this.imageViewerCtrl.create(image)
    viewer.present();
  }

  seguirOuPararSeguirClube(seguirOuParar) {
    let dataParam    = {
      'club_id': this.globalvars.getdadosClubeAtual()["id"],
      'user_id': this.globalvars.getidUsuario(),
      'follow':  seguirOuParar
    };

    this.clientrest.putSeguirOuParar(dataParam).then(data => {
      if (data["result"] == "S") {        
        if (data["status"] == "1") {
          this.globalvars.getdadosClubeAtual()["follow"] = "S";
          this.imagemSeguirOuSeguindo = 'assets/imgs/seguindo.png';
        } else {
          this.globalvars.getdadosClubeAtual()["follow"] = "N";
          this.imagemSeguirOuSeguindo = 'assets/imgs/seguir.png';
        }
        this.CriaAlerta("Seguir Clube", data["message"]);
      } else {
        this.CriaAlerta("Seguir Clube", data["message"]);
      }
    }).catch(error => {
      //this.CriaAlerta("PokerClubs", "Ocorreu um erro ao requisitar os dados.<br>Tente novamente mais tarde.");
    });
  }

  openTracarRota() {
    let origem  = this.globalvars.getlatAtualDispositivo() + ',' + this.globalvars.getlngAtualDispositivo();
    let destino = this.globalvars.getdadosClubeAtual()["lat"] + ',' + this.globalvars.getdadosClubeAtual()["lng"];
    
    let optionsSelection: AppSelectionOptions = {
      dialogHeaderText: "Selecione o aplicativo que deseja usar",
      cancelButtonText: "Cancelar"  
    }

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
}
