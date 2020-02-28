import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import * as $ from "jquery";

@IonicPage()
@Component({
  selector: 'page-rankingpremium-etapas-torneio-pokerclubs',
  templateUrl: 'rankingpremium-etapas-torneio-pokerclubs.html',
})
export class RankingpremiumEtapasTorneioPokerclubsPage {

  public unregisterBackButtonAction: any;
  etapas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
              public globalvars: GlobalVarsProvider, public alertCtrl: AlertController,
              public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    this.getEtapasTorneio();
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

  getEtapasTorneio() {
    this.etapas = this.globalvars.getetapasTorneioRankingAtual();
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

  openJogadoresEtapa(idRanking, idetapa, nomeetapa) {
    let listaRanking = this.globalvars.gettorneiosRanking();
    let objThis = this;
    $.each(listaRanking, function(index, value) {
      if (parseInt(value["id"]) == parseInt(idRanking)) {        
        // Se foi clicado no ranking geral
        if (parseInt(idetapa) == -1) {
          objThis.globalvars.setjogadoresEtapaAtual(value["rank_geral"]);
        } else {
          // Clicado na etapa
          let listaEtapas = value["steps"];
          $.each(listaEtapas, function(index, value) {
            if (parseInt(idetapa) == parseInt(value["id"])) {
              objThis.globalvars.setjogadoresEtapaAtual(value["rank"]);
            }
          });
        }
        objThis.globalvars.setnomeEtapaRankingAtual(nomeetapa);
        objThis.loadingPage("RankingpremiumJogadoresRankingPokerclubsPage",null);
      }
    });
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
}
