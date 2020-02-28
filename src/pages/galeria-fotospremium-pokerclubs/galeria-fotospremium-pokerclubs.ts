import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientrestPokerclubsProvider} from '../../providers/clientrest-pokerclubs/clientrest-pokerclubs';
import { AlertController } from 'ionic-angular';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
import { Platform } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-galeria-fotospremium-pokerclubs',
  templateUrl: 'galeria-fotospremium-pokerclubs.html',
})
export class GaleriaFotospremiumPokerclubsPage {

  public unregisterBackButtonAction: any;
  galerias: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public clientrest: ClientrestPokerclubsProvider, public alertCtrl: AlertController,
              public globalvars: GlobalVarsProvider, public platform: Platform, 
              public loadingController: LoadingController) {
    
  }

  ionViewDidLoad() {
    //this.initializeBackButtonCustomHandler();
    this.getGaleriaFotos();
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
    }, 102); 
  }

  private botaoVoltarAndroid(): void {
    this.navCtrl.pop(); //("ClubpremiumPokerclubsPage");
  }

  closeGaleriaFotosPremium() {
    this.navCtrl.pop(); //("ClubpremiumPokerclubsPage");
  }

  getGaleriaFotos() {
    let dataParam    = {
      'club_id' : this.globalvars.getdadosClubeAtual()["id"],
      'user_id': this.globalvars.getidUsuario()
    };
    this.clientrest.getGaleriaFotosClub(dataParam).then(data => {
      if (data["result"] == "S") {
        this.galerias = data["items"];
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

  openFotosDaGaleria(id_galeria) {
    this.globalvars.setgaleriaFotosAtual(id_galeria);
    this.loadingPage("FotospremiumPokerclubsPage",null);
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
