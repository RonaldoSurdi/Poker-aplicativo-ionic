webpackJsonp([14],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPokerclubsPageModule", function() { return TabsPokerclubsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_pokerclubs__ = __webpack_require__(826);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPokerclubsPageModule = /** @class */ (function () {
    function TabsPokerclubsPageModule() {
    }
    TabsPokerclubsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs_pokerclubs__["a" /* TabsPokerclubsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs_pokerclubs__["a" /* TabsPokerclubsPage */]),
            ],
        })
    ], TabsPokerclubsPageModule);
    return TabsPokerclubsPageModule;
}());

//# sourceMappingURL=tabs-pokerclubs.module.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPokerclubsPage; });
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


var TabsPokerclubsPage = /** @class */ (function () {
    function TabsPokerclubsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = 'Tab1PokerclubsPage';
        this.tab2Root = 'Tab2PokerclubsPage';
        this.tab3Root = 'LocalizarClubePokerclubsPage';
        this.myIndex = navParams.data.tabIndex || 0;
    }
    TabsPokerclubsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-pokerclubs',template:/*ion-inline-start:"C:\Roots\SAINTEC\pokerclubs\src\pages\tabs-pokerclubs\tabs-pokerclubs.html"*/'<ion-tabs #tabs_pokerclubs id="tab-pokerclubs" name="tab-pokerclubs" [selectedIndex]="myIndex">\n  <ion-tab [root]="tab1Root" tabTitle="Mapa" tabIcon="locate"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Indique" tabIcon="thumbs-up"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Localizar" tabIcon="search"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Roots\SAINTEC\pokerclubs\src\pages\tabs-pokerclubs\tabs-pokerclubs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], TabsPokerclubsPage);
    return TabsPokerclubsPage;
}());

//# sourceMappingURL=tabs-pokerclubs.js.map

/***/ })

});
//# sourceMappingURL=14.js.map