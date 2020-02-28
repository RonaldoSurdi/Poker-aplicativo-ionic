webpackJsonp([24],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AovivopremiumPokerclubsPageModule", function() { return AovivopremiumPokerclubsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aovivopremium_pokerclubs__ = __webpack_require__(787);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AovivopremiumPokerclubsPageModule = /** @class */ (function () {
    function AovivopremiumPokerclubsPageModule() {
    }
    AovivopremiumPokerclubsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aovivopremium_pokerclubs__["a" /* AovivopremiumPokerclubsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aovivopremium_pokerclubs__["a" /* AovivopremiumPokerclubsPage */]),
            ],
        })
    ], AovivopremiumPokerclubsPageModule);
    return AovivopremiumPokerclubsPageModule;
}());

//# sourceMappingURL=aovivopremium-pokerclubs.module.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AovivopremiumPokerclubsPage; });
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



var AovivopremiumPokerclubsPage = /** @class */ (function () {
    function AovivopremiumPokerclubsPage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
    }
    AovivopremiumPokerclubsPage.prototype.ionViewDidLoad = function () {
    };
    AovivopremiumPokerclubsPage.prototype.ionViewDidEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    AovivopremiumPokerclubsPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    AovivopremiumPokerclubsPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        // Regitrando o Botao Voltar do Android
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.botaoVoltarAndroid();
        }, 101);
    };
    AovivopremiumPokerclubsPage.prototype.botaoVoltarAndroid = function () {
        this.navCtrl.pop(); //("ClubpremiumPokerclubsPage");
    };
    AovivopremiumPokerclubsPage.prototype.closeAoVivoPremium = function () {
        this.navCtrl.pop(); //push("Tab1PokerclubsPage");
    };
    AovivopremiumPokerclubsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aovivopremium-pokerclubs',template:/*ion-inline-start:"C:\Roots\SAINTEC\pokerclubs\src\pages\aovivopremium-pokerclubs\aovivopremium-pokerclubs.html"*/'<!--\n  Generated template for the AovivopremiumPokerclubsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PokerClubs - Ao Vivo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Roots\SAINTEC\pokerclubs\src\pages\aovivopremium-pokerclubs\aovivopremium-pokerclubs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */]])
    ], AovivopremiumPokerclubsPage);
    return AovivopremiumPokerclubsPage;
}());

//# sourceMappingURL=aovivopremium-pokerclubs.js.map

/***/ })

});
//# sourceMappingURL=24.js.map