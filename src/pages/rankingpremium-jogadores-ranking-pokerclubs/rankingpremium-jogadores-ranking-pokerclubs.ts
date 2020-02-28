import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rankingpremium-jogadores-ranking-pokerclubs',
  templateUrl: 'rankingpremium-jogadores-ranking-pokerclubs.html',
})
export class RankingpremiumJogadoresRankingPokerclubsPage {

  public nomeTorneio: any;
  public nomeEtapa: any;
  public jogadores: any;
  public unregisterBackButtonAction: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public globalvars: GlobalVarsProvider, public photoViewer: PhotoViewer,
              public platform: Platform) {
  }

  ionViewDidLoad() {
    this.nomeTorneio = this.globalvars.getnomeTorneioRankingAtual();
    this.nomeEtapa   = this.globalvars.getnomeEtapaRankingAtual();
    this.jogadores   = this.globalvars.getjogadoresEtapaAtual();
    //console.log("jogadores", this.jogadores);
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
    this.navCtrl.pop(); //setRoot("GaleriaFotospremiumPokerclubsPage");
  }

  showZoomFoto(imagem, titulo) {
    this.photoViewer.show(imagem, titulo, {share: false});
  }
}
