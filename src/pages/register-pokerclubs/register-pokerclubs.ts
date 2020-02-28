import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators} from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { ClientrestPokerclubsProvider } from "../../providers/clientrest-pokerclubs/clientrest-pokerclubs";
import { AlertController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { GlobalVarsProvider  } from '../../providers/global-vars/global-vars';
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-register-pokerclubs',
  templateUrl: 'register-pokerclubs.html',
})
export class RegisterPokerclubsPage {

  dadosRegister: any = {};

  public unregisterBackButtonAction: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
              public clientrest: ClientrestPokerclubsProvider, public alertCtrl: AlertController, 
              public platform: Platform, public globalvars: GlobalVarsProvider, private storage: Storage) {
      this.dadosRegister = this.formBuilder.group({
          nome: ['', Validators.required],
          apelido: ['', Validators.required],
          telefone: ['', Validators.required],
          email: ['', Validators.required],
          senha: ['', Validators.required],
          confirmarsenha: ['', Validators.required]
      });
  }

  ionViewDidLoad() {
    //this.initializeBackButtonCustomHandler();
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

  saveRegister() {
    if (this.dadosRegister.value.senha !== this.dadosRegister.value.confirmarsenha) {
      this.CriaAlerta("Cadastre-se", "Os campos senha e confirmar senha não estão corretos.")
      return;
    }
    let newEmail = this.dadosRegister.value.email;
    let newSenha = this.dadosRegister.value.senha;
    let newNome = this.dadosRegister.value.nome;
    let userIdupd = this.globalvars.getidUsuario();
    if (userIdupd === 1) userIdupd = '';

    let newApelido = this.dadosRegister.value.apelido;
    let dataParam    = {
          'email' : newEmail,
          'senha': newSenha,
          'nome': newNome,
          'apelido': newApelido,
          'telefone': this.dadosRegister.value.telefone,
          'one_signal': this.globalvars.getidDeviceOneSignal(),
          'one_signal_token': this.globalvars.gettokenDeviceOneSignal(),
          'userid' : userIdupd,
          'unic_id': this.globalvars.getunicDevieID()
    };

    this.clientrest.saveRegister(dataParam).then(data => {
      if (data["result"] == "S")
      {
          this.globalvars.setidUsuario(data["user_id"]);
          this.globalvars.setidUsuarioFacebook("");
          this.globalvars.setnomeFacebook(newNome);
          this.globalvars.setavatarFacebook("assets/imgs/user.png");
          this.storage.set('pokerClubs_tipoLogin', 'A');
          this.storage.set('pokerClubs_emailUsuario', newEmail);
          this.storage.set('pokerClubs_senhaUsuario', newSenha);
          this.storage.set('pokerClubs_nomeUsuario', newNome);
        this.CriaAlerta("PokerClubs", "Obrigado por se registrar. O PokerClubs agradece.");
        this.navCtrl.push('MenuPokerclubsPage');
      }
      else
      {
        this.CriaAlerta("Cadastre-se", data["message"]);
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

  closeCadastreSe() {
    this.navCtrl.pop(); //setRoot("LoginPokerclubsPage");
  }

}
