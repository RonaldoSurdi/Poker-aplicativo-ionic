import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import * as $ from "jquery";
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
import { ClientrestPokerclubsProvider} from '../../providers/clientrest-pokerclubs/clientrest-pokerclubs';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';

@IonicPage()
@Component({
  selector: 'page-promocoespremium-pokerclubs',
  templateUrl: 'promocoespremium-pokerclubs.html',
})
export class PromocoespremiumPokerclubsPage {

  public unregisterBackButtonAction: any;
  public cartasFrente: any;
  textoParabens: string;
  textoPremio: string;
  textoCarta: string;
  textoNomeClube: string;
  permiteClicar: boolean = true;


  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
              public globalvars: GlobalVarsProvider, public clientrest: ClientrestPokerclubsProvider,
              public alertCtrl: AlertController, public modalCtrl: ModalController,
              public angularFireDB: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    
  }

  ionViewWillEnter() {
    this.initializeBackButtonCustomHandler();
    this.textoParabens  = "";
    this.textoPremio    = "";
    this.textoNomeClube = "";
    this.textoCarta     = "";
    this.permiteClicar  = true;
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

  viraCarta(indiceCartaClicada) {
    if (! this.permiteClicar) {
      return;
    }
    this.permiteClicar  = false;
    let premiosDisponiveis: any;    
    let dataParamGetPremiosTorneios    = {
      'tournament_id' : this.globalvars.getidTorneioInscricao(),
      'user_id': this.globalvars.getidUsuario()
    };
    // Chamando o metodo para trazer os premios do torneio
    this.clientrest.getPremiosTorneios(dataParamGetPremiosTorneios).then(data => {
      if (data["result"] == "S") {
        // Armazena os numeros disponiveis que estao no servidor
        premiosDisponiveis = data["items"];
        // Array de configuracao das cartas no momento que chama a funcao para que as cartas seja aleatoriamente exibidas
        this.cartasFrente = [
          { id: "carta_1", nome: "Dez",      imagem: "assets/imgs/promocoes/dez.png"},
          { id: "carta_2", nome: "Valete",   imagem: "assets/imgs/promocoes/valete.png"},
          { id: "carta_3", nome: "Dama",     imagem: "assets/imgs/promocoes/dama.png"},
          { id: "carta_4", nome: "Rei",      imagem: "assets/imgs/promocoes/rei.png"},
          { id: "carta_5", nome: "Ás",       imagem: "assets/imgs/promocoes/as.png"},
          { id: "carta_6", nome: "Curinga",  imagem: "assets/imgs/promocoes/curinga.png"}  
        ];
        let indice = this.calculaAleatorio(premiosDisponiveis);
        let nomeCarta = "";        
        this.cartasFrente.forEach(element => {
          if (element["nome"].toUpperCase() === premiosDisponiveis[indice]["card"].toUpperCase()) {
            $('#' + this.cartasFrente[indiceCartaClicada]["id"]).attr("src", element["imagem"]);
            nomeCarta = element["nome"];
          }
        });
        // Salvando o premio recebido
        let dataputUsuarioPremioTorneio    = {
          'tournament_id': this.globalvars.getidTorneioInscricao(),
          'user_id': this.globalvars.getidUsuario(),          
          'premium_id':  premiosDisponiveis[indice]["id"]
        };
        this.clientrest.putInscricaoTorneio(dataputUsuarioPremioTorneio).then(dataPremioEspecial => {
          if (dataPremioEspecial["result"] == "S") {
            // Informa o usuario que ele ganhou o premio
            this.textoParabens  = "PARABÉNS!!!!! Confirmada sua inscrição.";
            this.textoPremio    = premiosDisponiveis[indice]["premium"];
            this.textoNomeClube = "Torneio: " + this.globalvars.getnomeTorneioInscricao();    
            this.textoCarta     = "Sua Carta da Sorte é: " + nomeCarta.toUpperCase();
            let idJogador = this.globalvars.getidUsuario();
            let nomeJogador = this.globalvars.getnomeFacebook();
            let nomeClube = this.globalvars.getdadosClubeAtual()["name"];
            let nomeTorneioSet = this.globalvars.getnomeTorneioInscricao() + ' - ' + this.globalvars.getidTorneioInscricao();
            const newData = this.angularFireDB.database.ref('chatrooms/'+nomeClube+'/'+nomeTorneioSet+'/').push();
            newData.set({
                cod:idJogador,
                jogador:nomeJogador,
                tipo:'inscrito',
                mensagem:nomeJogador+' se Inscreveu no Torneio.',
                data:Date()
            });
          } else {
            this.CriaAlerta("Inscreva-se", dataPremioEspecial["message"]);
            this.navCtrl.pop();
          };
        });
      } else {
        this.CriaAlerta("Inscreva-se", data["message"]);
        this.navCtrl.pop();  
      }
    });
  }

  calculaAleatorio(vetorCartas) {
    let elementoAleatorio = Math.floor(Math.random() * vetorCartas.length);
    return elementoAleatorio;
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
  //Funcao que cria o model da propaganda quando entrar no mapa
  ExibePremio(frasePremio, imagemCarta)
  {
    let data = {
      nomeTorneio: this.globalvars.getnomeTorneioInscricao(),
      frasePremio: frasePremio,
      imagemCarta: imagemCarta
    };
    
    let options = {
      enableBackdropDismiss: false,
      showBackdrop: false

    }
    let bannerModal = this.modalCtrl.create('ExibepremioPromocoesPokerclubsPage', data, options);
    bannerModal.present();
  }
  */
}
