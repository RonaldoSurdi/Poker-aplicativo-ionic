import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { GlobalVarsProvider  } from '../../providers/global-vars/global-vars';
import { AlertController } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { CallNumber } from '@ionic-native/call-number';
import { BrowserTab } from '@ionic-native/browser-tab';
import { LoadingProvider } from '../../providers/loading/loading';

@IonicPage()
@Component({
  selector: 'page-oclubepremium-pokerclubs',
  templateUrl: 'oclubepremium-pokerclubs.html',
})
export class OclubepremiumPokerclubsPage {

  public unregisterBackButtonAction: any;
  nomeClube: any;
  logoClube: any;
  enderecoClube: any;
  telefoneClube: any;
  siteClube: any;
  mesasClube: any;
  comodidadesClube: any;
  horariosClube: any;
  descricaoClube: any;
  fotosClube: any;
  horarios: any;
  facebookClube: any;
  instagramClube: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
              public globalvars: GlobalVarsProvider, public alertCtrl: AlertController,
              public photoViewer: PhotoViewer, public callnumber: CallNumber,
              public browsertab: BrowserTab, public loadingCtrl: LoadingProvider) {

      this.loadingCtrl.presentLoadingCircle1();

  }

  ionViewDidLoad() {
    //this.initializeBackButtonCustomHandler();
    this.nomeClube        = this.globalvars.getdadosClubeAtual()["name"];
    this.logoClube        = this.globalvars.getdadosClubeAtual()["logo"];
    this.enderecoClube    = this.globalvars.getdadosClubeAtual()["address"];
    this.telefoneClube    = this.globalvars.getdadosClubeAtual()["phone"];
    this.siteClube        = this.globalvars.getdadosClubeAtual()["site"];
    this.mesasClube       = this.globalvars.getdadosClubeAtual()["tables"];
    this.comodidadesClube = this.globalvars.getdadosClubeAtual()["convenience"];
    this.horariosClube    = this.globalvars.getdadosClubeAtual()["week"];
    this.descricaoClube   = this.globalvars.getdadosClubeAtual()["description"];
    this.fotosClube       = this.globalvars.getdadosClubeAtual()["photos"];
    this.facebookClube    = this.globalvars.getdadosClubeAtual()["facebook"];
    this.instagramClube   = this.globalvars.getdadosClubeAtual()["instagram"];
    // Horarios
    this.horarios = [];
    this.horarios.push({"dia": "Seg", "horario": this.horariosClube["seg"]});
    this.horarios.push({"dia": "Ter", "horario": this.horariosClube["ter"]});
    this.horarios.push({"dia": "Qua", "horario": this.horariosClube["qua"]});
    this.horarios.push({"dia": "Qui", "horario": this.horariosClube["qui"]});
    this.horarios.push({"dia": "Sex", "horario": this.horariosClube["sex"]});
    this.horarios.push({"dia": "Sab", "horario": this.horariosClube["sab"]});
    this.horarios.push({"dia": "Dom", "horario": this.horariosClube["dom"]});
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
    // Regitrando o Botao Voltar do Android
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      this.botaoVoltarAndroid();
    }, 101);
  }

  private botaoVoltarAndroid(): void {
    this.navCtrl.pop(); //("ClubpremiumPokerclubsPage");
  }

  closeOClubePremium() {
    this.navCtrl.pop(); //("ClubpremiumPokerclubsPage");
  }

  // Funcao para criar alertas em todo o sistema
  CriaAlerta(titulo, subtitulo)
  {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: subtitulo,
      enableBackdropDismiss: false,
      buttons: ['OK']
    });
    alert.present();
  }

  showImagemClube(imagem, titulo) {
    this.photoViewer.show(imagem, titulo, {share: true});
  }

  ligarTelefoneClube(numeroTelefone) {
    this.callnumber.callNumber(numeroTelefone, false).then(() => {      
      }
    )
    .catch(() => {
      
    });
  }

  abrePagina(pagina) {
    this.browsertab.isAvailable().then((isAvailable: boolean) => {
      if (isAvailable) {
        this.browsertab.openUrl(pagina);
      } else {
      }
    });
  }

}
