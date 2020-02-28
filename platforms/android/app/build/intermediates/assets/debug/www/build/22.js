webpackJsonp([22],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExibepremioPromocoesPokerclubsPageModule", function() { return ExibepremioPromocoesPokerclubsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exibepremio_promocoes_pokerclubs__ = __webpack_require__(809);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExibepremioPromocoesPokerclubsPageModule = /** @class */ (function () {
    function ExibepremioPromocoesPokerclubsPageModule() {
    }
    ExibepremioPromocoesPokerclubsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exibepremio_promocoes_pokerclubs__["a" /* ExibepremioPromocoesPokerclubsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exibepremio_promocoes_pokerclubs__["a" /* ExibepremioPromocoesPokerclubsPage */]),
            ],
        })
    ], ExibepremioPromocoesPokerclubsPageModule);
    return ExibepremioPromocoesPokerclubsPageModule;
}());

//# sourceMappingURL=exibepremio-promocoes-pokerclubs.module.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExibepremioPromocoesPokerclubsPage; });
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


/**
 * Generated class for the ExibepremioPromocoesPokerclubsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExibepremioPromocoesPokerclubsPage = /** @class */ (function () {
    function ExibepremioPromocoesPokerclubsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExibepremioPromocoesPokerclubsPage.prototype.ionViewDidLoad = function () {
        this.nomeTorneio = this.navParams.get("nomeTorneio");
        this.frasePremio = this.navParams.get("frasePremio");
        this.imagemCarta = this.navParams.get("imagemCarta");
    };
    ExibepremioPromocoesPokerclubsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exibepremio-promocoes-pokerclubs',template:/*ion-inline-start:"C:\Roots\SAINTEC\pokerclubs\src\pages\exibepremio-promocoes-pokerclubs\exibepremio-promocoes-pokerclubs.html"*/'<!--\n  <ion-header>\n\n  <ion-navbar>\n    <ion-title>exibepremio-promocoes-pokerclubs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n-->\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row justify-content-center class="row-exibe-premio-carta">\n      <ion-col>\n          Imagem\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-center class="row-exibe-premio-descricao">\n      <ion-col>\n        T\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Roots\SAINTEC\pokerclubs\src\pages\exibepremio-promocoes-pokerclubs\exibepremio-promocoes-pokerclubs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], ExibepremioPromocoesPokerclubsPage);
    return ExibepremioPromocoesPokerclubsPage;
}());

//# sourceMappingURL=exibepremio-promocoes-pokerclubs.js.map

/***/ })

});
//# sourceMappingURL=22.js.map