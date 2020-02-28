import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
import { AlertController } from 'ionic-angular';
import { ClientrestPokerclubsProvider} from '../../providers/clientrest-pokerclubs/clientrest-pokerclubs';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AngularFireDatabase } from '@angular/fire/database';
import { LoadingProvider } from '../../providers/loading/loading';
//import {Storage} from "@ionic/storage";
//import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-torneiospremium-pokerclubs',
  templateUrl: 'torneiospremium-pokerclubs.html',
})
export class TorneiospremiumPokerclubsPage {

  public unregisterBackButtonAction: any;
  public torneios: any;
  //public tipoLogin: any = '';


  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
              public photoViewer: PhotoViewer, public globalvars: GlobalVarsProvider,
              public clientrest: ClientrestPokerclubsProvider, public alertCtrl: AlertController,
              private socialSharing: SocialSharing, public loadingCtrl: LoadingProvider,
              public angularFireDB: AngularFireDatabase) { //, private storage: Storage

        this.loadingCtrl.presentLoadingCircle1();

  }

  ionViewDidLoad() {
      let dataParam = {
          'club_id': this.globalvars.getdadosClubeAtual()["id"],
          'user_id': this.globalvars.getidUsuario()
      };
      this.clientrest.getTorneios(dataParam).then(data => {
          if (data["result"] == "S") {
              this.torneios = data["items"];
          } else {
              this.CriaAlerta("Torneios", data["message"]);
              this.navCtrl.pop();
          }
      });
  }

  ionViewWillEnter() {
    this.initializeBackButtonCustomHandler();
  }

  ionViewDidEnter() {
      setTimeout(() => {
          this.loadingCtrl.dismiss().then(() => {});
      }, 1000);
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
    this.navCtrl.pop();
  }

  closeTorneiosPremium() {
    this.navCtrl.pop(); //setRoot("ClubpremiumPokerclubsPage");
  }

  showZoomFoto(imagem, titulo) {
    this.photoViewer.show(imagem, titulo, {share: true});
  }
  
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

  converterData(data) {
    return this.globalvars.converteData(data);
  }

  chatTorneio(idTorneio, nomeTorneio) {
      if (parseInt(this.globalvars.getidUsuario()) > 1) {
          let dataParamUsuarioJaInscrito    = {
              'tournament_id': idTorneio,
              'user_id' : this.globalvars.getidUsuario()
          };
          // Verificando se o usuario ja nao esta inscrito nesse Torneio
          this.clientrest.getUsuarioInscritoTorneio(dataParamUsuarioJaInscrito).then(data => {
              if (data["result"] == "S") {
                  if (data["usersubscription"] == "S") {
                      let nomeClube = this.globalvars.getdadosClubeAtual()["name"];
                      let nomeJogador = this.globalvars.getnomeFacebook();
                      let idnum:string = (idTorneio).toString();
                      this.loadingPage("ChatsPokerclubsPage", {
                          clube: nomeClube,
                          torneio: nomeTorneio,
                          jogador: nomeJogador,
                          cod: idnum
                      });
                  } else {
                      const alert = this.alertCtrl.create({
                          title: 'Increva-se',
                          message: 'Para acessar o CHAT é necessário estar inscrito no Torneio!!!',
                          cssClass: 'alertaCustom',
                          enableBackdropDismiss: false,
                          buttons: [{
                              text: 'Entendi'
                          }]
                      });
                      alert.present();
                  }
              }
          });
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

  compartilharTorneio(nomeTorneio, imagemTorneio) {
    let nomeClub = this.globalvars.getdadosClubeAtual()["name"];
    this.socialSharing.share(nomeClub, nomeTorneio, null, imagemTorneio).then(() => {
      // OK
    }).catch(() => {
      // Erro
    });
  }

    /*gettipoLogin() {
        let returnfc:boolean = false;
        this.storage.get('pokerClubs_tipoLogin').then((tipoLogin) => {
            this.tipoLogin = tipoLogin;
            returnfc = true;
        });
        return returnfc;
    }*/

  inscrevaseTorneio(idTorneio, nomeTorneio, possuiPromocao) {
      // Verificando se o usuario ja nao esta inscrito nesse Torneio
      //this.gettipoLogin();
      if (parseInt(this.globalvars.getidUsuario()) > 1) {
          this.inscrevaseTorneioPre(idTorneio, nomeTorneio, possuiPromocao);
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

  inscrevaseTorneioPre(idTorneio, nomeTorneio, possuiPromocao) {
    let dataParamUsuarioJaInscrito    = {
      'tournament_id': idTorneio,
      'user_id' : this.globalvars.getidUsuario()
    };
    // Verificando se o usuario ja nao esta inscrito nesse Torneio
    this.clientrest.getUsuarioInscritoTorneio(dataParamUsuarioJaInscrito).then(data => {
      if (data["result"] == "S") {
        if (data["usersubscription"] == "N") {
          // Se o torneio possui promocao entao abre a tela de promocoes
          // Guardar o premioespecial e o premionormal
          this.globalvars.setidTorneioInscricao(idTorneio);
          this.globalvars.setnomeTorneioInscricao(nomeTorneio);
          if (possuiPromocao == "S") {
            this.loadingPage("PromocoespremiumPokerclubsPage", null);
          } else {
            // Senao só confirma a inscricao
            const alert = this.alertCtrl.create({
              title: 'PokerClubs',
              message: 'Tem certeza que deseja confirmar sua inscricao no torneio:<br>' +
                        nomeTorneio + '?',
              cssClass: 'alertaCustom',
              enableBackdropDismiss: false,
              buttons: [{
                  text: 'Sim',
                  role: 'Sim',
                  handler: () => {
                      this.confirmarInscricao(idTorneio, nomeTorneio);
                  }
                },{
                  text: 'Não',
                  role: 'Não',
                  handler: () => {

                  }
                }]
            });
            alert.present();
          }
        } else {
          this.CriaAlerta("Inscreva-se", "Você já confirmou sua inscrição para este Torneio.");
        }
      } else {
          this.CriaAlerta("Inscreva-se", data["message"]);
          this.navCtrl.pop();
      }
    });
  }

  confirmarInscricao(idTorneio, nomeTorneio) {
    let dataParam    = {
      'tournament_id': this.globalvars.getidTorneioInscricao(),
      'user_id': this.globalvars.getidUsuario()
    };
    this.clientrest.putInscricaoTorneio(dataParam).then(data => {
      if (data["result"] == "S") {
        let idJogador = this.globalvars.getidUsuario();
        let nomeJogador = this.globalvars.getnomeFacebook();
        let nomeClube = this.globalvars.getdadosClubeAtual()["name"];
        let nomeTorneioSet = (nomeTorneio).toString() + ' - ' + (idTorneio).toString();
        const newData = this.angularFireDB.database.ref('chatrooms/'+nomeClube+'/'+nomeTorneioSet+'/').push();
        newData.set({
            cod:idJogador,
            jogador:nomeJogador,
            tipo:'inscrito',
            mensagem:nomeJogador+' se Inscreveu no Torneio.',
            data:Date()
        });
        this.CriaAlerta("Inscreva-se", "Você acabou de confirmar sua inscrição para este Torneio.");
      } else {
        this.CriaAlerta("Inscreva-se", data["message"]);
      }
    });
  }

  loadingPage(pageName, pageParams) {
    if (pageParams === null) this.navCtrl.push(pageName);
    else this.navCtrl.push(pageName, pageParams);
  }

}
