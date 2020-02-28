import {Injectable} from '@angular/core';
import { AlertController } from 'ionic-angular';


@Injectable()
export class UserController {

  API_URL: string = 'https://pokerclubsapp.com.br/api/';                
  constructor(private alertCtrl: AlertController) {
    
  }

  /*
    Funcao:     validUser
    Descricao:  Funcão que retorna se o usuario e senhas estao corretos
  */
  validUser(dataParam)
  {    

  }
  
  // Funcao para criar alertas em todo o sistema
  CriaAlerta()
  {
    let alert = this.alertCtrl.create({
      title: "PokerClubs",
      cssClass: 'alertaCustom',
      subTitle: "Ocorreu um erro ao requisitar os dados.<br>Tente novamente mais tarde.",
      enableBackdropDismiss: false,
      buttons: ['OK']
    });
    alert.present();
  }
}
