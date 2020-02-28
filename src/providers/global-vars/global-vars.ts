import { Injectable } from '@angular/core';


@Injectable()
export class GlobalVarsProvider {
  public unicDevieID: string;
  public avatarFacebook: string;
  public nomeFacebook: string;
  public galeriaFotosAtual: string;
  public idTorneioRankingAtual: string;
  public nomeTorneioRankingAtual: string;
  public premioNormalTorneio: any;
  public premioEspecialTorneio: any;
  public idTorneioInscricao: any;
  public nomeTorneioInscricao: any;
  public idUsuario: any;
  public dadosClubeAtual: any;
  public tipoPesquisaClubes: any;
  public codigoCidadeAtual: any;
  public codigoClubeAtual: any;
  public localizandoClubes: any;
  public latAtualDispositivo: any = null;
  public lngAtualDispositivo: any = null;
  public abriuAPPPelaNotificacao: any;
  public idUsuarioFacebook: any;
  public textoLocallizarClube: any;
  public etapasTorneioRankingAtual: any;
  public torneiosRanking: any;
  public jogadoresEtapa: any;
  public nomeEtapaRankingAtual: any;
  public recebeuNotificacao: any;
  public linkBannerPromocao: any;
  public exibirLinkBannerPromocao: any;
  public idMensagemAtual: any;
  public idMensagemOneSignalAtual: any;
  public idDeviceOneSignal: any;
  public tokenDeviceOneSignal: any;
  public semPosicaoAtual: any;
  public locationInit:boolean = false;
  public locationPos: any;
  public chatGeral: string;

  constructor() {
    this.unicDevieID = "";
    this.idUsuario = "";
    this.torneiosRanking = "";
    this.galeriaFotosAtual = "";
    this.idTorneioRankingAtual = "";
    this.nomeTorneioRankingAtual = "";
    this.premioNormalTorneio = [];
    this.premioEspecialTorneio = [];
    this.idTorneioInscricao = [];
    this.nomeTorneioInscricao = "";
    this.dadosClubeAtual = {};
    this.tipoPesquisaClubes = "R";
    this.codigoCidadeAtual = [0,'','',''];
    this.codigoClubeAtual = [0,'','',''];
    this.localizandoClubes = false;
    this.latAtualDispositivo = "";
    this.lngAtualDispositivo = null;
    this.abriuAPPPelaNotificacao = false;
    this.recebeuNotificacao = false;
    this.idUsuarioFacebook = "";
    this.textoLocallizarClube = "";
    this.etapasTorneioRankingAtual = "";
    this.jogadoresEtapa = "";
    this.nomeEtapaRankingAtual = "";
    this.linkBannerPromocao = "";
    this.exibirLinkBannerPromocao = true;
    this.nomeFacebook = "";
    this.idMensagemAtual = "";
    this.idMensagemOneSignalAtual = "";
    this.idDeviceOneSignal = "";
    this.tokenDeviceOneSignal = "";
    this.semPosicaoAtual = false;
    this.locationInit = true;
    this.locationPos = [0,0];
    this.chatGeral = "";
  }

  ///////////////////////////////////////////////////////
  //                  idUsuario
  ////////////////////////////////////////////////////////
  setunicDevieID(value) {
      this.unicDevieID = value;
  }

  getunicDevieID() {
      return this.unicDevieID;
  }

  ///////////////////////////////////////////////////////
  //                  idUsuario
  ////////////////////////////////////////////////////////
  setidUsuario(value) {
    this.idUsuario = value;
  }

  getidUsuario() {
    if ((this.idUsuario==='')||(this.idUsuario===null)) this.idUsuario = 1;
    return this.idUsuario;
  }

  ///////////////////////////////////////////////////////
  //                  idUsuarioFacebook
  ////////////////////////////////////////////////////////
  setidUsuarioFacebook(value) {
    this.idUsuarioFacebook = value;
  }

  getidUsuarioFacebook() {
    return this.idUsuarioFacebook;
  }

  ///////////////////////////////////////////////////////
  //                  dadosClubeAtual
  ////////////////////////////////////////////////////////
  setdadosClubeAtual(value) {
    this.dadosClubeAtual = value;
  }

  getdadosClubeAtual() {
    return this.dadosClubeAtual;
  }


  ///////////////////////////////////////////////////////
  //                  galeriaFotosAtual
  ////////////////////////////////////////////////////////
  setgaleriaFotosAtual(value) {
    this.galeriaFotosAtual = value;
  }

  getgaleriaFotosAtual() {
    return this.galeriaFotosAtual;
  }

  ///////////////////////////////////////////////////////
  //                  idTorneioRankingAtual
  ////////////////////////////////////////////////////////
  setidTorneioRankingAtual(value) {
    this.idTorneioRankingAtual = value;
  }

