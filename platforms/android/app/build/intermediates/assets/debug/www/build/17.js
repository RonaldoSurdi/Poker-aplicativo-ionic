webpackJsonp([17],{

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPokerclubsPageModule", function() { return RegisterPokerclubsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_pokerclubs__ = __webpack_require__(821);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPokerclubsPageModule = /** @class */ (function () {
    function RegisterPokerclubsPageModule() {
    }
    RegisterPokerclubsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_pokerclubs__["a" /* RegisterPokerclubsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_pokerclubs__["a" /* RegisterPokerclubsPage */]),
            ],
        })
    ], RegisterPokerclubsPageModule);
    return RegisterPokerclubsPageModule;
}());

//# sourceMappingURL=register-pokerclubs.module.js.map

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPokerclubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clientrest_pokerclubs_clientrest_pokerclubs__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_vars_global_vars__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterPokerclubsPage = /** @class */ (function () {
    function RegisterPokerclubsPage(navCtrl, navParams, formBuilder, loadingCtrl, clientrest, alertCtrl, platform, globalvars, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.clientrest = clientrest;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.globalvars = globalvars;
        this.storage = storage;
        this.dadosRegister = {};
        this.dadosRegister = this.formBuilder.group({
            nome: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            apelido: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            senha: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            confirmarsenha: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    RegisterPokerclubsPage.prototype.ionViewDidLoad = function () {
        //this.initializeBackButtonCustomHandler();
    };
    RegisterPokerclubsPage.prototype.ionViewDidEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    RegisterPokerclubsPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    RegisterPokerclubsPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        // Regitrando o Botao Voltar do Android
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.botaoVoltarAndroid();
        }, 101);
    };
    RegisterPokerclubsPage.prototype.botaoVoltarAndroid = function () {
        this.navCtrl.pop();
    };
    RegisterPokerclubsPage.prototype.saveRegister = function () {
        var _this = this;
        if (this.dadosRegister.value.senha !== this.dadosRegister.value.confirmarsenha) {
            this.CriaAlerta("Cadastre-se", "Os campos senha e confirmar senha não estão corretos.");
            return;
        }
        var newEmail = this.dadosRegister.value.email;
        var newSenha = this.dadosRegister.value.senha;
        var newNome = this.dadosRegister.value.nome;
        var userIdupd = this.globalvars.getidUsuario();
        if (userIdupd === 1)
            userIdupd = '';
        var newApelido = this.dadosRegister.value.apelido;
        var dataParam = {
            'email': newEmail,
            'senha': newSenha,
            'nome': newNome,
            'apelido': newApelido,
            'telefone': this.dadosRegister.value.telefone,
            'one_signal': this.globalvars.getidDeviceOneSignal(),
            'one_signal_token': this.globalvars.gettokenDeviceOneSignal(),
            'userid': userIdupd,
            'unic_id': this.globalvars.getunicDevieID()
        };
        this.clientrest.saveRegister(dataParam).then(function (data) {
            if (data["result"] == "S") {
                _this.globalvars.setidUsuario(data["user_id"]);
                _this.globalvars.setidUsuarioFacebook("");
                _this.globalvars.setnomeFacebook(newNome);
                _this.globalvars.setavatarFacebook("assets/imgs/user.png");
                _this.storage.set('pokerClubs_tipoLogin', 'A');
                _this.storage.set('pokerClubs_emailUsuario', newEmail);
                _this.storage.set('pokerClubs_senhaUsuario', newSenha);
                _this.storage.set('pokerClubs_nomeUsuario', newNome);
                _this.CriaAlerta("PokerClubs", "Obrigado por se registrar. O PokerClubs agradece.");
                _this.navCtrl.push('MenuPokerclubsPage');
            }
            else {
                _this.CriaAlerta("Cadastre-se", data["message"]);
            }
        });
    };
    RegisterPokerclubsPage.prototype.CriaAlerta = function (titulo, subtitulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: subtitulo,
            cssClass: 'alertaCustom',
            enableBackdropDismiss: false,
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPokerclubsPage.prototype.closeCadastreSe = function () {
        this.navCtrl.pop(); //setRoot("LoginPokerclubsPage");
    };
    RegisterPokerclubsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register-pokerclubs',template:/*ion-inline-start:"C:\Roots\SAINTEC\pokerclubs\src\pages\register-pokerclubs\register-pokerclubs.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>PokerClubs - Cadastre-se</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]="dadosRegister" (ngSubmit)="saveRegister();">\n        <ion-list class="object_transparent">\n            \n            <ion-item-divider class="register-list-divider">\n                Informe todos os dados\n            </ion-item-divider>\n\n            <!-- Nome Completo -->\n            <ion-item class="register-list-itens">\n                <ion-label class="label-register" floating>Nome Completo</ion-label>\n                <ion-input  type="text" maxlength="50" #nome formControlName="nome" value=""></ion-input>    \n            </ion-item>\n\n            <!-- Apelido -->\n            <ion-item class="register-list-itens">\n                <ion-label class="label-register" floating>Apelido</ion-label>\n                <ion-input  type="text" maxlength="50" #apelido formControlName="nome" value=""></ion-input>\n            </ion-item>\n\n            <!-- Telefone -->\n            <ion-item class="register-list-itens">\n                <ion-label class="label-register" floating>Telefone (Opcional)</ion-label>\n                <ion-input  type="text" maxlength="50" #telefone formControlName="telefone" value=""></ion-input>\n            </ion-item>\n\n            <!-- E-Mail -->\n            <ion-item class="register-list-itens">\n                <ion-label class="label-register" floating>E-Mail</ion-label>\n                <ion-input type="email" maxlength="50" #email formControlName="email" value=""></ion-input>\n            </ion-item>\n\n            <!-- Senha -->\n            <ion-item class="register-list-itens">\n                <ion-label class="label-register" floating>Senha</ion-label>\n                <ion-input  type="password" maxlength="50" #senha formControlName="senha" value=""></ion-input>\n            </ion-item>\n\n            <!-- Confirmar Senha -->\n            <ion-item class="register-list-itens">\n                <ion-label class="label-register" floating>Confirmar senha:</ion-label>\n                <ion-input  type="password" maxlength="50" #confirmarsenha formControlName="confirmarsenha" value=""></ion-input>\n            </ion-item>\n\n            <ion-item class="register-list-itens">\n                <button color="cinza" ion-button block class="btcadastrar">CADASTRAR</button>\n            </ion-item>\n        </ion-list>\n    </form>\n    \n</ion-content>\n'/*ion-inline-end:"C:\Roots\SAINTEC\pokerclubs\src\pages\register-pokerclubs\register-pokerclubs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_clientrest_pokerclubs_clientrest_pokerclubs__["a" /* ClientrestPokerclubsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], RegisterPokerclubsPage);
    return RegisterPokerclubsPage;
}());

//# sourceMappingURL=register-pokerclubs.js.map

/***/ })

});
//# sourceMappingURL=17.js.map