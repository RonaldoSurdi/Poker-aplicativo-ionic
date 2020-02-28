webpackJsonp([26],{

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVarsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalVarsProvider = /** @class */ (function () {
    function GlobalVarsProvider() {
        this.latAtualDispositivo = null;
        this.lngAtualDispositivo = null;
        this.locationInit = false;
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
        this.codigoCidadeAtual = [0, '', '', ''];
        this.codigoClubeAtual = [0, '', '', ''];
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
        this.locationPos = [0, 0];
        this.chatGeral = "";
    }
    ///////////////////////////////////////////////////////
    //                  idUsuario
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setunicDevieID = function (value) {
        this.unicDevieID = value;
    };
    GlobalVarsProvider.prototype.getunicDevieID = function () {
        return this.unicDevieID;
    };
    ///////////////////////////////////////////////////////
    //                  idUsuario
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setidUsuario = function (value) {
        this.idUsuario = value;
    };
    GlobalVarsProvider.prototype.getidUsuario = function () {
        if ((this.idUsuario === '') || (this.idUsuario === null))
            this.idUsuario = 1;
        return this.idUsuario;
    };
    ///////////////////////////////////////////////////////
    //                  idUsuarioFacebook
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setidUsuarioFacebook = function (value) {
        this.idUsuarioFacebook = value;
    };
    GlobalVarsProvider.prototype.getidUsuarioFacebook = function () {
        return this.idUsuarioFacebook;
    };
    ///////////////////////////////////////////////////////
    //                  dadosClubeAtual
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setdadosClubeAtual = function (value) {
        this.dadosClubeAtual = value;
    };
    GlobalVarsProvider.prototype.getdadosClubeAtual = function () {
        return this.dadosClubeAtual;
    };
    ///////////////////////////////////////////////////////
    //                  galeriaFotosAtual
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setgaleriaFotosAtual = function (value) {
        this.galeriaFotosAtual = value;
    };
    GlobalVarsProvider.prototype.getgaleriaFotosAtual = function () {
        return this.galeriaFotosAtual;
    };
    ///////////////////////////////////////////////////////
    //                  idTorneioRankingAtual
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setidTorneioRankingAtual = function (value) {
        this.idTorneioRankingAtual = value;
    };
    GlobalVarsProvider.prototype.getidTorneioRankingAtual = function () {
        return this.idTorneioRankingAtual;
    };
    ///////////////////////////////////////////////////////
    //                  nomeTorneioRankingAtual
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setnomeTorneioRankingAtual = function (value) {
        this.nomeTorneioRankingAtual = value;
    };
    GlobalVarsProvider.prototype.getnomeTorneioRankingAtual = function () {
        return this.nomeTorneioRankingAtual;
    };
    ///////////////////////////////////////////////////////
    //                  nomeEtapaRankingAtual
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setnomeEtapaRankingAtual = function (value) {
        this.nomeEtapaRankingAtual = value;
    };
    GlobalVarsProvider.prototype.getnomeEtapaRankingAtual = function () {
        return this.nomeEtapaRankingAtual;
    };
    ///////////////////////////////////////////////////////
    //                  EtapasTorneioRankingAtual
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setetapasTorneioRankingAtual = function (value) {
        this.etapasTorneioRankingAtual = value;
    };
    GlobalVarsProvider.prototype.getetapasTorneioRankingAtual = function () {
        return this.etapasTorneioRankingAtual;
    };
    ///////////////////////////////////////////////////////
    //                  premioNormalTorneio
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setpremioNormalTorneio = function (value) {
        this.premioNormalTorneio = value;
    };
    GlobalVarsProvider.prototype.getpremioNormalTorneio = function () {
        return this.premioNormalTorneio;
    };
    ///////////////////////////////////////////////////////
    //                  premioEspecialTorneio
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setpremioEspecialTorneio = function (value) {
        this.premioEspecialTorneio = value;
    };
    GlobalVarsProvider.prototype.getpremioEspecialTorneio = function () {
        return this.premioEspecialTorneio;
    };
    ///////////////////////////////////////////////////////
    //                  idTorneioInscricao
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setidTorneioInscricao = function (value) {
        this.idTorneioInscricao = value;
    };
    GlobalVarsProvider.prototype.getidTorneioInscricao = function () {
        return this.idTorneioInscricao;
    };
    ///////////////////////////////////////////////////////
    //                  nomeTorneioInscricao
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setnomeTorneioInscricao = function (value) {
        this.nomeTorneioInscricao = value;
    };
    GlobalVarsProvider.prototype.getnomeTorneioInscricao = function () {
        return this.nomeTorneioInscricao;
    };
    ///////////////////////////////////////////////////////
    //                  tipoPesquisaClubes
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.settipoPesquisaClubes = function (value) {
        this.tipoPesquisaClubes = value;
    };
    GlobalVarsProvider.prototype.gettipoPesquisaClubes = function () {
        return this.tipoPesquisaClubes;
    };
    ///////////////////////////////////////////////////////
    //                  codigoCidadeAtual
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setcodigoCidadeAtual = function (valueId, valueNome, valueLat, valueLng) {
        this.codigoCidadeAtual[0] = valueId;
        this.codigoCidadeAtual[1] = valueNome;
        this.codigoCidadeAtual[2] = valueLat;
        this.codigoCidadeAtual[3] = valueLng;
    };
    GlobalVarsProvider.prototype.getcodigoCidadeAtual = function () {
        return this.codigoCidadeAtual;
    };
    ///////////////////////////////////////////////////////
    //                  codigoClubeAtual
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setcodigoClubeAtual = function (valueId, valueNome, valueLat, valueLng) {
        this.codigoClubeAtual[0] = valueId;
        this.codigoClubeAtual[1] = valueNome;
        this.codigoClubeAtual[2] = valueLat;
        this.codigoClubeAtual[3] = valueLng;
    };
    GlobalVarsProvider.prototype.getcodigoClubeAtual = function () {
        return this.codigoClubeAtual;
    };
    ///////////////////////////////////////////////////////
    //                  localizandoClubes
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setlocalizandoClubes = function (value) {
        this.localizandoClubes = value;
    };
    GlobalVarsProvider.prototype.getlocalizandoClubes = function () {
        return this.localizandoClubes;
    };
    ///////////////////////////////////////////////////////
    //                  latAtualDispositivo
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setlatAtualDispositivo = function (value) {
        this.latAtualDispositivo = value;
    };
    GlobalVarsProvider.prototype.getlatAtualDispositivo = function () {
        return this.latAtualDispositivo;
    };
    ///////////////////////////////////////////////////////
    //                  lngAtualDispositivo
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setlngAtualDispositivo = function (value) {
        this.lngAtualDispositivo = value;
    };
    GlobalVarsProvider.prototype.getlngAtualDispositivo = function () {
        return this.lngAtualDispositivo;
    };
    ///////////////////////////////////////////////////////
    //                  abriuAPPPelaNotificacao
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setabriuAPPPelaNotificacao = function (value) {
        this.abriuAPPPelaNotificacao = value;
    };
    GlobalVarsProvider.prototype.getabriuAPPPelaNotificacao = function () {
        return this.abriuAPPPelaNotificacao;
    };
    ///////////////////////////////////////////////////////
    //                  textoLocallizarClube
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.settextoLocallizarClube = function (value) {
        this.textoLocallizarClube = value;
    };
    GlobalVarsProvider.prototype.gettextoLocallizarClube = function () {
        return this.textoLocallizarClube;
    };
    ///////////////////////////////////////////////////////
    //                  TorneiosRanking
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.settorneiosRanking = function (value) {
        this.torneiosRanking = value;
    };
    GlobalVarsProvider.prototype.gettorneiosRanking = function () {
        return this.torneiosRanking;
    };
    ///////////////////////////////////////////////////////
    //                  jogadoresEtapa
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setjogadoresEtapaAtual = function (value) {
        this.jogadoresEtapa = value;
    };
    GlobalVarsProvider.prototype.getjogadoresEtapaAtual = function () {
        return this.jogadoresEtapa;
    };
    ///////////////////////////////////////////////////////
    //                  recebeuNotificacao
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setrecebeuNotificacao = function (value) {
        this.recebeuNotificacao = value;
    };
    GlobalVarsProvider.prototype.getrecebeuNotificacao = function () {
        return this.recebeuNotificacao;
    };
    ///////////////////////////////////////////////////////
    //                  LinkBannerPromocao
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setlinkBannerPromocao = function (value) {
        this.linkBannerPromocao = value;
    };
    GlobalVarsProvider.prototype.getlinkBannerPromocao = function () {
        return this.linkBannerPromocao;
    };
    ///////////////////////////////////////////////////////
    //                  exibirLinkBannerPromocao
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setexibirLinkBannerPromocao = function (value) {
        this.exibirLinkBannerPromocao = value;
    };
    GlobalVarsProvider.prototype.getexibirLinkBannerPromocao = function () {
        return this.exibirLinkBannerPromocao;
    };
    ///////////////////////////////////////////////////////
    //                  avatarFacebook
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setavatarFacebook = function (value) {
        this.avatarFacebook = value;
    };
    GlobalVarsProvider.prototype.getavatarFacebook = function () {
        return this.avatarFacebook;
    };
    ///////////////////////////////////////////////////////
    //                  nomeFacebook
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setnomeFacebook = function (value) {
        this.nomeFacebook = value;
    };
    GlobalVarsProvider.prototype.getnomeFacebook = function () {
        return this.nomeFacebook;
    };
    ///////////////////////////////////////////////////////
    //                  idMensagemAtual
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setidMensagemAtual = function (value) {
        this.idMensagemAtual = value;
    };
    GlobalVarsProvider.prototype.getidMensagemAtual = function () {
        return this.idMensagemAtual;
    };
    ///////////////////////////////////////////////////////
    //                  idMensagemOneSignalAtual
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setidMensagemOneSignalAtual = function (value) {
        this.idMensagemOneSignalAtual = value;
    };
    GlobalVarsProvider.prototype.getidMensagemOneSignalAtual = function () {
        return this.idMensagemOneSignalAtual;
    };
    ///////////////////////////////////////////////////////
    //                  idDeviceOneSignal
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setidDeviceOneSignal = function (value) {
        this.idDeviceOneSignal = value;
    };
    GlobalVarsProvider.prototype.getidDeviceOneSignal = function () {
        return this.idDeviceOneSignal;
    };
    GlobalVarsProvider.prototype.settokenDeviceOneSignal = function (value) {
        this.tokenDeviceOneSignal = value;
    };
    GlobalVarsProvider.prototype.gettokenDeviceOneSignal = function () {
        return this.tokenDeviceOneSignal;
    };
    ///////////////////////////////////////////////////////
    //                  setSemPosicaoAtual
    ////////////////////////////////////////////////////////
    GlobalVarsProvider.prototype.setSemPosicaoAtual = function (value) {
        this.semPosicaoAtual = value;
    };
    GlobalVarsProvider.prototype.getSemPosicaoAtual = function () {
        return this.semPosicaoAtual;
    };
    GlobalVarsProvider.prototype.setLocationInit = function (value) {
        this.locationInit = value;
    };
    GlobalVarsProvider.prototype.getLocationInit = function () {
        return this.locationInit;
    };
    GlobalVarsProvider.prototype.setLocationPos = function (valuex, valuey) {
        this.locationPos[0] = valuex;
        this.locationPos[1] = valuey;
    };
    GlobalVarsProvider.prototype.getLocationPos = function () {
        return this.locationPos;
    };
    GlobalVarsProvider.prototype.setChatGeral = function (value) {
        this.chatGeral = value;
    };
    GlobalVarsProvider.prototype.getChatGeral = function () {
        return this.chatGeral;
    };
    GlobalVarsProvider.prototype.converteData = function (data) {
        var dateData = data.split('-');
        var year = dateData[0];
        var month = dateData[1];
        var day = dateData[2];
        var dateFormated = day + "/" + month + "/" + year;
        return dateFormated;
    };
    GlobalVarsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GlobalVarsProvider);
    return GlobalVarsProvider;
}());

//# sourceMappingURL=global-vars.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientrestPokerclubsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientrestPokerclubsProvider = /** @class */ (function () {
    function ClientrestPokerclubsProvider(http, alertCtrl, platform) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.API_URL = 'https://pokerclubsapp.com.br/api/';
    }
    /*
      Funcao:     validUser
      Descricao:  Funcão que retorna se o usuario e senhas estao corretos
    */
    ClientrestPokerclubsProvider.prototype.validUser = function (dataParam) {
        var _this = this;
        var methodParam = "validUser";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    /*
      Funcao:     loginFacebook
      Descricao:  Funcão que retorna se o usuario e senhas estao corretos
    */
    ClientrestPokerclubsProvider.prototype.loginFacebook = function (dataParam) {
        var _this = this;
        var methodParam = "loginFace";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    /*
      Funcao:     getClubs
      Descricao:  Funcão que retorna os clubes proximos da localizacao do Usuario
    */
    ClientrestPokerclubsProvider.prototype.getClubs = function (dataParam) {
        var _this = this;
        var methodParam = "getClubs";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    /*
      Funcao:     getImagensClub()
      Descricao:  Funcão que retorna as imagens do club
    */
    ClientrestPokerclubsProvider.prototype.getFotosGaleriaClub = function (dataParam) {
        var _this = this;
        var methodParam = "getPhotosGallery";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    /*
      Funcao:     saveRegister
      Descricao:  Funcão salva dos dados do cadastro do usuario
    */
    ClientrestPokerclubsProvider.prototype.saveRegister = function (dataParam) {
        var _this = this;
        var methodParam = "putUser";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    /*
      Funcao:     saveClub
      Descricao:  Funcão que salva os dados do club indicado
    */
    ClientrestPokerclubsProvider.prototype.saveClub = function (dataParam) {
        var _this = this;
        var methodParam = "indClub";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    /*
      Funcao:     getoClub
      Descricao:  Funcao que retorna o texto do clube
    */
    ClientrestPokerclubsProvider.prototype.getoClub = function (dataParam) {
        var _this = this;
        var methodParam = "getClub";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    /*
      Funcao:     getImagensClub()
      Descricao:  Função que retorna a lista de Galeria de Fotos do Clube
    */
    ClientrestPokerclubsProvider.prototype.getGaleriaFotosClub = function (dataParam) {
        var _this = this;
        var methodParam = "getGalleries";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    /*
      Funcao:     getTorneios()
      Descricao:  Funcão que retorna as imagens do club
    */
    ClientrestPokerclubsProvider.prototype.getTorneios = function (dataParam) {
        var _this = this;
        var methodParam = "getTournaments";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /*
      Funcao:     getPremiosTorneios()
      Descricao:  Funcão que retorna os premios de um torneio
    */
    ClientrestPokerclubsProvider.prototype.getPremiosTorneios = function (dataParam) {
        var _this = this;
        var methodParam = "getPromotion";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /*
     Funcao:     putInscricaoTorneioNormal()
     Descricao:  Salva a inscricao do usuarios para torneios que nao possuem premios
   */
    ClientrestPokerclubsProvider.prototype.putInscricaoTorneio = function (dataParam) {
        var _this = this;
        var methodParam = "putUserSubscriptionTournament";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /*
      Funcao:     getRanking()
      Descricao:  Funcão que retorna o Ranking do Club
    */
    ClientrestPokerclubsProvider.prototype.getRankings = function (dataParam) {
        var _this = this;
        var methodParam = "getRankings";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
                //console.log("getRankings", result);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /*
      Funcao:     putPremioTorneio()
      Descricao:  Salva o usuario que ganhou o premio especial do torneio
    */
    ClientrestPokerclubsProvider.prototype.getUsuarioInscritoTorneio = function (dataParam) {
        var _this = this;
        var methodParam = "getUserSubscriptionTournament";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /*
      Funcao:     putSeguirOuParar()
      Descricao:  Grava se o usuario esta ou nao seguindo o clube
    */
    ClientrestPokerclubsProvider.prototype.putSeguirOuParar = function (dataParam) {
        var _this = this;
        var methodParam = "putUserFollowClub";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    /*
      Funcao:     getAgenda
      Descricao:  Funcão que retorna a agenda semanal do Clube
    */
    ClientrestPokerclubsProvider.prototype.getAgendaSemanal = function (dataParam) {
        var _this = this;
        var methodParam = "getSchedule";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /*
      Funcao:     getCidades
      Descricao:  Funcão que retorna as cidades
    */
    ClientrestPokerclubsProvider.prototype.getCidades = function (dataParam) {
        var _this = this;
        var methodParam = "cities";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    /*
      Funcao:     getClubsCidades
      Descricao:  Funcão que retorna os clubes de uma cidade
    */
    ClientrestPokerclubsProvider.prototype.getClubsCidades = function (dataParam) {
        var _this = this;
        var methodParam = "getClubsCity";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    /*
      Funcao:     getClubsAllCidades
      Descricao:  Funcão que retorna os clubes de uma cidade
    */
    ClientrestPokerclubsProvider.prototype.getClubsAllCidades = function (dataParam) {
        var _this = this;
        var methodParam = "getClubsAllCity";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    /*
      Funcao:     getClubesAutoComplete
      Descricao:  Funcão que retorna as cidades
    */
    ClientrestPokerclubsProvider.prototype.getClubsAutoComplete = function (dataParam) {
        var _this = this;
        var methodParam = "getClubsAutoComplete";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    /*
      Funcao:     getBannerPromocao
      Descricao:  Retora o Banner e mostra quando entrar no app
    */
    ClientrestPokerclubsProvider.prototype.getBannerPromocao = function (dataParam) {
        var _this = this;
        var methodParam = "getBannerPromo";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    /*
      Funcao:     getMensagensClube
      Descricao:  Retora as mensagens do Clube especifico
    */
    ClientrestPokerclubsProvider.prototype.getMensagensClube = function (dataParam) {
        var _this = this;
        var methodParam = "getClubMessages";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    /*
    Funcao:     getMensagengetMensagemsClube
    Descricao:  Retora o conteudo da Mensagem
  */
    ClientrestPokerclubsProvider.prototype.getMensagem = function (dataParam) {
        var _this = this;
        var methodParam = "getMessage";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    /*
      Funcao:     getTodasMensagens
      Descricao:  Retora todas as mensagens
    */
    ClientrestPokerclubsProvider.prototype.getTodasMensagens = function (dataParam) {
        var _this = this;
        var methodParam = "getUserMessages";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
                //console.log("TODAS", result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    /*
      Funcao:     excluirMensagem
      Descricao:  Exclui a mensagem
    */
    ClientrestPokerclubsProvider.prototype.excluirMensagem = function (dataParam) {
        var _this = this;
        //console.log("dataParam", dataParam);
        var methodParam = "deleteMessage";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
                //console.log("result", result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    /*
        Funcao:     excluirTodasMensagem
        Descricao:  Excluir todas as mensagem
    */
    ClientrestPokerclubsProvider.prototype.excluirTodasMensagem = function (dataParam) {
        var _this = this;
        //console.log("dataParam", dataParam);
        var methodParam = "deleteAllMessages";
        var contentTypeParam = { 'Content-Type': 'application/json' };
        if (this.platform.is("ios")) {
            contentTypeParam = { 'Content-Type': 'application/x-www-form-urlencoded' };
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + methodParam, dataParam, contentTypeParam)
                .then(function (response) {
                var result = JSON.parse(response.data);
                resolve(result);
                //console.log("result", result);
            })
                .catch(function (error) {
                _this.CriaAlerta();
                reject(error);
            });
        });
    };
    ClientrestPokerclubsProvider.prototype.CriaAlerta = function () {
        var alert = this.alertCtrl.create({
            title: "PokerClubs",
            cssClass: 'alertaCustom',
            subTitle: "Ocorreu um erro ao requisitar os dados.<br>Tente novamente mais tarde.",
            enableBackdropDismiss: false,
            buttons: ['OK']
        });
        alert.present();
    };
    ClientrestPokerclubsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* Platform */]])
    ], ClientrestPokerclubsProvider);
    return ClientrestPokerclubsProvider;
}());

//# sourceMappingURL=clientrest-pokerclubs.js.map

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 201;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agendapremium-pokerclubs/agendapremium-pokerclubs.module": [
		708,
		25
	],
	"../pages/aovivopremium-pokerclubs/aovivopremium-pokerclubs.module": [
		709,
		24
	],
	"../pages/bannermap-pokerclubs/bannermap-pokerclubs.module": [
		710,
		4
	],
	"../pages/chats-pokerclubs/chats-pokerclubs.module": [
		711,
		0
	],
	"../pages/clubnormal-pokerclubs/clubnormal-pokerclubs.module": [
		712,
		23
	],
	"../pages/clubpremium-pokerclubs/clubpremium-pokerclubs.module": [
		713,
		5
	],
	"../pages/exibepremio-promocoes-pokerclubs/exibepremio-promocoes-pokerclubs.module": [
		714,
		22
	],
	"../pages/fotospremium-pokerclubs/fotospremium-pokerclubs.module": [
		715,
		9
	],
	"../pages/galeria-fotospremium-pokerclubs/galeria-fotospremium-pokerclubs.module": [
		716,
		21
	],
	"../pages/localizar-clube-pokerclubs/localizar-clube-pokerclubs.module": [
		717,
		20
	],
	"../pages/login-pokerclubs/login-pokerclubs.module": [
		718,
		12
	],
	"../pages/menu-pokerclubs/menu-pokerclubs.module": [
		719,
		19
	],
	"../pages/notificacoespermium-pokerclubs/notificacoespermium-pokerclubs.module": [
		720,
		18
	],
	"../pages/oclubepremium-pokerclubs/oclubepremium-pokerclubs.module": [
		721,
		6
	],
	"../pages/promocoespremium-pokerclubs/promocoespremium-pokerclubs.module": [
		722,
		2
	],
	"../pages/rankingpremium-etapas-torneio-pokerclubs/rankingpremium-etapas-torneio-pokerclubs.module": [
		723,
		11
	],
	"../pages/rankingpremium-jogadores-ranking-pokerclubs/rankingpremium-jogadores-ranking-pokerclubs.module": [
		724,
		8
	],
	"../pages/rankingpremium-pokerclubs/rankingpremium-pokerclubs.module": [
		725,
		3
	],
	"../pages/register-pokerclubs/register-pokerclubs.module": [
		726,
		17
	],
	"../pages/ringgamepremium-pokerclubs/ringgamepremium-pokerclubs.module": [
		727,
		16
	],
	"../pages/tab1-pokerclubs/tab1-pokerclubs.module": [
		728,
		10
	],
	"../pages/tab2-pokerclubs/tab2-pokerclubs.module": [
		729,
		15
	],
	"../pages/tabs-pokerclubs/tabs-pokerclubs.module": [
		730,
		14
	],
	"../pages/todasmensagens-pokerclubs/todasmensagens-pokerclubs.module": [
		731,
		13
	],
	"../pages/torneiospremium-pokerclubs/torneiospremium-pokerclubs.module": [
		732,
		1
	],
	"../pages/visualiza-notificacao-pokerclubs/visualiza-notificacao-pokerclubs.module": [
		733,
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 243;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingProvider = /** @class */ (function () {
    function LoadingProvider(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingProvider.prototype.presentLoadingCircle1 = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n          <div class=\"custom-spinner-container\">\n            <img class=\"loading\" width=\"100px\" height=\"100px\" src=\"assets/loading/loading-circle-1.gif\" />\n          </div>"
        });
        return this.loading.present();
    };
    LoadingProvider.prototype.presentLoadingCircle2 = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n          <div class=\"custom-spinner-container\">\n            <img class=\"loading\" width=\"30px\" height=\"30px\" src=\"assets/loading/loading-circle-2.gif\" />\n          </div>"
        });
        return this.loading.present();
    };
    LoadingProvider.prototype.presentLoadingFicha1 = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n          <div class=\"custom-spinner-container\">\n            <img class=\"loading\" width=\"200px\" height=\"200px\" src=\"assets/loading/loading-ficha-1.gif\" />\n          </div>"
        });
        return this.loading.present();
    };
    LoadingProvider.prototype.presentLoadingFicha2 = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n          <div class=\"custom-spinner-container\">\n            <img class=\"loading\" width=\"30px\" height=\"30px\" src=\"assets/loading/loading-ficha-2.gif\" />\n          </div>"
        });
        return this.loading.present();
    };
    LoadingProvider.prototype.presentLoadingFicha3 = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n          <div class=\"custom-spinner-container\">\n            <img class=\"loading\" width=\"90%\" height=\"auto\" src=\"assets/loading/loading-ficha-3.gif\" />\n          </div>"
        });
        return this.loading.present();
    };
    LoadingProvider.prototype.presentWithMessage = function (message) {
        this.loading = this.loadingCtrl.create({
            content: message
        });
        return this.loading.present();
    };
    LoadingProvider.prototype.dismiss = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.loading) {
                return _this.loading.dismiss(resolve(true)).catch(function (error) {
                    //console.log('loading error: ', error);
                });
            }
            else {
                resolve(true);
            }
        });
    };
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(412);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_15" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_http__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_browser_tab__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_device__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_onesignal__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_global_vars_global_vars__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_clientrest_pokerclubs_clientrest_pokerclubs__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_toPromise__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_Rx__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_minimize__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_keyboard__ = __webpack_require__(707);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* PokerClubs */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* PokerClubs */], {
                    tabsHideOnSubPages: 'true',
                    swipeBackEnabled: 'true',
                    preloadModules: 'false'
                }, {
                    links: [
                        { loadChildren: '../pages/agendapremium-pokerclubs/agendapremium-pokerclubs.module#AgendapremiumPokerclubsPageModule', name: 'AgendapremiumPokerclubsPage', segment: 'agendapremium-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aovivopremium-pokerclubs/aovivopremium-pokerclubs.module#AovivopremiumPokerclubsPageModule', name: 'AovivopremiumPokerclubsPage', segment: 'aovivopremium-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bannermap-pokerclubs/bannermap-pokerclubs.module#BannermapPokerclubsPageModule', name: 'BannermapPokerclubsPage', segment: 'bannermap-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chats-pokerclubs/chats-pokerclubs.module#ChatsPokerclubsPageModule', name: 'ChatsPokerclubsPage', segment: 'chats-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clubnormal-pokerclubs/clubnormal-pokerclubs.module#ClubnormalPokerclubsPageModule', name: 'ClubnormalPokerclubsPage', segment: 'clubnormal-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clubpremium-pokerclubs/clubpremium-pokerclubs.module#ClubpremiumPokerclubsPageModule', name: 'ClubpremiumPokerclubsPage', segment: 'clubpremium-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exibepremio-promocoes-pokerclubs/exibepremio-promocoes-pokerclubs.module#ExibepremioPromocoesPokerclubsPageModule', name: 'ExibepremioPromocoesPokerclubsPage', segment: 'exibepremio-promocoes-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fotospremium-pokerclubs/fotospremium-pokerclubs.module#FotospremiumPokerclubsPageModule', name: 'FotospremiumPokerclubsPage', segment: 'fotospremium-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/galeria-fotospremium-pokerclubs/galeria-fotospremium-pokerclubs.module#GaleriaFotospremiumPokerclubsPageModule', name: 'GaleriaFotospremiumPokerclubsPage', segment: 'galeria-fotospremium-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/localizar-clube-pokerclubs/localizar-clube-pokerclubs.module#LocalizarClubePokerclubsPageModule', name: 'LocalizarClubePokerclubsPage', segment: 'localizar-clube-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-pokerclubs/login-pokerclubs.module#LoginPokerclubsPageModule', name: 'LoginPokerclubsPage', segment: 'login-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-pokerclubs/menu-pokerclubs.module#MenuPokerclubsPageModule', name: 'MenuPokerclubsPage', segment: 'menu-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notificacoespermium-pokerclubs/notificacoespermium-pokerclubs.module#NotificacoespermiumPokerclubsPageModule', name: 'NotificacoespermiumPokerclubsPage', segment: 'notificacoespermium-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/oclubepremium-pokerclubs/oclubepremium-pokerclubs.module#OclubepremiumPokerclubsPageModule', name: 'OclubepremiumPokerclubsPage', segment: 'oclubepremium-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/promocoespremium-pokerclubs/promocoespremium-pokerclubs.module#PromocoespremiumPokerclubsPageModule', name: 'PromocoespremiumPokerclubsPage', segment: 'promocoespremium-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rankingpremium-etapas-torneio-pokerclubs/rankingpremium-etapas-torneio-pokerclubs.module#RankingpremiumEtapasTorneioPokerclubsPageModule', name: 'RankingpremiumEtapasTorneioPokerclubsPage', segment: 'rankingpremium-etapas-torneio-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rankingpremium-jogadores-ranking-pokerclubs/rankingpremium-jogadores-ranking-pokerclubs.module#RankingpremiumJogadoresRankingPokerclubsPageModule', name: 'RankingpremiumJogadoresRankingPokerclubsPage', segment: 'rankingpremium-jogadores-ranking-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rankingpremium-pokerclubs/rankingpremium-pokerclubs.module#RankingpremiumPokerclubsPageModule', name: 'RankingpremiumPokerclubsPage', segment: 'rankingpremium-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-pokerclubs/register-pokerclubs.module#RegisterPokerclubsPageModule', name: 'RegisterPokerclubsPage', segment: 'register-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ringgamepremium-pokerclubs/ringgamepremium-pokerclubs.module#RinggamepremiumPokerclubsPageModule', name: 'RinggamepremiumPokerclubsPage', segment: 'ringgamepremium-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab1-pokerclubs/tab1-pokerclubs.module#Tab1PokerclubsPageModule', name: 'Tab1PokerclubsPage', segment: 'tab1-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab2-pokerclubs/tab2-pokerclubs.module#Tab2PokerclubsPageModule', name: 'Tab2PokerclubsPage', segment: 'tab2-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs-pokerclubs/tabs-pokerclubs.module#TabsPokerclubsPageModule', name: 'TabsPokerclubsPage', segment: 'tabs-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/todasmensagens-pokerclubs/todasmensagens-pokerclubs.module#TodasmensagensPokerclubsPageModule', name: 'TodasmensagensPokerclubsPage', segment: 'todasmensagens-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/torneiospremium-pokerclubs/torneiospremium-pokerclubs.module#TorneiospremiumPokerclubsPageModule', name: 'TorneiospremiumPokerclubsPage', segment: 'torneiospremium-pokerclubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/visualiza-notificacao-pokerclubs/visualiza-notificacao-pokerclubs.module#VisualizaNotificacaoPokerclubsPageModule', name: 'VisualizaNotificacaoPokerclubsPage', segment: 'visualiza-notificacao-pokerclubs', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* PokerClubs */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__providers_clientrest_pokerclubs_clientrest_pokerclubs__["a" /* ClientrestPokerclubsProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_minimize__["a" /* AppMinimize */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_15__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_browser_tab__["a" /* BrowserTab */],
                __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_onesignal__["a" /* OneSignal */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokerClubs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_clientrest_pokerclubs_clientrest_pokerclubs__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_vars_global_vars__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//import { timer } from 'rxjs/observable/timer';
//import { Keyboard } from '@ionic-native/keyboard';
var PokerClubs = /** @class */ (function () {
    function PokerClubs(platform, statusBar, splashScreen, 
    //public app: App,
    actionSheetCtrl, screenOrientation, alertCtrl, network, storage, clientrest, globalvars, device) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.actionSheetCtrl = actionSheetCtrl;
        this.screenOrientation = screenOrientation;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.storage = storage;
        this.clientrest = clientrest;
        this.globalvars = globalvars;
        this.device = device;
        //showSplash:boolean = true;
        this.rootPage = '';
        this.backPressed = false;
        this.tipoLogin = '';
        //storage.clear().then(){}
        this.initializeApp();
    }
    PokerClubs.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
            //timer(4000).subscribe(() => this.showSplash = false);
            // Verifica quando a Rede foi desconectada
            var disconnectSubscription = _this.network.onDisconnect().subscribe(function () {
                var alert = _this.alertCtrl.create({
                    title: 'PokerClubs',
                    message: 'A conexão de rede não foi encontrada ou foi desconectada.<br>' +
                        'Alguns recursos do PokerClubs poderão não funcionar corretamente.',
                    cssClass: 'alertaCustom',
                    enableBackdropDismiss: false,
                    buttons: [{
                            text: 'Continuar',
                            role: 'Continuar',
                            handler: function () {
                                disconnectSubscription.unsubscribe();
                            }
                        }, {
                            text: 'Sair do PokerClubs',
                            handler: function () {
                                disconnectSubscription.unsubscribe();
                                _this.platform.exitApp();
                            }
                        }]
                });
                alert.present();
            });
            _this.configuraNotificacoes(_this);
            if (_this.globalvars.getunicDevieID() === '') {
                _this.globalvars.setunicDevieID(_this.device.uuid);
            }
            //this.rootPage = 'MenuPokerclubsPage';
            //this.rootPage = 'LoginPokerclubsPage';
            _this.globalvars.settipoPesquisaClubes("R");
            //this.globalvars.setidDeviceOneSignal('');
            //this.globalvars.settokenDeviceOneSignal('');
            //let erroconectUser:any = true;
            _this.storage.get('pokerClubs_tipoLogin').then(function (tipoLogin) {
                _this.tipoLogin = tipoLogin;
                //if (this.tipoLogin !== null) {
                if (_this.tipoLogin === "A") {
                    // Ultimo Login feito pelo APP
                    _this.logarAPP().then(function (data) {
                        if (data) {
                            // Se validou o usuario no servidor entao armazena na storage o email e o tipo de login (APP)
                            //this.storage.set('pokerClubs_tipoLogin', 'A');
                            //this.globalvars.setidUsuario(this.dadosUserAPP["user_id"]);
                            //this.globalvars.setidUsuarioFacebook("");
                            //this.globalvars.settipoPesquisaClubes("R"); // Tipo de Pesquisa do Clube R= Raio C= Cidade N= Nome
                            if (parseInt(_this.globalvars.getidUsuario()) === 1) {
                                _this.rootPage = 'LoginPokerclubsPage';
                            }
                            else {
                                _this.rootPage = 'MenuPokerclubsPage';
                            }
                        }
                        else {
                            _this.rootPage = 'LoginPokerclubsPage';
                        }
                    });
                }
                else if (_this.tipoLogin === "F") {
                    // Ultimo Login feito pelo FaceBook
                    _this.logarFacebook().then(function (data) {
                        if (data) {
                            // Se validou o usuario no servidor entao armazena na storage o email e o tipo de login (APP)
                            //this.storage.set('pokerClubs_emailUsuario', this.dadosUserFacebook['email']);
                            //this.storage.set('pokerClubs_tipoLogin', 'F');
                            //this.globalvars.setidUsuarioFacebook(this.dadosUserFacebook["id"]);
                            //this.globalvars.settipoPesquisaClubes("R"); // Tipo de Pesquisa do Clube R= Raio C= Cidade N= Nome
                            if (parseInt(_this.globalvars.getidUsuario()) === 1) {
                                _this.rootPage = 'LoginPokerclubsPage';
                            }
                            else {
                                _this.rootPage = 'MenuPokerclubsPage';
                            }
                        }
                    });
                }
                else {
                    _this.logarAnonymous().then(function (data) {
                        if (data) {
                            _this.rootPage = 'MenuPokerclubsPage';
                        }
                        else {
                            _this.rootPage = 'LoginPokerclubsPage';
                        }
                    });
                }
                //} else {
                // Se for nulo é porque é o primeiro acesso ao APP nesse dispositivo
                //this.rootPage = 'LoginPokerclubsPage';
                //}
            });
            //let configNot =
            //erroconectUser = this.gettipoLogin();
            /*     this.storage.get('pokerClubs_tipoLogin').then((tipoLogn) => {
                     this.tipoLogin = tipoLogn;
                     console.log('tipolog:'+tipoLogn);
                     console.log('tipolog:'+this.tipoLogin);
                 });
                 console.log('login>>>>>> '+this.tipoLogin);
                 this.configuraNotificacoes(this);*/
            /*            if (erroconectUser) {
                            if ((this.tipoLogin === "A")) { //||(this.tipoLogin == "O")) {
                                erroconectUser = this.logarAPP();
                                console.log('cad>>>>>> '+erroconectUser);
                            } else if (this.tipoLogin === "F") {
                                erroconectUser = this.logarFacebook();
                                console.log('face>>>>>> '+erroconectUser);
                            }
                        }
                        console.log('login>>>>>> '+this.tipoLogin);
                        if ((this.tipoLogin==="")||(this.tipoLogin==="N")) {
                            //let saveNew:boolean = true;
                            /*if (configNot) {
                                if (this.tipoLogin=="") {
                                    if (this.logarAPPonesignal(1)) saveNew=false;
                                }
                                if (saveNew) erroconectUser = this.saveNewRegister(1);
                            } else if (this.globalvars.getunicDevieID()!=='') {
                                if (this.tipoLogin=="") {
                                    if (this.logarAPPonesignal(2)) saveNew=false;
                                }
                                if (saveNew) erroconectUser = this.saveNewRegister(2);
                            } else {*/
            //erroconectUser = this.logarAnonymous();
            //}
            //}
            /*if (!erroconectUser) {
                this.globalvars.setidUsuario(1);
                this.globalvars.setidUsuarioFacebook("");
                this.globalvars.setnomeFacebook("Sem Cadastro");
                this.globalvars.setavatarFacebook("assets/imgs/user.png");
                this.globalvars.setidDeviceOneSignal('');
                this.globalvars.settokenDeviceOneSignal('');
            }*/
            _this.platform.resume.subscribe(function (e) {
                if (_this.globalvars.getrecebeuNotificacao()) {
                    _this.globalvars.setabriuAPPPelaNotificacao(false);
                    _this.globalvars.setrecebeuNotificacao(false);
                    _this.nav.push('VisualizaNotificacaoPokerclubsPage');
                }
            });
        });
    };
    PokerClubs.prototype.configuraNotificacoes = function (objectThis) {
        var returnfc = false;
        console.log('notifyddd');
        // Quando a notificacao foi recebida
        var notificationReceivedCallback = function (jsonData) {
            objectThis.globalvars.setrecebeuNotificacao(true);
            var idMensagemOneSignal = jsonData["payload"]["notificationID"];
            var idMensagem = jsonData["payload"]["additionalData"]["msg_id"];
            objectThis.globalvars.setidMensagemOneSignalAtual(idMensagemOneSignal);
            objectThis.globalvars.setidMensagemAtual(idMensagem);
        };
        // Quando a notificacao foi aberta
        var notificationOpenedCallback = function (jsonData) {
            objectThis.globalvars.setabriuAPPPelaNotificacao(true);
            var idMensagem = jsonData["notification"]["payload"]["additionalData"]["msg_id"];
            var idMensagemOneSignal = jsonData["notification"]["payload"]["notificationID"];
            objectThis.globalvars.setidMensagemOneSignalAtual(idMensagemOneSignal);
            objectThis.globalvars.setidMensagemAtual(idMensagem);
        };
        window["plugins"].OneSignal
            .startInit("48ab8249-e50d-42a6-b46f-ecf31e023419", "ZjhhNjQ2YjItNDMwOS00ZDAwLTljMTAtZWI0M2JkMTk1MGY5")
            .handleNotificationOpened(notificationOpenedCallback)
            .handleNotificationReceived(notificationReceivedCallback)
            .endInit();
        window["plugins"].OneSignal.getIds(function (ids) {
            console.log('getids - ' + ids.userId);
            console.log('gettok - ' + ids.pushToken);
            objectThis.globalvars.setidDeviceOneSignal(ids.userId);
            objectThis.globalvars.settokenDeviceOneSignal(ids.pushToken);
            returnfc = true;
        });
        if (objectThis.globalvars.getidDeviceOneSignal() !== '')
            returnfc = true;
        return returnfc;
    };
    /*gettipoLogin() {
        this.tipoLogin = '';
        return new Promise((resolve, reject) => {
        this.storage.get('pokerClubs_tipoLogin').then((tipoLogn) => {
            this.tipoLogin = tipoLogn;
            console.log('tipolog:'+tipoLogn);
            console.log('tipolog:'+this.tipoLogin);
            resolve(true);
        });
        });
    }*/
    PokerClubs.prototype.saveNewRegister = function (type) {
        var _this = this;
        var returnfc = false;
        var newNome = 'Jogador-';
        var newEmail = "";
        var newSenha = "";
        if (type === 1) {
            newNome += this.globalvars.getidDeviceOneSignal();
            newEmail = this.globalvars.getidDeviceOneSignal();
            newSenha = this.globalvars.gettokenDeviceOneSignal();
        }
        else {
            newNome += this.globalvars.getunicDevieID();
            newEmail = this.globalvars.getunicDevieID();
            newSenha = this.globalvars.getunicDevieID() + '#';
        }
        var dataParam = {
            'email': newEmail,
            'senha': newSenha,
            'nome': newNome,
            'apelido': newNome,
            'telefone': '',
            "one_signal": this.globalvars.getidDeviceOneSignal(),
            "one_signal_token": this.globalvars.gettokenDeviceOneSignal(),
            "unic_id": this.globalvars.getunicDevieID()
        };
        this.clientrest.saveRegister(dataParam).then(function (data) {
            if (data["result"] == "S") {
                _this.globalvars.setidUsuario(data["user_id"]);
                _this.globalvars.setidUsuarioFacebook("");
                _this.globalvars.setnomeFacebook(newNome);
                _this.globalvars.setavatarFacebook("assets/imgs/user.png");
                _this.storage.set('pokerClubs_tipoLogin', 'O');
                _this.storage.set('pokerClubs_emailUsuario', newEmail);
                _this.storage.set('pokerClubs_apelidoUsuario', newNome);
                _this.storage.set('pokerClubs_senhaUsuario', newSenha);
                _this.storage.set('pokerClubs_nomeUsuario', newNome);
                returnfc = true;
            }
        });
        return returnfc;
    };
    PokerClubs.prototype.logarAnonymous = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var dataParam = {
                'email': 'contato@pokerclubsapp.com.br',
                'senha': '',
                'one_signal': '',
                "one_signal_token": ''
            };
            _this.clientrest.validUser(dataParam).then(function (data) {
                if (data["result"] == "S") {
                    _this.globalvars.setidUsuario(data["user_id"]);
                    _this.globalvars.setidUsuarioFacebook("");
                    _this.globalvars.setnomeFacebook(data["nome"]);
                    _this.globalvars.setavatarFacebook("assets/imgs/user.png");
                    resolve(true);
                }
            }).catch(function (error) {
                reject(false);
            });
        });
    };
    PokerClubs.prototype.logarAPPonesignal = function (type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var newEmail = '';
            var newSenha = '';
            if (type === 1) {
                newEmail = _this.globalvars.getidDeviceOneSignal();
                newSenha = _this.globalvars.gettokenDeviceOneSignal();
            }
            else {
                newEmail = _this.globalvars.getunicDevieID();
                newSenha = _this.globalvars.getunicDevieID() + '#';
            }
            var dataParam = {
                'email': newEmail,
                'senha': newSenha,
                'one_signal': _this.globalvars.getidDeviceOneSignal(),
                "one_signal_token": _this.globalvars.gettokenDeviceOneSignal(),
                "unic_id": _this.globalvars.getunicDevieID()
            };
            _this.clientrest.validUser(dataParam).then(function (data) {
                if (data["result"] == "S") {
                    _this.globalvars.setidUsuario(data["user_id"]);
                    _this.globalvars.setidUsuarioFacebook("");
                    _this.globalvars.setnomeFacebook(data["nome"]);
                    if ((data["avatar"] === "") || (data["avatar"] === "null") || (data["avatar"] === "undefined")) {
                        _this.globalvars.setavatarFacebook("assets/imgs/user.png");
                    }
                    else {
                        _this.globalvars.setavatarFacebook(data["avatar"]);
                    }
                    resolve(true);
                }
            }).catch(function (error) {
                reject(false);
            });
        });
    };
    PokerClubs.prototype.logarAPP = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('pokerClubs_emailUsuario').then(function (emailUsuario) {
                _this.storage.get('pokerClubs_senhaUsuario').then(function (senhaUsuario) {
                    var dataParam = {
                        'email': emailUsuario,
                        'senha': senhaUsuario,
                        'one_signal': _this.globalvars.getidDeviceOneSignal(),
                        "one_signal_token": _this.globalvars.gettokenDeviceOneSignal(),
                        "unic_id": _this.globalvars.getunicDevieID()
                    };
                    _this.clientrest.validUser(dataParam).then(function (data) {
                        if (data["result"] == "S") {
                            _this.globalvars.setidUsuario(data["user_id"]);
                            _this.globalvars.setidUsuarioFacebook("");
                            _this.globalvars.setnomeFacebook(data["nome"]);
                            if ((data["avatar"] === "") || (data["avatar"] === "null") || (data["avatar"] === "undefined")) {
                                _this.globalvars.setavatarFacebook("assets/imgs/user.png");
                            }
                            else {
                                _this.globalvars.setavatarFacebook(data["avatar"]);
                            }
                            resolve(true);
                        }
                    });
                });
            }).catch(function (error) {
                reject(false);
            });
        });
    };
    PokerClubs.prototype.logarFacebook = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('pokerClubs_faceidUsuario').then(function (faceidUsuario) {
                _this.storage.get('pokerClubs_emailUsuario').then(function (emailface) {
                    _this.storage.get('pokerClubs_nomeUsuario').then(function (nomeface) {
                        _this.storage.get('pokerClubs_avatarUsuario').then(function (avatarface) {
                            if ((avatarface === "") || (avatarface === "null") || (avatarface === "undefined")) {
                                avatarface = "assets/imgs/user.png";
                            }
                            var dataParam = {
                                "face_id": faceidUsuario,
                                "nome": nomeface,
                                "email": emailface,
                                "one_signal": _this.globalvars.getidDeviceOneSignal(),
                                "one_signal_token": _this.globalvars.gettokenDeviceOneSignal(),
                                "unic_id": _this.globalvars.getunicDevieID()
                            };
                            _this.clientrest.loginFacebook(dataParam).then(function (data) {
                                if (data["result"] == "S") {
                                    _this.globalvars.setidUsuario(data["user_id"]);
                                    _this.globalvars.setidUsuarioFacebook(faceidUsuario);
                                    _this.globalvars.setnomeFacebook(nomeface);
                                    _this.globalvars.setavatarFacebook(avatarface);
                                    resolve(true);
                                }
                                else {
                                    _this.CriaAlerta("Login", data["message"]);
                                    resolve(false);
                                }
                            });
                        });
                    });
                });
            }).catch(function (error) {
                reject(false);
            });
        });
    };
    // Funcao para criar alertas em todo o sistema
    PokerClubs.prototype.CriaAlerta = function (titulo, subtitulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: subtitulo,
            cssClass: 'alertaCustom',
            enableBackdropDismiss: false,
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["s" /* Nav */]),
        __metadata("design:type", Object)
    ], PokerClubs.prototype, "nav", void 0);
    PokerClubs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Roots\SAINTEC\pokerclubs\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Roots\SAINTEC\pokerclubs\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["w" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__providers_clientrest_pokerclubs_clientrest_pokerclubs__["a" /* ClientrestPokerclubsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__["a" /* Device */]])
    ], PokerClubs);
    return PokerClubs;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[310]);
//# sourceMappingURL=main.js.map