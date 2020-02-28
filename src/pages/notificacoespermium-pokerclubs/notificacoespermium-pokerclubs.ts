import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
import { ClientrestPokerclubsProvider} from '../../providers/clientrest-pokerclubs/clientrest-pokerclubs';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notificacoespermium-pokerclubs',
  templateUrl: 'notificacoespermium-pokerclubs.html',
})
export class NotificacoespermiumPokerclubsPage {

  mensagens: any;
  public unregisterBackButtonAction: any;
  possuiMensagens: any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public globalvars: GlobalVarsProvider, public clientrest: ClientrestPokerclubsProvider,
              public alertCtrl: AlertController, public loadingController: LoadingController,
              public platform: Platform, public toastController: ToastController ) {
  }

  ionViewDidLoad() {
    this.getMensagens();
  }

  ionViewDidEnter() {
    this.possuiMensagens = false;
    this.initializeBackButtonCustomHandler();
    this.getMensagens();
  }

  ionViewWillLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }

  public initializeBackButtonCustomHandler(): void {
    // Regitrando o Botao Voltar do Android
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      this.botaoVoltarAndroid();
    }, 101); 
  }

  private botaoVoltarAndroid(): void {
    this.navCtrl.pop(); //setRoot("GaleriaFotospremiumPokerclubsPage");
  }

  getMensagens() {
    let dataParam    = {
      'club_id' : this.globalvars.getdadosClubeAtual()["id"],                       
      'user_id': this.globalvars.getidUsuario()
    };

    this.clientrest.getMensagensClube(dataParam).then(data => {        
      if (data["result"] == "S") {        
        this.mensagens = data["items"];
        this.possuiMensagens = (data["items"].length > 0);
      }
      else {
        this.CriaAlerta("Mensagens", data["message"]);
        this.navCtrl.pop();
      }
      }).catch(error => {
        //this.CriaAlerta("PokerClubs", "Ocorreu um erro ao requisitar os dados.<br>Tente novamente mais tarde.");        
    });    
  }

  openMensagem(idMensagem) {
    this.globalvars.setidMensagemAtual(idMensagem);
    this.loadingPage("VisualizaNotificacaoPokerclubsPage",null);
  }

  deletarTodasMensagens() {
    const alert = this.alertCtrl.create({
      title: 'Excluir todas',
      message: 'Você tem certeza que deseja excluir todas as mensagens?',
      cssClass: 'alertaCustom',
      enableBackdropDismiss: false,
      buttons: [{
          text: 'Não',
          role: 'Não',
          handler: () => {
          }
      }, {
          text: 'Sim',
          role: 'Sim',
          handler: () => {

            let toast = null;
            toast = this.toastController.create({
              message: "Excluindo todas as mensagens...",
              duration: 1,
              position: 'bottom',
              cssClass: 'class-toast'
            });                      
          
            toast.present();

            let dataParam = {
              'user_id': this.globalvars.getidUsuario(),
              'club_id': this.globalvars.getdadosClubeAtual()["id"]
            };
            this.clientrest.excluirTodasMensagem(dataParam).then(data => {        
              if (data["result"] == "S") { 
                this.getMensagens();   
                toast.dismiss();     
              } else {
                toast.dismiss();
                this.CriaAlerta("Mensagens", data["message"]);
              }
            });    
          }
      }]
    });
    alert.present();
  }

  deletarMensagem(idMensagem)
  {
    let toast = null;
    toast = this.toastController.create({
      message: "Excluindo...",
      duration: 1,
      position: 'bottom',
      cssClass: 'class-toast'
    });                      
  
    toast.present();

    let dataParam = {
      'msg_id' : idMensagem,                       
      'user_id': this.globalvars.getidUsuario()
    };
    this.clientrest.excluirMensagem(dataParam).then(data => {        
      if (data["result"] == "S") { 
        this.getMensagens();        
        toast.dismiss();
      } else {
        this.CriaAlerta("Mensagens", data["message"]);
        toast.dismiss();
      }
    });
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


}
