webpackJsonp([13],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodasmensagensPokerclubsPageModule", function() { return TodasmensagensPokerclubsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todasmensagens_pokerclubs__ = __webpack_require__(827);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TodasmensagensPokerclubsPageModule = /** @class */ (function () {
    function TodasmensagensPokerclubsPageModule() {
    }
    TodasmensagensPokerclubsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__todasmensagens_pokerclubs__["a" /* TodasmensagensPokerclubsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__todasmensagens_pokerclubs__["a" /* TodasmensagensPokerclubsPage */]),
            ],
        })
    ], TodasmensagensPokerclubsPageModule);
    return TodasmensagensPokerclubsPageModule;
}());

//# sourceMappingURL=todasmensagens-pokerclubs.module.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodasmensagensPokerclubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clientrest_pokerclubs_clientrest_pokerclubs__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TodasmensagensPokerclubsPage = /** @class */ (function () {
    function TodasmensagensPokerclubsPage(navCtrl, navParams, globalvars, clientrest, alertCtrl, loadingController, platform, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalvars = globalvars;
        this.clientrest = clientrest;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.platform = platform;
        this.toastController = toastController;
        this.possuiMensagens = false;
    }
    TodasmensagensPokerclubsPage.prototype.ionViewDidLoad = function () {
    };
    TodasmensagensPokerclubsPage.prototype.ionViewDidEnter = function () {
        this.possuiMensagens = false;
        this.getTodasMensagens();
        this.initializeBackButtonCustomHandler();
    };
    TodasmensagensPokerclubsPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    TodasmensagensPokerclubsPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        // Regitrando o Botao Voltar do Android
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.botaoVoltarAndroid();
        }, 101);
    };
    TodasmensagensPokerclubsPage.prototype.botaoVoltarAndroid = function () {
        this.navCtrl.pop(); //setRoot("GaleriaFotospremiumPokerclubsPage");
    };
    TodasmensagensPokerclubsPage.prototype.getTodasMensagens = function () {
        var _this = this;
        var dataParam = {
            'user_id': this.globalvars.getidUsuario()
        };
        this.clientrest.getTodasMensagens(dataParam).then(function (data) {
            if (data["result"] == "S") {
                _this.mensagens = data["items"];
                _this.possuiMensagens = (data["items"].length > 0);
            }
            else {
                _this.CriaAlerta("Mensagens", data["message"]);
                _this.navCtrl.pop();
            }
        }).catch(function (error) {
            //this.CriaAlerta("PokerClubs", "Ocorreu um erro ao requisitar os dados.<br>Tente novamente mais tarde.");        
        });
    };
    TodasmensagensPokerclubsPage.prototype.openMensagem = function (idMensagem) {
        this.globalvars.setidMensagemAtual(idMensagem);
        this.loadingPage("VisualizaNotificacaoPokerclubsPage", null);
    };
    TodasmensagensPokerclubsPage.prototype.deletarMensagem = function (idMensagem) {
        var _this = this;
        var toast = null;
        toast = this.toastController.create({
            message: "Excluindo...",
            duration: 1,
            position: 'bottom',
            cssClass: 'class-toast'
        });
        toast.present();
        var dataParam = {
            'msg_id': idMensagem,
            'user_id': this.globalvars.getidUsuario()
        };
        this.clientrest.excluirMensagem(dataParam).then(function (data) {
            if (data["result"] == "S") {
                _this.getTodasMensagens();
                toast.dismiss();
            }
            else {
                _this.CriaAlerta("Mensagens", data["message"]);
                toast.dismiss();
            }
        });
    };
    TodasmensagensPokerclubsPage.prototype.deletarTodasMensagens = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Excluir todas',
            message: 'Você tem certeza que deseja excluir todas as mensagens?',
            cssClass: 'alertaCustom',
            enableBackdropDismiss: false,
            buttons: [{
                    text: 'Não',
                    role: 'Não',
                    handler: function () {
                    }
                }, {
                    text: 'Sim',
                    role: 'Sim',
                    handler: function () {
                        var toast = null;
                        toast = _this.toastController.create({
                            message: "Excluindo todas as mensagens...",
                            duration: 1,
                            position: 'bottom',
                            cssClass: 'class-toast'
                        });
                        toast.present();
                        var dataParam = {
                            'user_id': _this.globalvars.getidUsuario()
                        };
                        _this.clientrest.excluirTodasMensagem(dataParam).then(function (data) {
                            if (data["result"] == "S") {
                                _this.getTodasMensagens();
                                toast.dismiss();
                            }
                            else {
                                toast.dismiss();
                                _this.CriaAlerta("Mensagens", data["message"]);
                            }
                        });
                    }
                }]
        });
        alert.present();
    };
    TodasmensagensPokerclubsPage.prototype.CriaAlerta = function (titulo, subtitulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: subtitulo,
            cssClass: 'alertaCustom',
            enableBackdropDismiss: false,
            buttons: ['OK']
        });
        alert.present();
    };
    TodasmensagensPokerclubsPage.prototype.loadingPage = function (pageName, pageParams) {
        var _this = this;
        var loading = this.loadingController.create({
            spinner: "bubbles",
            cssClass: "class-loading"
        });
        loading.present();
        setTimeout(function () {
            if (pageParams === null)
                _this.navCtrl.push(pageName);
            else
                _this.navCtrl.push(pageName, pageParams);
        }, 1000);
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    TodasmensagensPokerclubsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-todasmensagens-pokerclubs',template:/*ion-inline-start:"C:\Roots\SAINTEC\pokerclubs\src\pages\todasmensagens-pokerclubs\todasmensagens-pokerclubs.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>PokerClubs - Mensagens</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-divider class="mensagens-list-divider">\n      Toque no título da mensagem para visualizá-la\n      <br *ngIf="possuiMensagens">  \n      <button *ngIf="possuiMensagens" class="botao-excluir-todas" (click)="deletarTodasMensagens()">Excluir todas</button>\n    </ion-item-divider>\n  </ion-list> \n  <ion-grid>\n    <ion-row class="linha-mensagem" *ngFor="let mensagem of mensagens">\n      <ion-col col-8>\n        <table>\n          <tr>\n            <td colspan="2">\n              <p class="nome-clube-mensagem" [ngClass]="mensagem.read == \'S\' ? \'mensagem-lida\' : \'mensagem-nao-lida\'" (click)="openMensagem(mensagem.id)" [innerHTML]="mensagem.club.name"></p>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <ion-icon class="icone-deletar-mensagem" name="trash" (click)="deletarMensagem(mensagem.id)"></ion-icon>\n            </td>\n            <td>\n              <label class="titulo-mensagem" [ngClass]="mensagem.read == \'S\' ? \'mensagem-lida\' : \'mensagem-nao-lida\'" (click)="openMensagem(mensagem.id)" [innerHTML]="mensagem.title"></label>        \n            </td>\n          </tr>\n        </table>                  \n      </ion-col>\n      <ion-col col-4 align-self-end>        \n        <label class="data-mensagem" [ngClass]="mensagem.read == \'S\' ? \'mensagem-lida\' : \'mensagem-nao-lida\'" [innerHTML]="mensagem.date"></label>\n      </ion-col>      \n    </ion-row>    \n  </ion-grid>  \n</ion-content>\n\n'/*ion-inline-end:"C:\Roots\SAINTEC\pokerclubs\src\pages\todasmensagens-pokerclubs\todasmensagens-pokerclubs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_clientrest_pokerclubs_clientrest_pokerclubs__["a" /* ClientrestPokerclubsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]])
    ], TodasmensagensPokerclubsPage);
    return TodasmensagensPokerclubsPage;
}());

//# sourceMappingURL=todasmensagens-pokerclubs.js.map

/***/ })

});
//# sourceMappingURL=13.js.map