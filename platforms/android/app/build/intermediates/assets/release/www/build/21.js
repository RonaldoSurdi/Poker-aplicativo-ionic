webpackJsonp([21],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaFotospremiumPokerclubsPageModule", function() { return GaleriaFotospremiumPokerclubsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__galeria_fotospremium_pokerclubs__ = __webpack_require__(812);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GaleriaFotospremiumPokerclubsPageModule = /** @class */ (function () {
    function GaleriaFotospremiumPokerclubsPageModule() {
    }
    GaleriaFotospremiumPokerclubsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__galeria_fotospremium_pokerclubs__["a" /* GaleriaFotospremiumPokerclubsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__galeria_fotospremium_pokerclubs__["a" /* GaleriaFotospremiumPokerclubsPage */]),
            ],
        })
    ], GaleriaFotospremiumPokerclubsPageModule);
    return GaleriaFotospremiumPokerclubsPageModule;
}());

//# sourceMappingURL=galeria-fotospremium-pokerclubs.module.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaleriaFotospremiumPokerclubsPage; });
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







var GaleriaFotospremiumPokerclubsPage = /** @class */ (function () {
    function GaleriaFotospremiumPokerclubsPage(navCtrl, navParams, clientrest, alertCtrl, globalvars, platform, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clientrest = clientrest;
        this.alertCtrl = alertCtrl;
        this.globalvars = globalvars;
        this.platform = platform;
        this.loadingController = loadingController;
    }
    GaleriaFotospremiumPokerclubsPage.prototype.ionViewDidLoad = function () {
        //this.initializeBackButtonCustomHandler();
        this.getGaleriaFotos();
    };
    GaleriaFotospremiumPokerclubsPage.prototype.ionViewDidEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    GaleriaFotospremiumPokerclubsPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    GaleriaFotospremiumPokerclubsPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        // Regitrando o Botao Voltar do Android
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.botaoVoltarAndroid();
        }, 102);
    };
    GaleriaFotospremiumPokerclubsPage.prototype.botaoVoltarAndroid = function () {
        this.navCtrl.pop(); //("ClubpremiumPokerclubsPage");
    };
    GaleriaFotospremiumPokerclubsPage.prototype.closeGaleriaFotosPremium = function () {
        this.navCtrl.pop(); //("ClubpremiumPokerclubsPage");
    };
    GaleriaFotospremiumPokerclubsPage.prototype.getGaleriaFotos = function () {
        var _this = this;
        var dataParam = {
            'club_id': this.globalvars.getdadosClubeAtual()["id"],
            'user_id': this.globalvars.getidUsuario()
        };
        this.clientrest.getGaleriaFotosClub(dataParam).then(function (data) {
            if (data["result"] == "S") {
                _this.galerias = data["items"];
            }
            else {
                _this.CriaAlerta("Galeria de Fotos", data["message"]);
                _this.navCtrl.pop();
            }
        }).catch(function (error) {
            //this.CriaAlerta("PokerClubs", "Ocorreu um erro ao requisitar os dados.<br>Tente novamente mais tarde.");
            _this.navCtrl.pop();
        });
    };
    GaleriaFotospremiumPokerclubsPage.prototype.openFotosDaGaleria = function (id_galeria) {
        this.globalvars.setgaleriaFotosAtual(id_galeria);
        this.loadingPage("FotospremiumPokerclubsPage", null);
    };
    GaleriaFotospremiumPokerclubsPage.prototype.CriaAlerta = function (titulo, subtitulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: subtitulo,
            cssClass: 'alertaCustom',
            enableBackdropDismiss: false,
            buttons: ['OK']
        });
        alert.present();
    };
    GaleriaFotospremiumPokerclubsPage.prototype.loadingPage = function (pageName, pageParams) {
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
    GaleriaFotospremiumPokerclubsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-galeria-fotospremium-pokerclubs',template:/*ion-inline-start:"C:\Roots\SAINTEC\pokerclubs\src\pages\galeria-fotospremium-pokerclubs\galeria-fotospremium-pokerclubs.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>PokerClubs - Galeria de Fotos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-divider class="galeria-fotos-list-divider">\n      Toque na foto para exibir mais fotos\n    </ion-item-divider>\n  </ion-list>\n  <ion-card *ngFor="let galeria of galerias">\n      <ion-card-content>\n        <p class="titulo-galeria" [innerHTML]="galeria.title"></p>\n        <p>&nbsp;</p>\n        <img [src]="galeria.photo" (click)="openFotosDaGaleria(galeria.id)">\n        <p>&nbsp;</p>\n        <p class="data-galeria" [innerHTML]="galeria.date"></p>\n        <p class="descricao-galeria" [innerHTML]="galeria.description"></p>\n      </ion-card-content> \n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Roots\SAINTEC\pokerclubs\src\pages\galeria-fotospremium-pokerclubs\galeria-fotospremium-pokerclubs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_clientrest_pokerclubs_clientrest_pokerclubs__["a" /* ClientrestPokerclubsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], GaleriaFotospremiumPokerclubsPage);
    return GaleriaFotospremiumPokerclubsPage;
}());

//# sourceMappingURL=galeria-fotospremium-pokerclubs.js.map

/***/ })

});
//# sourceMappingURL=21.js.map