webpackJsonp([12],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPokerclubsPageModule", function() { return LoginPokerclubsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_pokerclubs__ = __webpack_require__(814);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPokerclubsPageModule = /** @class */ (function () {
    function LoginPokerclubsPageModule() {
    }
    LoginPokerclubsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_pokerclubs__["a" /* LoginPokerclubsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_pokerclubs__["a" /* LoginPokerclubsPage */]),
            ],
        })
    ], LoginPokerclubsPageModule);
    return LoginPokerclubsPageModule;
}());

//# sourceMappingURL=login-pokerclubs.module.js.map

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

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPokerclubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clientrest_pokerclubs_clientrest_pokerclubs__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_vars_global_vars__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_pokerclubs_menu_pokerclubs__ = __webpack_require__(780);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { FormBuilder} from '@angular/forms';
//import { AppMinimize } from '@ionic-native/app-minimize';
var LoginPokerclubsPage = /** @class */ (function () {
    function LoginPokerclubsPage(navCtrl, alertCtrl, 
    //public formBuilder: FormBuilder,
    clientrest, loadingController, faceBook, storage, globalvars, platform, menuPokerclubsPage) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.clientrest = clientrest;
        this.loadingController = loadingController;
        this.faceBook = faceBook;
        this.storage = storage;
        this.globalvars = globalvars;
        this.platform = platform;
        this.menuPokerclubsPage = menuPokerclubsPage;
        this.avatarFacebook = "assets/imgs/user.png";
        this.nomeFacebook = "Anonimo";
        //loginFacebook: any;
        this.exibeUsuarioESenha = false;
        //mostrarSomenteIOS: any = false;
        this.numberPage = true;
    }
    LoginPokerclubsPage.prototype.ionViewDidLoad = function () {
        //this.mostrarSomenteIOS = this.platform.is("ios");
    };
    LoginPokerclubsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.initializeBackButtonCustomHandler();
        this.storage.get('pokerClubs_tipoLogin').then(function (tip) {
            if (!tip)
                _this.numberPage = true;
            else if ((tip === "A") || (tip === "F"))
                _this.numberPage = false;
        });
        this.updateAvatar();
    };
    LoginPokerclubsPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    LoginPokerclubsPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        // Regitrando o Botao Voltar do Android
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.botaoVoltarAndroid();
        }, 101);
    };
    LoginPokerclubsPage.prototype.botaoVoltarAndroid = function () {
        this.navCtrl.pop(); //this.appMinimize.minimize();
    };
    LoginPokerclubsPage.prototype.updateAvatar = function () {
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
    // Funcao usada para logar o Usuario Sistema
    LoginPokerclubsPage.prototype.validUser = function () {
        var _this = this;
        var dataParam = {
            'email': this.email,
            'senha': this.senha,
            'one_signal': this.globalvars.getidDeviceOneSignal(),
            'one_signal_token': this.globalvars.gettokenDeviceOneSignal(),
            "unic_id": this.globalvars.getunicDevieID()
        };
        this.clientrest.validUser(dataParam).then(function (data) {
            if (data["result"] == "N") {
                _this.CriaAlerta("Login", data["message"]);
            }
            else {
                var photoavatar = 'assets/imgs/user.png';
                var tipologn = 'N';
                if (_this.email !== "contato@pokerclubsapp.com.br") {
                    tipologn = 'A';
                    if ((data["avatar"] !== "") && (data["avatar"] !== "null") && (data["avatar"] !== "undefined")) {
                        photoavatar = data["avatar"];
                    }
                }
                _this.storage.set('pokerClubs_emailUsuario', _this.email);
                _this.storage.set('pokerClubs_senhaUsuario', _this.senha);
                _this.storage.set('pokerClubs_nomeUsuario', data["nome"]);
                _this.storage.set('pokerClubs_apelidoUsuario', data["apelido"]);
                _this.storage.set('pokerClubs_tipoLogin', tipologn);
                _this.storage.set('pokerClubs_avatarUsuario', photoavatar);
                _this.globalvars.setnomeFacebook(data["nome"]);
                _this.globalvars.setidUsuario(data["user_id"]);
                _this.globalvars.setavatarFacebook(photoavatar);
                //this.globalvars.settipoPesquisaClubes("R"); // Tipo de Pesquisa do Clube R= Raio C= Cidade N= Nome
                _this.updateAvatar();
                _this.menuPokerclubsPage.updateAvatar();
                //this.navCtrl.setRoot("MenuPokerclubsPage");
                _this.navCtrl.pop();
            }
        });
    };
    ;
    // Funcao para criar alertas em todo o sistema
    LoginPokerclubsPage.prototype.CriaAlerta = function (titulo, subtitulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: subtitulo,
            enableBackdropDismiss: false,
            cssClass: 'alertaCustom',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPokerclubsPage.prototype.criarNovaConta = function () {
        this.navCtrl.push('RegisterPokerclubsPage');
    };
    LoginPokerclubsPage.prototype.logarFacebook = function () {
        var _this = this;
        this.faceBook.login(['public_profile', 'user_friends', 'email']).then(function (res) {
            _this.faceBook.api('me?fields=id,name,email,first_name,middle_name,last_name,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                _this.globalvars.setavatarFacebook(profile['picture_large']['data']['url']);
                var iduserface = profile["id"];
                var nomeuserface = profile['first_name'];
                var nameuserface = profile['name'];
                var emailuserface = profile['email'];
                var avataruserface = profile['picture_large']['data']['url'];
                if ((avataruserface === "") || (avataruserface === "null") || (avataruserface === "undefined")) {
                    avataruserface = "assets/imgs/user.png";
                }
                if (profile['last_name'] !== '')
                    nomeuserface += " " + profile['last_name'];
                var dataParam = {
                    "face_id": iduserface,
                    "nome": nomeuserface,
                    "email": emailuserface,
                    "apelido": nameuserface,
                    "one_signal": _this.globalvars.getidDeviceOneSignal(),
                    'one_signal_token': _this.globalvars.gettokenDeviceOneSignal(),
                    "unic_id": _this.globalvars.getunicDevieID()
                };
                _this.clientrest.loginFacebook(dataParam).then(function (data) {
                    if (data["result"] == "N") {
                        _this.CriaAlerta("Login", data["message"]);
                    }
                    else {
                        _this.globalvars.setnomeFacebook(nomeuserface);
                        _this.storage.set('pokerClubs_tipoLogin', 'F');
                        _this.storage.set('pokerClubs_emailUsuario', emailuserface);
                        _this.storage.set('pokerClubs_faceidUsuario', iduserface);
                        _this.storage.set('pokerClubs_nomeUsuario', nomeuserface);
                        _this.storage.set('pokerClubs_apelidoUsuario', nameuserface);
                        _this.storage.set('pokerClubs_avatarUsuario', avataruserface);
                        _this.globalvars.setnomeFacebook(nomeuserface);
                        _this.globalvars.setidUsuario(data["user_id"]);
                        _this.globalvars.setavatarFacebook(avataruserface);
                        _this.updateAvatar();
                        _this.menuPokerclubsPage.updateAvatar();
                        //this.globalvars.settipoPesquisaClubes("R"); // Tipo de Pesquisa do Clube R= Raio C= Cidade N= Nome
                        //this.loadingPage('MenuPokerclubsPage',null);
                        //this.navCtrl.setRoot('MenuPokerclubsPage');
                        _this.navCtrl.pop();
                    }
                });
            });
        })
            .catch(function (e) {
            _this.CriaAlerta("PokerClubs", "Ocorreu um erro ao tentar se conectar ao Facebook.");
        });
    };
    LoginPokerclubsPage.prototype.exibirLogin = function () {
        //console.log("exibeUsuarioESenha", this.exibeUsuarioESenha);
        this.exibeUsuarioESenha = !this.exibeUsuarioESenha;
    };
    LoginPokerclubsPage.prototype.loadingPage = function (pageName, pageParams) {
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
    LoginPokerclubsPage.prototype.acessarAppSemCadastro = function () {
        this.exibeUsuarioESenha = false;
        this.email = "contato@pokerclubsapp.com.br";
        this.senha = "";
        this.validUser();
    };
    LoginPokerclubsPage.prototype.fecharlogin = function () {
        //this.globalvars.settipoPesquisaClubes("R");
        this.navCtrl.setRoot('MenuPokerclubsPage');
        // this.loadingPage('MenuPokerclubsPage', null);
    };
    LoginPokerclubsPage.prototype.desconectarLogin = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Desconectar sua conta',
            message: 'Tem certeza que desejas desconectar sua conta?',
            cssClass: 'alertaCustom',
            enableBackdropDismiss: false,
            buttons: [{
                    text: 'Desconectar',
                    role: 'continuar',
                    handler: function () {
                        _this.numberPage = true;
                        _this.acessarAppSemCadastro();
                    }
                }, {
                    text: 'Cancelar',
                    handler: function () {
                        _this.updateAvatar();
                        _this.menuPokerclubsPage.updateAvatar();
                        _this.navCtrl.pop();
                        //this.navCtrl.setRoot('MenuPokerclubsPage');
                    }
                }]
        });
        alert.present();
    };
    LoginPokerclubsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-pokerclubs',template:/*ion-inline-start:"C:\Roots\SAINTEC\pokerclubs\src\pages\login-pokerclubs\login-pokerclubs.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>PokerClubs - Minha Conta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content scrollbar-y="true" has-bouncing="false">\n  <!-- Logo -->\n  <div class="lg-tela">\n    <div class="lg-logo">\n      <img src="assets/imgs/login/logo-com-as-naipes.png">\n    </div>\n\n    <!-- Conteudo -->\n    <div  class="lg-content">\n      <!-- Email -->\n      <div *ngIf="exibeUsuarioESenha" class="lg-email">\n        <table>\n          <tr>\n            <td>\n              <ion-icon name="person"></ion-icon>\n            </td>\n            <td>\n              <ion-input type="text" [(ngModel)]="email" name="email" id="email" placeholder="usuário/e-mail"></ion-input>\n            </td>\n          </tr>\n        </table>     \n      </div> \n      <div *ngIf="exibeUsuarioESenha" class="lg-divisao">\n\n      </div>\n      <!-- Senha -->\n      <div *ngIf="exibeUsuarioESenha" class="lg-senha">\n        <table>            \n          <tr>\n            <td>\n              <ion-icon name="lock"></ion-icon>\n            </td>\n            <td>\n              <ion-input type="password" [(ngModel)]="senha" name="senha" id="senha" placeholder="senha"></ion-input>\n            </td>\n          </tr>\n        </table>     \n      </div>\n      <div *ngIf="exibeUsuarioESenha" class="lg-botao-entrar">\n        <img class="image-button" src="assets/imgs/login/button-entrar.png" (click)="validUser();">\n      </div>\n    </div> \n    <div class="lg-fixed-footer">\n      <!-- Login Facebook -->\n      <div class="lg-facebook" *ngIf="numberPage&&!exibeUsuarioESenha">\n          <img class="image-button" src="assets/imgs/login/button-facebook.png" (click)="logarFacebook()">\n      </div>\n      <!-- Entrar -->\n      <div class="lg-footer">\n        <div *ngIf="numberPage&&!exibeUsuarioESenha">\n          <span>Clique aqui e <b (click)="criarNovaConta()" >CADASTRE-SE</b></span>\n          <br><br>\n          <span>Já tem uma conta? <b (click)="exibirLogin()">ENTRAR</b></span><br>\n        </div>\n        <div *ngIf="!numberPage&&!exibeUsuarioESenha">\n          <div class="div-avatar-i">\n            <ion-avatar>\n              <img class="avatar-facebook-i" [src]="avatarFacebook" >\n            </ion-avatar>\n            <span class="nome-facebook-i" [innerHTML]="nomeFacebook" ></span>\n          </div>\n          <br>\n          <button color="cinza" ion-button block (click)="desconectarLogin()">DESCONECTAR</button>\n        </div>\n        <br><br>\n        <div *ngIf="exibeUsuarioESenha" class="btvoltar">\n          <button  color="cinza" ion-button block (click)="exibirLogin()">VOLTAR</button><br><br><br>\n        </div>\n        <div class="logofoot">\n          <img src="assets/imgs/saintec.png">\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Roots\SAINTEC\pokerclubs\src\pages\login-pokerclubs\login-pokerclubs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_clientrest_pokerclubs_clientrest_pokerclubs__["a" /* ClientrestPokerclubsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__menu_pokerclubs_menu_pokerclubs__["a" /* MenuPokerclubsPage */]])
    ], LoginPokerclubsPage);
    return LoginPokerclubsPage;
}());

//# sourceMappingURL=login-pokerclubs.js.map

/***/ })

});
//# sourceMappingURL=12.js.map