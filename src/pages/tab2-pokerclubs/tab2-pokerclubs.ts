import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientrestPokerclubsProvider } from "../../providers/clientrest-pokerclubs/clientrest-pokerclubs";
import { AlertController } from 'ionic-angular';
import { FormBuilder, Validators} from '@angular/forms';
import { Platform } from 'ionic-angular';
import { GlobalVarsProvider  } from '../../providers/global-vars/global-vars';
//import { AppMinimize } from '@ionic-native/app-minimize';


@IonicPage()
@Component({
  selector: 'page-tab2-pokerclubs',
  templateUrl: 'tab2-pokerclubs.html',
})
export class Tab2PokerclubsPage {


  dadosClube: any = {};
  public unregisterBackButtonAction: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public clientrest: ClientrestPokerclubsProvider, 
              public alertCtrl: AlertController, public formBuilder: FormBuilder, public platform: Platform,
              public globalvars: GlobalVarsProvider) { //, public appMinimize: AppMinimize
    this.dadosClube = this.formBuilder.group({
      nome: ['', Validators.required],
      proprietario: ['', Validators.required],
      telefone: ['', Validators.required]
    });

    
  }

  ionViewDidEnter()
  {        
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
    //this.appMinimize.minimize();
      this.navCtrl.parent.select(0);
  }

  saveClub() {
    let dataParam    = {
          'nome': this.dadosClube.value.nome,
          'proprietario': this.dadosClube.value.proprietario,
          'telefone': this.dadosClube.value.telefone,
          'id_user': this.globalvars.getidUsuario()
    };

    this.clientrest.saveClub(dataParam).then(data => {
    if (data["result"] == "S")
    {
      this.CriaAlerta("PokerClubs", "Obrigado por indicar o clube. Entraremos em contato com ele o mais breve possível.");
      this.navCtrl.pop();
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

}
