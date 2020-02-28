import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { ClientrestPokerclubsProvider } from "../../providers/clientrest-pokerclubs/clientrest-pokerclubs";
import { GlobalVarsProvider  } from '../../providers/global-vars/global-vars';

@IonicPage()
@Component({
  selector: 'page-localizar-clube-pokerclubs',
  templateUrl: 'localizar-clube-pokerclubs.html',
})
export class LocalizarClubePokerclubsPage {

  localizar: string = "localizar-cidade";
  cidades: any;
  clubes: any;
  searchCidades: string;
  searchClubes: string;
  exibirListaCidades: boolean = false;
  exibirListaClubes: boolean = false;
  listaCidadesCount: number = 0;
  cidadeSelected = [0,'','',''];
  listaClubesCount: number = 0;
  clubeSelected = [0,'','',''];
  public unregisterBackButtonAction: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
              private clientrest: ClientrestPokerclubsProvider, public alertCtrl: AlertController,
              public globalvars: GlobalVarsProvider) {


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
    //this.appMinimize.minimize();
    this.navCtrl.parent.select(0);
  }

  getCidades(evento) {
    let textoCidade = evento.target.value;
    let dataParam = {search: textoCidade};
    this.listaCidadesCount = 0;
    this.cidadeSelected = [0,'','',''];
    if (textoCidade.trim().length >= 3) {
      this.clientrest.getCidades(dataParam).then(data => {
        if (data["result"] == "N")
          {
            this.CriaAlerta("Cidades", data["message"]);
            this.exibirListaCidades = false;
          }
          else
          {
            this.cidades = data["items"];
            this.listaCidadesCount = this.cidades.length;
            this.cidadeSelected = [this.cidades[0].id, this.cidades[0].text, this.cidades[0].lat, this.cidades[0].lng];
            this.exibirListaCidades = true;
          }
        });  
    }
  }

  selecionaCidade(codigoCidadeSelecionada, nomeCidadeSelecionada, latCidadeSelecionada, lngCidadeSelecionada) {
    this.searchCidades = nomeCidadeSelecionada;
    this.globalvars.setcodigoCidadeAtual(codigoCidadeSelecionada, nomeCidadeSelecionada, latCidadeSelecionada, lngCidadeSelecionada);
    this.exibirListaCidades = false;
    this.localizarClubesCidade();
  }

  escondeListaCidades() {
      this.listaCidadesCount = 0;
      this.cidadeSelected = [0,'','',''];
      this.globalvars.setcodigoCidadeAtual(0,"","","");
      this.exibirListaCidades = false;
      this.globalvars.setlocalizandoClubes(false);
  }

  localizarClubesCidade() {
    let cidadeSelectedArray = this.globalvars.getcodigoCidadeAtual();
    let dataParam = {
      'city_id' : cidadeSelectedArray[0],
      'user_id': this.globalvars.getidUsuario()
    };
    if (cidadeSelectedArray[0]!==0) {
        this.clientrest.getClubsCidades(dataParam).then(data => {
            if (data["result"] == "S") {
                let clubesCidades = data["items"];
                if (clubesCidades.length > 0) {
                    this.globalvars.settipoPesquisaClubes("C"); // Tipo de Pesquisa do Clube C= Cidade N= Nome
                    this.globalvars.setlocalizandoClubes(true);
                    this.navCtrl.parent.select(0);
                } else {
                    this.CriaAlerta("Localizar Clubes", "Não foi localizado nenhum clube na cidade desejada.");
                }
            } else {
                this.CriaAlerta("Localizar Clubes", data["message"]);
            }
        });
    } else if (this.cidadeSelected[0]!==0) {
        if (this.listaCidadesCount == 1) {
            this.selecionaCidade(this.cidadeSelected[0], this.cidadeSelected[1], this.cidadeSelected[2], this.cidadeSelected[3]);
            this.localizarClubesCidade();
        } else if (this.listaCidadesCount > 1) {
            this.CriaAlerta("Localizar Clubes", this.listaCidadesCount + " cidades localizadas, selecione na lista abaixo...");
        }
    } else {
        this.CriaAlerta("Localizar Clubes", "Entre com a Cidade que desejas localizar...");
    }
  }

  getClubsAutoComplete(evento) {
    let textoClube = evento.target.value;
    let dataParam = {
                      search: textoClube,
                      user_id: this.globalvars.getidUsuario()                      
                    };
    this.listaClubesCount = 0;
    this.clubeSelected = [0,'','',''];
    if (textoClube.trim().length >= 3) {
      this.clientrest.getClubsAutoComplete(dataParam).then(data => {
        if (data["result"] == "N")
          {
            this.CriaAlerta("Clubes", data["message"]);
            this.exibirListaClubes = false;
          }
          else
          {
            this.clubes = data["items"];
            this.listaClubesCount = this.clubes.length;
            this.clubeSelected = [this.clubes[0].id, this.clubes[0].name, this.clubes[0].lat, this.clubes[0].lng];
            this.exibirListaClubes = true;
          }
        });  
    }
  }

  selecionaClube(codigoClubeSelecionado, nomeClubeSelecionado, latClubeSelecionado, lngClubeSelecionado) {
      this.searchClubes = nomeClubeSelecionado;
      this.globalvars.setcodigoClubeAtual(codigoClubeSelecionado, nomeClubeSelecionado, latClubeSelecionado, lngClubeSelecionado);
      this.exibirListaClubes = false;
      this.localizarClubesAutoComplete();
  }

  escondeListaClubes() {
    this.listaClubesCount = 0;
    this.clubeSelected = [0,'','',''];
    this.globalvars.setcodigoClubeAtual(0,"","","");
    this.exibirListaClubes = false;
    this.globalvars.setlocalizandoClubes(false);
  }

  localizarClubesAutoComplete() {
    let clubeSelectedArray = this.globalvars.getcodigoClubeAtual();
    let dataParam = {
        'club_id' : clubeSelectedArray[0],
        'user_id': this.globalvars.getidUsuario()
    };
    if (clubeSelectedArray[0]!==0) {
        this.clientrest.getoClub(dataParam).then(data => {
            if (data["result"] == "S") {
                //let clubesAutoComplete = data;
                //if (clubesAutoComplete.length > 0) {
                    this.globalvars.settipoPesquisaClubes("N"); // Tipo de Pesquisa do Clube C= Cidade N= Nome
                    this.globalvars.setlocalizandoClubes(true);
                    this.navCtrl.parent.select(0);
                /*} else {
                    this.CriaAlerta("Localizar Clubes", "Não foi localizado nenhum clube com nome informado.");
                }*/
            }
            else {
                this.CriaAlerta("Localizar Clubes", data["message"]);
            }
        });
    } else if (this.clubeSelected[0]!==0) {
        if (this.listaClubesCount == 1) {
            this.selecionaClube(this.clubeSelected[0], this.clubeSelected[1], this.clubeSelected[2], this.clubeSelected[3]);
            this.localizarClubesAutoComplete();
        } else if (this.listaClubesCount > 1) {
            this.CriaAlerta("Localizar Clubes", this.listaClubesCount + " clubes localizados, selecione na lista abaixo...");
        }
    } else {
        this.CriaAlerta("Localizar Clubes", "Entre com a Clube que desejas localizar...");
    }
  }

  // Funcao para criar alertas em todo o sistema
  CriaAlerta(titulo, subtitulo)
  {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: subtitulo,
      enableBackdropDismiss: false,
      cssClass: 'alertaCustom-localizar',
      buttons: ['OK']
    });
    alert.present();
  }
  voltarInicio() {
      if (this.globalvars.getLocationInit()) {
          this.CriaAlerta('Atenção', 'Como seu GPS está desativado, é necessário localizar uma cidade ou clube para poder continuar.');
      } else {
          this.escondeListaCidades();
          this.escondeListaClubes();
          this.navCtrl.parent.select(0);
      }
  }
}
