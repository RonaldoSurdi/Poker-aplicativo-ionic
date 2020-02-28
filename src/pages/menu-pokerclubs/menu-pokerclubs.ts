import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams } from 'ionic-angular';
import { GlobalVarsProvider  } from '../../providers/global-vars/global-vars';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

export interface PageInterface {
  title: string,
  pageName: string,
  tabComponent: string,
  index?: number,
  icon?: string,
  view?: number,
}

@IonicPage()
@Component({
  selector: 'page-menu-pokerclubs',
  templateUrl: 'menu-pokerclubs.html',
})
export class MenuPokerclubsPage {

  rootPage = 'TabsPokerclubsPage';

  @ViewChild(Nav) nav: Nav;
  avatarFacebook: any = "assets/imgs/user.png";
  nomeFacebook: any = "Anonimo";
  logouFacebook: any = false;
  numberPage: boolean = false;

  pages: PageInterface[] = [
    {title: 'Mapa',  pageName: 'Tab1PokerclubsPage', tabComponent: 'Tab1PokerclubsPage', index: 0, icon: 'locate', 'view': 1},
    {title: 'Indique um Clube', pageName: 'Tab2PokerclubsPage', tabComponent: 'Tab2PokerclubsPage', index: 1, icon: 'thumbs-up', 'view': 2},
    {title: 'Localize um Clube', pageName: 'LocalizarClubePokerclubsPage', tabComponent: 'LocalizarClubePokerclubsPage', index: 2, icon: 'search', 'view': 3},
    {title: 'Mensagens', pageName: 'TodasmensagensPokerclubsPage', tabComponent: 'TodasmensagensPokerclubsPage', index: undefined, icon: 'mail', 'view': 4},
    {title: 'Minha Conta', pageName: 'LoginPokerclubsPage', tabComponent: 'LoginPokerclubsPage', index: undefined, icon: 'add', 'view': 5}
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public globalvars: GlobalVarsProvider, public storage: Storage,
              public alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
      this.updateAvatar();
  }
  ionViewDidEnter() {

    if (this.globalvars.getlocalizandoClubes()) {
      this.nav.getActiveChildNavs()[0].select(0);
    }
    //document.getElementById("btmenu4").style.display = "none";
    this.storage.get('pokerClubs_tipoLogin').then((tip) => {
      if (!tip) this.numberPage = true;
      else if ((tip === "N")||(tip === "O")||(tip === "")) this.numberPage = true;
    });
    this.logouFacebook = true;

  }

  updateAvatar() {
      let nomeFacebookT = this.globalvars.getnomeFacebook();
      if (nomeFacebookT)
          if ((nomeFacebookT!=="")&&(nomeFacebookT!==null)&&(nomeFacebookT!=="undefined"))
              if (this.nomeFacebook !== nomeFacebookT)
                  this.nomeFacebook = nomeFacebookT;
      let avatarFacebookT = this.globalvars.getavatarFacebook();
      if (avatarFacebookT)
          if ((avatarFacebookT!=="")&&(avatarFacebookT!==null)||(avatarFacebookT!=="undefined"))
              if (this.avatarFacebook !== avatarFacebookT)
                  this.avatarFacebook = avatarFacebookT;
  }

  openPage(page: PageInterface) {
    this.updateAvatar();

    let params = {};

    if (page.index) {
      params = { tabIndex: page.index};
    }
    if (this.nav.getActiveChildNavs()[0] && page.index != undefined) {
        this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      if (page.pageName == "TodasmensagensPokerclubsPage") {
          if (parseInt(this.globalvars.getidUsuario()) > 1) {
              this.nav.push("TodasmensagensPokerclubsPage");
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
                          this.nav.push("LoginPokerclubsPage");
                      }
                  }, {
                      text: 'Agora não'
                  }]
              });
              alert.present();
        }
      } else if (page.pageName == "LoginPokerclubsPage") {
        this.nav.push("LoginPokerclubsPage");
      } else {
        this.nav.setRoot(page.pageName, params);
      }
    }
  }


}