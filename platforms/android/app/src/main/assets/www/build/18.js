webpackJsonp([18],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacoespermiumPokerclubsPageModule", function() { return NotificacoespermiumPokerclubsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notificacoespermium_pokerclubs__ = __webpack_require__(815);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificacoespermiumPokerclubsPageModule = /** @class */ (function () {
    function NotificacoespermiumPokerclubsPageModule() {
    }
    NotificacoespermiumPokerclubsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notificacoespermium_pokerclubs__["a" /* NotificacoespermiumPokerclubsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notificacoespermium_pokerclubs__["a" /* NotificacoespermiumPokerclubsPage */]),
            ],
        })
    ], NotificacoespermiumPokerclubsPageModule);
    return NotificacoespermiumPokerclubsPageModule;
}());

//# sourceMappingURL=notificacoespermium-pokerclubs.module.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacoespermiumPokerclubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clientrest_pokerclubs_clientrest_pokerclubs__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NotificacoespermiumPokerclubsPage = /** @class */ (function () {
    function NotificacoespermiumPokerclubsPage(navCtrl, navParams, globalvars, clientrest, alertCtrl, loadingController, platform, toastController) {
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
    NotificacoespermiumPokerclubsPage.prototype.ionViewDidLoad = function () {
        this.getMensagens();
    };
    NotificacoespermiumPokerclubsPage.prototype.ionViewDidEnter = function () {
        this.possuiMensagens = false;
        this.initializeBackButtonCustomHandler();
        this.getMensagens();
    };
    NotificacoespermiumPokerclubsPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    NotificacoespermiumPokerclubsPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        // Regitrando o Botao Voltar do Android
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.botaoVoltarAndroid();
        }, 101);
    };
    NotificacoespermiumPokerclubsPage.prototype.botaoVoltarAndroid = function () {
        this.navCtrl.pop(); //setRoot("GaleriaFotospremiumPokerclubsPage");
    };
    NotificacoespermiumPokerclubsPage.prototype.getMensagens = function () {
        var _this = this;
        var dataParam = {
            'club_id': this.globalvars.getdadosClubeAtual()["id"],
            'user_id': this.globalvars.getidUsuario()
        };
        this.clientrest.getMensagensClube(dataParam).then(function (data) {
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
    NotificacoespermiumPokerclubsPage.prototype.openMensagem = function (idMensagem) {
        this.globalvars.setidMensagemAtual(idMensagem);
        this.loadingPage("VisualizaNotificacaoPokerclubsPage", null);
    };
    NotificacoespermiumPokerclubsPage.prototype.deletarTodasMensagens = function () {
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
                            'user_id': _this.globalvars.getidUsuario(),
                            'club_id': _this.globalvars.getdadosClubeAtual()["id"]
                        };
                        _this.clientrest.excluirTodasMensagem(dataParam).then(function (data) {
                            if (data["result"] == "S") {
                                _this.getMensagens();
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
    NotificacoespermiumPokerclubsPage.prototype.deletarMensagem = function (idMensagem) {
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
                _this.getMensagens();
                toast.dismiss();
            }
            else {
                _this.CriaAlerta("Mensagens", data["message"]);
                toast.dismiss();
            }
        });
    };
    NotificacoespermiumPokerclubsPage.prototype.CriaAlerta = function (titulo, subtitulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: subtitulo,
            cssClass: 'alertaCustom',
            enableBackdropDismiss: false,
            buttons: ['OK']
        });
        alert.present();
    };
    NotificacoespermiumPokerclubsPage.prototype.loadingPage = function (pageName, pageParams) {
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
    NotificacoespermiumPokerclubsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notificacoespermium-pokerclubs',template:/*ion-inline-start:"C:\Roots\SAINTEC\pokerclubs\src\pages\notificacoespermium-pokerclubs\notificacoespermium-pokerclubs.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>PokerClubs - Mensagens</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-divider class="notificacoes-list-divider">\n      Toque no título da mensagem para visualizá-la    \n      <br *ngIf="possuiMensagens">  \n      <button *ngIf="possuiMensagens" class="botao-excluir-todas" (click)="deletarTodasMensagens()">Excluir todas</button>\n    </ion-item-divider>    \n  </ion-list>\n  <ion-grid>\n    <ion-row class="linha-mensagem" *ngFor="let mensagem of mensagens">\n      <ion-col col-8>\n        <table>\n          <tr>\n            <td>\n              <ion-icon class="icone-deletar-mensagem" name="trash" (click)="deletarMensagem(mensagem.id)"></ion-icon>\n            </td>\n            <td>\n              <label class="titulo-notificacao" [ngClass]="mensagem.read == \'S\' ? \'mensagem-lida\' : \'mensagem-nao-lida\'" [innerHTML]="mensagem.title" (click)="openMensagem(mensagem.id)"></label>\n            </td>\n          </tr>    \n        </table>    \n      </ion-col>\n      <ion-col col-4 align-self-end>\n        <label class="data-notificacao" [ngClass]="mensagem.read == \'S\' ? \'mensagem-lida\' : \'mensagem-nao-lida\'" [innerHTML]="mensagem.date" (click)="openMensagem(mensagem.id)"></label>\n      </ion-col>      \n    </ion-row>    \n  </ion-grid>  \n</ion-content>'/*ion-inline-end:"C:\Roots\SAINTEC\pokerclubs\src\pages\notificacoespermium-pokerclubs\notificacoespermium-pokerclubs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_clientrest_pokerclubs_clientrest_pokerclubs__["a" /* ClientrestPokerclubsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]])
    ], NotificacoespermiumPokerclubsPage);
    return NotificacoespermiumPokerclubsPage;
}());

//# sourceMappingURL=notificacoespermium-pokerclubs.js.map

/***/ })

});
//# sourceMappingURL=18.js.map