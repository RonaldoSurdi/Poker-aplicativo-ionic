webpackJsonp([19],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPokerclubsPageModule", function() { return MenuPokerclubsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_pokerclubs__ = __webpack_require__(780);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPokerclubsPageModule = /** @class */ (function () {
    function MenuPokerclubsPageModule() {
    }
    MenuPokerclubsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_pokerclubs__["a" /* MenuPokerclubsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_pokerclubs__["a" /* MenuPokerclubsPage */]),
            ],
        })
    ], MenuPokerclubsPageModule);
    return MenuPokerclubsPageModule;
}());

//# sourceMappingURL=menu-pokerclubs.module.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPokerclubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuPokerclubsPage = /** @class */ (function () {
    function MenuPokerclubsPage(navCtrl, navParams, globalvars, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalvars = globalvars;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.rootPage = 'TabsPokerclubsPage';
        this.avatarFacebook = "assets/imgs/user.png";
        this.nomeFacebook = "Anonimo";
        this.logouFacebook = false;
        this.numberPage = false;
        this.pages = [
            { title: 'Mapa', pageName: 'Tab1PokerclubsPage', tabComponent: 'Tab1PokerclubsPage', index: 0, icon: 'locate', 'view': 1 },
            { title: 'Indique um Clube', pageName: 'Tab2PokerclubsPage', tabComponent: 'Tab2PokerclubsPage', index: 1, icon: 'thumbs-up', 'view': 2 },
            { title: 'Localize um Clube', pageName: 'LocalizarClubePokerclubsPage', tabComponent: 'LocalizarClubePokerclubsPage', index: 2, icon: 'search', 'view': 3 },
            { title: 'Mensagens', pageName: 'TodasmensagensPokerclubsPage', tabComponent: 'TodasmensagensPokerclubsPage', index: undefined, icon: 'mail', 'view': 4 },
            { title: 'Minha Conta', pageName: 'LoginPokerclubsPage', tabComponent: 'LoginPokerclubsPage', index: undefined, icon: 'add', 'view': 5 }
        ];
    }
    MenuPokerclubsPage.prototype.ionViewWillEnter = function () {
        this.updateAvatar();
    };
    MenuPokerclubsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.globalvars.getlocalizandoClubes()) {
            this.nav.getActiveChildNavs()[0].select(0);
        }
        //document.getElementById("btmenu4").style.display = "none";
        this.storage.get('pokerClubs_tipoLogin').then(function (tip) {
            if (!tip)
                _this.numberPage = true;
            else if ((tip === "N") || (tip === "O") || (tip === ""))
                _this.numberPage = true;
        });
        this.logouFacebook = true;
    };
    MenuPokerclubsPage.prototype.updateAvatar = function () {
        var nomeFacebookT = this.globalvars.getnomeFacebook();
        if (nomeFacebookT)
            if ((nomeFacebookT !== "") && (nomeFacebookT !== null) && (nomeFacebookT !== "undefined"))
                if (this.nomeFacebook !== nomeFacebookT)
                    this.nomeFacebook = nomeFacebookT;
        var avatarFacebookT = this.globalvars.getavatarFacebook();
        if (avatarFacebookT)
            if ((avatarFacebookT !== "") && (avatarFacebookT !== null) || (avatarFacebookT !== "undefined"))
                if (this.avatarFacebook !== avatarFacebookT)
                    this.avatarFacebook = avatarFacebookT;
    };
    MenuPokerclubsPage.prototype.openPage = function (page) {
        var _this = this;
        this.updateAvatar();
        var params = {};
        if (page.index) {
            params = { tabIndex: page.index };
        }
        if (this.nav.getActiveChildNavs()[0] && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            if (page.pageName == "TodasmensagensPokerclubsPage") {
                if (parseInt(this.globalvars.getidUsuario()) > 1) {
                    this.nav.push("TodasmensagensPokerclubsPage");
                }
                else {
                    var alert_1 = this.alertCtrl.create({
                        title: 'Acesse sua conta',
                        message: 'Para utilizar este recurso é necessário acessar ou criar seu cadastro!!!',
                        cssClass: 'alertaCustom',
                        enableBackdropDismiss: false,
                        buttons: [{
                                text: 'Ir para Cadastro',
                                role: 'continuar',
                                handler: function () {
                                    _this.nav.push("LoginPokerclubsPage");
                                }
                            }, {
                                text: 'Agora não'
                            }]
                    });
                    alert_1.present();
                }
            }
            else if (page.pageName == "LoginPokerclubsPage") {
                this.nav.push("LoginPokerclubsPage");
            }
            else {
                this.nav.setRoot(page.pageName, params);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Nav */])
    ], MenuPokerclubsPage.prototype, "nav", void 0);
    MenuPokerclubsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu-pokerclubs',template:/*ion-inline-start:"C:\Roots\SAINTEC\pokerclubs\src\pages\menu-pokerclubs\menu-pokerclubs.html"*/'<!--<ion-menu [content]="content">\n  <ion-content>\n    <ion-list>\n      <button ion-item menuClose (click)="openPage(\'Tab1PokerclubsPage\')"><ion-icon item-start [name]="locate" ></ion-icon>Mapa</button>\n      <button ion-item menuClose (click)="openPage(\'Tab2PokerclubsPage\')"><ion-icon item-start [name]="thumbs-up" ></ion-icon>Indique um Clube</button>\n      <button ion-item menuClose (click)="openPage(\'LocalizarClubePokerclubsPage\')"><ion-icon item-start [name]="search" ></ion-icon>Localize um Clube</button>\n      <button ion-item menuClose (click)="openPage(\'TodasmensagensPokerclubsPage\')"><ion-icon item-start [name]="mail" ></ion-icon>Mensagens</button>\n      <button ion-item menuClose (click)="openPage(\'LoginPokerclubsPage\')"><ion-icon item-start [name]="add" ></ion-icon>Cadastre-se</button>\n      <button ion-item menuClose (click)="openPage(\'SairPokerclubsPage\')"><ion-icon item-start [name]="exit" ></ion-icon>Sair</button>\n    </ion-list>\n    <div *ngIf="logouFacebook" class="div-avatar">\n      <ion-avatar>\n        <img class="avatar-facebook" [src]="avatarFacebook">\n      </ion-avatar>\n      <span class="nome-facebook"[innerHTML]="nomeFacebook"></span>\n    </div>\n  </ion-content>\n</ion-menu>-->\n<ion-menu [content]="content">\n    <ion-content>\n        <ion-list>\n            <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n                <ion-icon item-start [name]="p.icon"></ion-icon>\n                {{ p.title }}\n            </button>\n        </ion-list>\n        <div *ngIf="logouFacebook" class="div-avatar">\n            <ion-avatar>\n                <img id="avatar-facebook" class="avatar-facebook" [src]="avatarFacebook" (click)="openPage(\'LoginPokerclubsPage\')">\n            </ion-avatar>\n            <span id="nome-facebook" class="nome-facebook" [innerHTML]="nomeFacebook" (click)="openPage(\'LoginPokerclubsPage\')"></span>\n        </div>\n    </ion-content>\n</ion-menu>\n\n<ion-nav [swipeBackEnabled]="true" [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"C:\Roots\SAINTEC\pokerclubs\src\pages\menu-pokerclubs\menu-pokerclubs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MenuPokerclubsPage);
    return MenuPokerclubsPage;
}());

//# sourceMappingURL=menu-pokerclubs.js.map

/***/ })

});
//# sourceMappingURL=19.js.map