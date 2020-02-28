webpackJsonp([16],{

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RinggamepremiumPokerclubsPageModule", function() { return RinggamepremiumPokerclubsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ringgamepremium_pokerclubs__ = __webpack_require__(822);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RinggamepremiumPokerclubsPageModule = /** @class */ (function () {
    function RinggamepremiumPokerclubsPageModule() {
    }
    RinggamepremiumPokerclubsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ringgamepremium_pokerclubs__["a" /* RinggamepremiumPokerclubsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ringgamepremium_pokerclubs__["a" /* RinggamepremiumPokerclubsPage */]),
            ],
        })
    ], RinggamepremiumPokerclubsPageModule);
    return RinggamepremiumPokerclubsPageModule;
}());

//# sourceMappingURL=ringgamepremium-pokerclubs.module.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RinggamepremiumPokerclubsPage; });
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



var RinggamepremiumPokerclubsPage = /** @class */ (function () {
    function RinggamepremiumPokerclubsPage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
    }
    RinggamepremiumPokerclubsPage.prototype.ionViewDidLoad = function () {
        //this.initializeBackButtonCustomHandler();
    };
    RinggamepremiumPokerclubsPage.prototype.ionViewDidEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    RinggamepremiumPokerclubsPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    RinggamepremiumPokerclubsPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        // Regitrando o Botao Voltar do Android
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.botaoVoltarAndroid();
        }, 101);
    };
    RinggamepremiumPokerclubsPage.prototype.botaoVoltarAndroid = function () {
        this.navCtrl.pop(); //setRoot("ClubpremiumPokerclubsPage");
    };
    RinggamepremiumPokerclubsPage.prototype.closeRingGamePremium = function () {
        this.navCtrl.pop(); //setRoot("ClubpremiumPokerclubsPage");
    };
    RinggamepremiumPokerclubsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ringgamepremium-pokerclubs',template:/*ion-inline-start:"C:\Roots\SAINTEC\pokerclubs\src\pages\ringgamepremium-pokerclubs\ringgamepremium-pokerclubs.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>PokerClubs - Ring Game</ion-title>\n      <!--\n      <ion-buttons left> \n        <button ion-button icon-only (click)="closeRingGamePremium()" class="my-style-for-modal"> \n          <ion-icon name="arrow-back"></ion-icon> \n        </button> \n      </ion-buttons>\n      -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col>\n        <span style="color: white">Aqui sera a tabela de Ring Game</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Roots\SAINTEC\pokerclubs\src\pages\ringgamepremium-pokerclubs\ringgamepremium-pokerclubs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */]])
    ], RinggamepremiumPokerclubsPage);
    return RinggamepremiumPokerclubsPage;
}());

//# sourceMappingURL=ringgamepremium-pokerclubs.js.map

/***/ })

});
//# sourceMappingURL=16.js.map