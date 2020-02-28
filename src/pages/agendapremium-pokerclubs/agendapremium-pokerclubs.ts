import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
import { ClientrestPokerclubsProvider} from '../../providers/clientrest-pokerclubs/clientrest-pokerclubs';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-agendapremium-pokerclubs',
  templateUrl: 'agendapremium-pokerclubs.html',
})
export class AgendapremiumPokerclubsPage {

  public unregisterBackButtonAction: any;
  agendas: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
              public globalvars: GlobalVarsProvider, public clientrest: ClientrestPokerclubsProvider,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.getAgendaSemanal();
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

  getAgendaSemanal() {
    let dataParam    = {
      'club_id' : this.globalvars.getdadosClubeAtual()["id"],
      'user_id': this.globalvars.getidUsuario()
    };
    this.clientrest.getAgendaSemanal(dataParam).then(data => {      
      if (data["result"] == "S") {
        this.agendas = data["items"];        
      }
      else {
        this.CriaAlerta("Agenda", data["message"]);
        this.navCtrl.pop();
      }
    });
  }

  semAgenda(diaSemana) {
    if (diaSemana.length == 0) {
      diaSemana.push({
        nome: "NÃO HAVERÁ PROGRAMAÇÃO",
        horario: "",
        descricao: ""
      }); 
    }
    return diaSemana;
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
