import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-aovivopremium-pokerclubs',
  templateUrl: 'aovivopremium-pokerclubs.html',
})
export class AovivopremiumPokerclubsPage {

  public unregisterBackButtonAction: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
  }

  ionViewDidLoad() {
    
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
    this.navCtrl.pop(); //("ClubpremiumPokerclubsPage");
  }

  closeAoVivoPremium() {
    this.navCtrl.pop(); //push("Tab1PokerclubsPage");
  }

}