  getidTorneioRankingAtual() {
    return this.idTorneioRankingAtual;
  }

  ///////////////////////////////////////////////////////
  //                  nomeTorneioRankingAtual
  ////////////////////////////////////////////////////////
  setnomeTorneioRankingAtual(value) {
    this.nomeTorneioRankingAtual = value;
  }

  getnomeTorneioRankingAtual() {
    return this.nomeTorneioRankingAtual;
  }

  ///////////////////////////////////////////////////////
  //                  nomeEtapaRankingAtual
  ////////////////////////////////////////////////////////
  setnomeEtapaRankingAtual(value) {
    this.nomeEtapaRankingAtual = value;
  }

  getnomeEtapaRankingAtual() {
    return this.nomeEtapaRankingAtual;
  }

  ///////////////////////////////////////////////////////
  //                  EtapasTorneioRankingAtual
  ////////////////////////////////////////////////////////
  setetapasTorneioRankingAtual(value) {
    this.etapasTorneioRankingAtual = value;
  }

  getetapasTorneioRankingAtual() {
    return this.etapasTorneioRankingAtual;
  }

  ///////////////////////////////////////////////////////
  //                  premioNormalTorneio
  ////////////////////////////////////////////////////////
  setpremioNormalTorneio(value) {
    this.premioNormalTorneio = value;
  }

  getpremioNormalTorneio() {
    return this.premioNormalTorneio;

  }

  ///////////////////////////////////////////////////////
  //                  premioEspecialTorneio
  ////////////////////////////////////////////////////////
  setpremioEspecialTorneio(value) {
    this.premioEspecialTorneio = value;
  }

  getpremioEspecialTorneio() {
    return this.premioEspecialTorneio;
  }

  ///////////////////////////////////////////////////////
  //                  idTorneioInscricao
  ////////////////////////////////////////////////////////
  setidTorneioInscricao(value) {
    this.idTorneioInscricao = value;
  }

  getidTorneioInscricao() {
    return this.idTorneioInscricao;
  }

  ///////////////////////////////////////////////////////
  //                  nomeTorneioInscricao
  ////////////////////////////////////////////////////////
  setnomeTorneioInscricao(value) {
    this.nomeTorneioInscricao = value;
  }

  getnomeTorneioInscricao() {
    return this.nomeTorneioInscricao;
  }

  ///////////////////////////////////////////////////////
  //                  tipoPesquisaClubes
  ////////////////////////////////////////////////////////
  settipoPesquisaClubes(value) {
    this.tipoPesquisaClubes = value;
  }

  gettipoPesquisaClubes() {
    return this.tipoPesquisaClubes;
  }

  ///////////////////////////////////////////////////////
  //                  codigoCidadeAtual
  ////////////////////////////////////////////////////////
  setcodigoCidadeAtual(valueId,valueNome,valueLat,valueLng) {
    this.codigoCidadeAtual[0] = valueId;
    this.codigoCidadeAtual[1] = valueNome;
    this.codigoCidadeAtual[2] = valueLat;
    this.codigoCidadeAtual[3] = valueLng;
  }

  getcodigoCidadeAtual() {
    return this.codigoCidadeAtual;
  }

  ///////////////////////////////////////////////////////
  //                  codigoClubeAtual
  ////////////////////////////////////////////////////////
  setcodigoClubeAtual(valueId,valueNome,valueLat,valueLng) {
      this.codigoClubeAtual[0] = valueId;
      this.codigoClubeAtual[1] = valueNome;
      this.codigoClubeAtual[2] = valueLat;
      this.codigoClubeAtual[3] = valueLng;
  }

  getcodigoClubeAtual() {
      return this.codigoClubeAtual;
  }

  ///////////////////////////////////////////////////////
  //                  localizandoClubes
  ////////////////////////////////////////////////////////
  setlocalizandoClubes(value) {
    this.localizandoClubes = value;
  }

  getlocalizandoClubes() {
    return this.localizandoClubes;
  }

  ///////////////////////////////////////////////////////
  //                  latAtualDispositivo
  ////////////////////////////////////////////////////////
  setlatAtualDispositivo(value) {
    this.latAtualDispositivo = value;
  }

  getlatAtualDispositivo() {
    return this.latAtualDispositivo;
  }

  ///////////////////////////////////////////////////////
  //                  lngAtualDispositivo
  ////////////////////////////////////////////////////////
  setlngAtualDispositivo(value) {
    this.lngAtualDispositivo = value;
  }

  getlngAtualDispositivo() {
    return this.lngAtualDispositivo;
  }

