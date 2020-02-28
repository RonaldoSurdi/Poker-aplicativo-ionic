import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientrestPokerclubsProvider} from '../../providers/clientrest-pokerclubs/clientrest-pokerclubs';
import { Platform } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fotospremium-pokerclubs',
  templateUrl: 'fotospremium-pokerclubs.html',
})
export class FotospremiumPokerclubsPage {

  public unregisterBackButtonAction: any;
  public fotos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public clientrest: ClientrestPokerclubsProvider, public platform: Platform,
              public photoViewer: PhotoViewer, public globalvars: GlobalVarsProvider,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.getFotosGaleria();
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
    this.navCtrl.pop(); //setRoot("GaleriaFotospremiumPokerclubsPage");
  }
  
  getFotosGaleria()
  {
    let dataParam    = {
                          'gallery_id' : this.globalvars.getgaleriaFotosAtual(),                       
                          'user_id': this.globalvars.getidUsuario()
                       };
    this.clientrest.getFotosGaleriaClub(dataParam).then(data => {        
        if (data["result"] == "S") {
          this.fotos = data["items"];
        }
        else {
          this.CriaAlerta("Galeria de Fotos", data["message"]);
          this.navCtrl.pop();
        }
    }).catch(error => {
      //this.CriaAlerta("PokerClubs", "Ocorreu um erro ao requisitar os dados.<br>Tente novamente mais tarde.");
      this.navCtrl.pop();
    });
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
}
