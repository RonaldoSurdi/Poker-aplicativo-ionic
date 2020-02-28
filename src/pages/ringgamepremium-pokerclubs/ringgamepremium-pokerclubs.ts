import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ringgamepremium-pokerclubs',
  templateUrl: 'ringgamepremium-pokerclubs.html',
})
export class RinggamepremiumPokerclubsPage {

  public unregisterBackButtonAction: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {

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
    this.navCtrl.pop(); //setRoot("ClubpremiumPokerclubsPage");
  }

  closeRingGamePremium() {
    this.navCtrl.pop(); //setRoot("ClubpremiumPokerclubsPage");
  }

}