  ///////////////////////////////////////////////////////
  //                  abriuAPPPelaNotificacao
  ////////////////////////////////////////////////////////
  setabriuAPPPelaNotificacao(value) {
    this.abriuAPPPelaNotificacao = value;
  }

  getabriuAPPPelaNotificacao() {
    return this.abriuAPPPelaNotificacao;
  }

  ///////////////////////////////////////////////////////
  //                  textoLocallizarClube
  ////////////////////////////////////////////////////////
  settextoLocallizarClube(value) {
    this.textoLocallizarClube = value;
  }

  gettextoLocallizarClube() {
    return this.textoLocallizarClube;
  }

  ///////////////////////////////////////////////////////
  //                  TorneiosRanking
  ////////////////////////////////////////////////////////
  settorneiosRanking(value) {
    this.torneiosRanking = value;
  }

  gettorneiosRanking() {
    return this.torneiosRanking;
  }

  ///////////////////////////////////////////////////////
  //                  jogadoresEtapa
  ////////////////////////////////////////////////////////
  setjogadoresEtapaAtual(value) {
    this.jogadoresEtapa = value;
  }

  getjogadoresEtapaAtual() {
    return this.jogadoresEtapa;
  }

  ///////////////////////////////////////////////////////
  //                  recebeuNotificacao
  ////////////////////////////////////////////////////////
  setrecebeuNotificacao(value) {
    this.recebeuNotificacao = value;
  }

  getrecebeuNotificacao() {
    return this.recebeuNotificacao;
  }

  ///////////////////////////////////////////////////////
  //                  LinkBannerPromocao
  ////////////////////////////////////////////////////////
  setlinkBannerPromocao(value) {
    this.linkBannerPromocao = value;
  }

  getlinkBannerPromocao() {
    return this.linkBannerPromocao;
  }

  ///////////////////////////////////////////////////////
  //                  exibirLinkBannerPromocao
  ////////////////////////////////////////////////////////
  setexibirLinkBannerPromocao(value) {
    this.exibirLinkBannerPromocao = value;
  }

  getexibirLinkBannerPromocao() {
    return this.exibirLinkBannerPromocao;
  }

  ///////////////////////////////////////////////////////
  //                  avatarFacebook
  ////////////////////////////////////////////////////////
  setavatarFacebook(value) {
    this.avatarFacebook = value;
  }

  getavatarFacebook() {
    return this.avatarFacebook;
  }

  ///////////////////////////////////////////////////////
  //                  nomeFacebook
  ////////////////////////////////////////////////////////
  setnomeFacebook(value) {
    this.nomeFacebook = value;
  }

  getnomeFacebook() {
    return this.nomeFacebook;
  }

  ///////////////////////////////////////////////////////
  //                  idMensagemAtual
  ////////////////////////////////////////////////////////
  setidMensagemAtual(value) {
    this.idMensagemAtual = value;
  }

  getidMensagemAtual() {
    return this.idMensagemAtual;
  }

  ///////////////////////////////////////////////////////
  //                  idMensagemOneSignalAtual
  ////////////////////////////////////////////////////////
  setidMensagemOneSignalAtual(value) {
    this.idMensagemOneSignalAtual = value;
  }

  getidMensagemOneSignalAtual() {
    return this.idMensagemOneSignalAtual;
  }

  ///////////////////////////////////////////////////////
  //                  idDeviceOneSignal
  ////////////////////////////////////////////////////////
  setidDeviceOneSignal(value) {
    this.idDeviceOneSignal = value;
  }

  getidDeviceOneSignal() {
    return this.idDeviceOneSignal;
  }
  settokenDeviceOneSignal(value) {
      this.tokenDeviceOneSignal = value;
  }

  gettokenDeviceOneSignal() {
      return this.tokenDeviceOneSignal;
  }

  ///////////////////////////////////////////////////////
  //                  setSemPosicaoAtual
  ////////////////////////////////////////////////////////
  setSemPosicaoAtual(value) {
    this.semPosicaoAtual = value;
  }

  getSemPosicaoAtual() {
    return this.semPosicaoAtual;
  }

  setLocationInit(value) {
      this.locationInit = value;
  }

  getLocationInit() {
      return this.locationInit;
  }

  setLocationPos(valuex,valuey) {
      this.locationPos[0] = valuex;
      this.locationPos[1] = valuey;
  }

  getLocationPos() {
      return this.locationPos;
  }

  setChatGeral(value) {
      this.chatGeral = value;
  }

  getChatGeral() {
      return this.chatGeral;
  }

  converteData(data) {
    let dateData = data.split('-');
    let year = dateData [0];
    let month = dateData [1];
    let day = dateData [2];
    let dateFormated = day + "/" + month + "/" + year;
    return dateFormated
  }
}
