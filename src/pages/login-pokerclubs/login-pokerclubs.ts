import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';
import { ClientrestPokerclubsProvider } from "../../providers/clientrest-pokerclubs/clientrest-pokerclubs";
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Storage } from '@ionic/storage';
import { GlobalVarsProvider  } from '../../providers/global-vars/global-vars';
import { Platform } from 'ionic-angular';
import { MenuPokerclubsPage } from '../menu-pokerclubs/menu-pokerclubs';
//import { FormBuilder} from '@angular/forms';
//import { AppMinimize } from '@ionic-native/app-minimize';

@IonicPage()
@Component({
  selector: 'page-login-pokerclubs',
  templateUrl: 'login-pokerclubs.html',
})
export class LoginPokerclubsPage {

  email: string;
  senha: string;
  avatarFacebook: any = "assets/imgs/user.png";
  nomeFacebook: any = "Anonimo";
  //loginFacebook: any;
  exibeUsuarioESenha: any = false;
  //mostrarSomenteIOS: any = false;
  numberPage: any = true;
  public unregisterBackButtonAction: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
              //public formBuilder: FormBuilder,
              private clientrest: ClientrestPokerclubsProvider,
              public loadingController: LoadingController, 
              private faceBook: Facebook, private storage: Storage,
              public globalvars: GlobalVarsProvider,
              public platform: Platform,
              public menuPokerclubsPage: MenuPokerclubsPage) { //, public appMinimize: AppMinimize

  }

  ionViewDidLoad() {
    //this.mostrarSomenteIOS = this.platform.is("ios");
  }

  ionViewDidEnter()
  {        
    this.initializeBackButtonCustomHandler();
      this.storage.get('pokerClubs_tipoLogin').then((tip) => {
          if (!tip) this.numberPage = true;
          else if ((tip === "A")||(tip === "F")) this.numberPage = false;
      });
      this.updateAvatar();
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
      this.navCtrl.pop(); //this.appMinimize.minimize();
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
  
  // Funcao usada para logar o Usuario Sistema
  validUser() {
    let dataParam    = {
      'email' : this.email,
      'senha': this.senha,
      'one_signal': this.globalvars.getidDeviceOneSignal(),
      'one_signal_token': this.globalvars.gettokenDeviceOneSignal(),
        "unic_id": this.globalvars.getunicDevieID()
    };    
    this.clientrest.validUser(dataParam).then(data => {
       if (data["result"] == "N") {
          this.CriaAlerta("Login", data["message"]);
       } else {
          let photoavatar = 'assets/imgs/user.png';
          let tipologn = 'N';
          if (this.email !== "contato@pokerclubsapp.com.br") {
              tipologn = 'A';
              if ((data["avatar"] !== "")&&(data["avatar"] !== "null")&&(data["avatar"] !== "undefined")) {
                 photoavatar = data["avatar"];
              }
          }
          this.storage.set('pokerClubs_emailUsuario', this.email);
          this.storage.set('pokerClubs_senhaUsuario', this.senha);
          this.storage.set('pokerClubs_nomeUsuario', data["nome"]);
          this.storage.set('pokerClubs_apelidoUsuario', data["apelido"]);
          this.storage.set('pokerClubs_tipoLogin', tipologn);
          this.storage.set('pokerClubs_avatarUsuario', photoavatar);
          this.globalvars.setnomeFacebook(data["nome"]);
          this.globalvars.setidUsuario(data["user_id"]);
          this.globalvars.setavatarFacebook(photoavatar);
          //this.globalvars.settipoPesquisaClubes("R"); // Tipo de Pesquisa do Clube R= Raio C= Cidade N= Nome
          this.updateAvatar();
          this.menuPokerclubsPage.updateAvatar();
          //this.navCtrl.setRoot("MenuPokerclubsPage");
           this.navCtrl.pop();
       }
    });
  };

  // Funcao para criar alertas em todo o sistema
  CriaAlerta(titulo, subtitulo)
  {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: subtitulo,
      enableBackdropDismiss: false,
      cssClass: 'alertaCustom',
      buttons: ['OK']
    });
    alert.present();
  }

  criarNovaConta() {
    this.navCtrl.push('RegisterPokerclubsPage');
  }


  logarFacebook() {
    this.faceBook.login(['public_profile', 'user_friends', 'email']).then((res: FacebookLoginResponse) => {
      this.faceBook.api('me?fields=id,name,email,first_name,middle_name,last_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
          this.globalvars.setavatarFacebook(profile['picture_large']['data']['url']);
          let iduserface = profile["id"];
          let nomeuserface = profile['first_name'];
          let nameuserface = profile['name'];
          let emailuserface = profile['email'];
          let avataruserface = profile['picture_large']['data']['url'];
          if ((avataruserface === "")||(avataruserface === "null")||(avataruserface === "undefined")) {
              avataruserface = "assets/imgs/user.png";
          }
          if (profile['last_name'] !== '') nomeuserface += " " + profile['last_name'];
          let dataParam = {
              "face_id": iduserface,
              "nome": nomeuserface,
              "email": emailuserface,
              "apelido": nameuserface,
              "one_signal": this.globalvars.getidDeviceOneSignal(),
              'one_signal_token': this.globalvars.gettokenDeviceOneSignal(),
              "unic_id": this.globalvars.getunicDevieID()
          };
          this.clientrest.loginFacebook(dataParam).then(data => {
            if (data["result"] == "N")
            {
                this.CriaAlerta("Login", data["message"]);
            }
            else
            {
                this.globalvars.setnomeFacebook(nomeuserface);
                this.storage.set('pokerClubs_tipoLogin', 'F');
                this.storage.set('pokerClubs_emailUsuario', emailuserface);
                this.storage.set('pokerClubs_faceidUsuario', iduserface);
                this.storage.set('pokerClubs_nomeUsuario', nomeuserface);
                this.storage.set('pokerClubs_apelidoUsuario', nameuserface);
                this.storage.set('pokerClubs_avatarUsuario', avataruserface);
                this.globalvars.setnomeFacebook(nomeuserface);
                this.globalvars.setidUsuario(data["user_id"]);
                this.globalvars.setavatarFacebook(avataruserface);
                this.updateAvatar();
                this.menuPokerclubsPage.updateAvatar();
                //this.globalvars.settipoPesquisaClubes("R"); // Tipo de Pesquisa do Clube R= Raio C= Cidade N= Nome
                //this.loadingPage('MenuPokerclubsPage',null);
                //this.navCtrl.setRoot('MenuPokerclubsPage');
                this.navCtrl.pop();
            }
        });
      });
    })
    .catch(e =>
        {
            this.CriaAlerta("PokerClubs","Ocorreu um erro ao tentar se conectar ao Facebook.");
        }
    );
  }

  exibirLogin() {
    //console.log("exibeUsuarioESenha", this.exibeUsuarioESenha);
    this.exibeUsuarioESenha = ! this.exibeUsuarioESenha;          
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

  acessarAppSemCadastro() {
    this.exibeUsuarioESenha = false;
    this.email = "contato@pokerclubsapp.com.br";
    this.senha = "";
    this.validUser();    
  }
  fecharlogin() {
      //this.globalvars.settipoPesquisaClubes("R");
      this.navCtrl.setRoot('MenuPokerclubsPage');
     // this.loadingPage('MenuPokerclubsPage', null);
  }
  desconectarLogin() {
      const alert = this.alertCtrl.create({
          title: 'Desconectar sua conta',
          message: 'Tem certeza que desejas desconectar sua conta?',
          cssClass: 'alertaCustom',
          enableBackdropDismiss: false,
          buttons: [{
              text: 'Desconectar',
              role: 'continuar',
              handler: () => {
                  this.numberPage = true;
                  this.acessarAppSemCadastro();
              }
          }, {
              text: 'Cancelar',
              handler: () => {
                  this.updateAvatar();
                  this.menuPokerclubsPage.updateAvatar();
                  this.navCtrl.pop();
                  //this.navCtrl.setRoot('MenuPokerclubsPage');
              }
          }]
      });
      alert.present();
  }
}
