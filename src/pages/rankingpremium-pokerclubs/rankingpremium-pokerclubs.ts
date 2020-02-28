import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { ClientrestPokerclubsProvider} from '../../providers/clientrest-pokerclubs/clientrest-pokerclubs';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
import { AlertController } from 'ionic-angular';
import * as $ from "jquery";
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rankingpremium-pokerclubs',
  templateUrl: 'rankingpremium-pokerclubs.html',
})
export class RankingpremiumPokerclubsPage {

  public unregisterBackButtonAction: any;
  public rankings: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
              public globalvars: GlobalVarsProvider, public clientrest: ClientrestPokerclubsProvider,
              public alertCtrl: AlertController, public loadingController: LoadingController) {
    
  }

  ionViewDidLoad() {
    this.getRanking();
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

  getRanking()
  {
    let dataParam    = {
                          'club_id' : this.globalvars.getdadosClubeAtual()["id"],
                          'user_id': this.globalvars.getidUsuario()
                       };
    this.clientrest.getRankings(dataParam).then(data => {                   
        if (data["result"] == "S") {
          this.rankings = data["items"];          
          //this.ranking = this.returnListaTorneios(this.ranking);
        }
        else {
          this.CriaAlerta("Ranking", data["message"]);
          this.navCtrl.pop();
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

  /*
  returnListaTorneios(ranking) {
    let listatorneios = [];
    $.each(ranking, function(index, value) {
      let idTorneioRanking   = value["tournament_id"];
      let nomeTorneioRanking = value["title"];
      var encontrouClube = $.grep(listatorneios, function(value, index) {
        return parseInt(idTorneioRanking) == parseInt(value["tournament_id"]);
      });
    
      if (encontrouClube.length == 0) {
        listatorneios.push({
          id: idTorneioRanking,
          titulo: nomeTorneioRanking
        })

      }
    });
    return listatorneios;
  }
  */

  openRanking(idRanking, nomeRanking) {
    let etapasRanking = [];
    $.each(this.rankings, function(index, value) {
      if (parseInt(idRanking) == parseInt(value["id"])) {

        etapasRanking.push({
          idtorneio: idRanking,
          idetapa: "-1",
          nomeetapa: "Ranking Geral"
        })

        let rankingSteps = value["steps"];
        $.each(rankingSteps, function(index, value) {
          etapasRanking.push({
            idtorneio: idRanking,
            idetapa: value["id"],
            nomeetapa: value["title"]
          })  
        });                
      }
    });

    this.globalvars.setidTorneioRankingAtual(idRanking);
    this.globalvars.setnomeTorneioRankingAtual(nomeRanking);
    this.globalvars.setetapasTorneioRankingAtual(etapasRanking);
    this.globalvars.settorneiosRanking(this.rankings);
    this.loadingPage("RankingpremiumEtapasTorneioPokerclubsPage",null);
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
