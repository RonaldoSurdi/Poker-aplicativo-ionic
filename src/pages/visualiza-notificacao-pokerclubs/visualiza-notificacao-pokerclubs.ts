import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
import { ClientrestPokerclubsProvider} from '../../providers/clientrest-pokerclubs/clientrest-pokerclubs';
import { AlertController } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-visualiza-notificacao-pokerclubs',
  templateUrl: 'visualiza-notificacao-pokerclubs.html',
})
export class VisualizaNotificacaoPokerclubsPage {

  data: any;
  id: any;
  titulo: any;
  imagem: any;
  texto: any;
  nomeClube: any;
  mensagemImagem: boolean;
  usuarioCadastrado: any = false;

  public unregisterBackButtonAction: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public globalvars: GlobalVarsProvider, public clientrest: ClientrestPokerclubsProvider,
              public alertCtrl: AlertController, public photoViewer: PhotoViewer,
              public platform: Platform) {
  }

  ionViewDidLoad() {      
    this.getMensagem();
    this.usuarioCadastrado = (parseInt(this.globalvars.getidUsuario()) !== 1);    
  }

  ionViewDidEnter() {
    this.initializeBackButtonCustomHandler();
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
    this.navCtrl.pop();
  }

  showZoomFoto(titulo, imagem) {
    this.photoViewer.show(imagem, titulo, {share: true});
  }

  getMensagem() {
    let dataParam = {
      'msg_id' : this.globalvars.getidMensagemAtual(),                       
      'user_id': this.globalvars.getidUsuario()
    };

    this.clientrest.getMensagem(dataParam).then(data => {        
      if (data["result"] == "S") {       
        this.id         = data["items"][0]["id"]; 
        this.nomeClube  = data["items"][0]["club"]["name"];
        this.data       = data["items"][0]["date"];
        this.titulo     = data["items"][0]["title"];
        this.imagem     = data["items"][0]["image"];
        this.texto      = data["items"][0]["text"];
        this.mensagemImagem = false;
        if (this.imagem !== "") {
          this.mensagemImagem = true;
        }               
      }
      else {
        this.CriaAlerta("Mensagens", data["message"]);
      }
      }).catch(error => {
        //this.CriaAlerta("PokerClubs", "Ocorreu um erro ao requisitar os dados.<br>Tente novamente mais tarde.");        
    });
  }

  excluirMensagem(idMensagem) {
    let dataParam = {
      'msg_id' : this.globalvars.getidMensagemAtual(),                       
      'user_id': this.globalvars.getidUsuario()
    };
    this.clientrest.excluirMensagem(dataParam).then(data => {        
      if (data["result"] == "S") { 
        this.navCtrl.pop();        
      } else {
        this.CriaAlerta("Mensagens", data["message"]);
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
}
