import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExibepremioPromocoesPokerclubsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exibepremio-promocoes-pokerclubs',
  templateUrl: 'exibepremio-promocoes-pokerclubs.html',
})
export class ExibepremioPromocoesPokerclubsPage {

  public nomeTorneio: any;
  public frasePremio: any;
  public imagemCarta: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.nomeTorneio  = this.navParams.get("nomeTorneio");
    this.frasePremio  = this.navParams.get("frasePremio");
    this.imagemCarta  = this.navParams.get("imagemCarta");
  }

}
