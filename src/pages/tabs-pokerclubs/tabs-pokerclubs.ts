import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs-pokerclubs',
  templateUrl: 'tabs-pokerclubs.html',
})
export class TabsPokerclubsPage {

  tab1Root = 'Tab1PokerclubsPage';
  tab2Root = 'Tab2PokerclubsPage';
  tab3Root = 'LocalizarClubePokerclubsPage';
  myIndex: number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

}
