webpackJsonp([25],{

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendapremiumPokerclubsPageModule", function() { return AgendapremiumPokerclubsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agendapremium_pokerclubs__ = __webpack_require__(788);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AgendapremiumPokerclubsPageModule = /** @class */ (function () {
    function AgendapremiumPokerclubsPageModule() {
    }
    AgendapremiumPokerclubsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__agendapremium_pokerclubs__["a" /* AgendapremiumPokerclubsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agendapremium_pokerclubs__["a" /* AgendapremiumPokerclubsPage */]),
            ],
        })
    ], AgendapremiumPokerclubsPageModule);
    return AgendapremiumPokerclubsPageModule;
}());

//# sourceMappingURL=agendapremium-pokerclubs.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendapremiumPokerclubsPage; });
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






var AgendapremiumPokerclubsPage = /** @class */ (function () {
    function AgendapremiumPokerclubsPage(navCtrl, navParams, platform, globalvars, clientrest, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.globalvars = globalvars;
        this.clientrest = clientrest;
        this.alertCtrl = alertCtrl;
    }
    AgendapremiumPokerclubsPage.prototype.ionViewDidLoad = function () {
        this.getAgendaSemanal();
    };
    AgendapremiumPokerclubsPage.prototype.ionViewDidEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    AgendapremiumPokerclubsPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    AgendapremiumPokerclubsPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        // Regitrando o Botao Voltar do Android
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.botaoVoltarAndroid();
        }, 101);
    };
    AgendapremiumPokerclubsPage.prototype.botaoVoltarAndroid = function () {
        this.navCtrl.pop();
    };
    AgendapremiumPokerclubsPage.prototype.getAgendaSemanal = function () {
        var _this = this;
        var dataParam = {
            'club_id': this.globalvars.getdadosClubeAtual()["id"],
            'user_id': this.globalvars.getidUsuario()
        };
        this.clientrest.getAgendaSemanal(dataParam).then(function (data) {
            if (data["result"] == "S") {
                _this.agendas = data["items"];
            }
            else {
                _this.CriaAlerta("Agenda", data["message"]);
                _this.navCtrl.pop();
            }
        });
    };
    AgendapremiumPokerclubsPage.prototype.semAgenda = function (diaSemana) {
        if (diaSemana.length == 0) {
            diaSemana.push({
                nome: "NÃO HAVERÁ PROGRAMAÇÃO",
                horario: "",
                descricao: ""
            });
        }
        return diaSemana;
    };
    AgendapremiumPokerclubsPage.prototype.CriaAlerta = function (titulo, subtitulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: subtitulo,
            cssClass: 'alertaCustom',
            enableBackdropDismiss: false,
            buttons: ['OK']
        });
        alert.present();
    };
    AgendapremiumPokerclubsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agendapremium-pokerclubs',template:/*ion-inline-start:"C:\Roots\SAINTEC\pokerclubs\src\pages\agendapremium-pokerclubs\agendapremium-pokerclubs.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Agenda  - PokerClubs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngFor="let agenda of agendas">    \n    <ion-card-header>\n        <span [innerHTML]="agenda.week" class="agenda-dia-semana"></span>\n        &nbsp;&nbsp;-&nbsp;&nbsp;\n        <span [innerHTML]="agenda.date"></span>\n    </ion-card-header>\n    <ion-grid *ngFor="let evento of agenda.items">\n      <ion-row>\n        <ion-col>\n            <strong><span class="agenda-nome-programacao" [innerHTML]="evento.title"></span></strong>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n            <span [innerHTML]="evento.hour"></span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n            <span [innerHTML]="evento.description"></span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>    \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Roots\SAINTEC\pokerclubs\src\pages\agendapremium-pokerclubs\agendapremium-pokerclubs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_clientrest_pokerclubs_clientrest_pokerclubs__["a" /* ClientrestPokerclubsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AgendapremiumPokerclubsPage);
    return AgendapremiumPokerclubsPage;
}());

//# sourceMappingURL=agendapremium-pokerclubs.js.map

/***/ })

});
//# sourceMappingURL=25.js.map