webpackJsonp([15],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PokerclubsPageModule", function() { return Tab2PokerclubsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab2_pokerclubs__ = __webpack_require__(825);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab2PokerclubsPageModule = /** @class */ (function () {
    function Tab2PokerclubsPageModule() {
    }
    Tab2PokerclubsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab2_pokerclubs__["a" /* Tab2PokerclubsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab2_pokerclubs__["a" /* Tab2PokerclubsPage */]),
            ],
        })
    ], Tab2PokerclubsPageModule);
    return Tab2PokerclubsPageModule;
}());

//# sourceMappingURL=tab2-pokerclubs.module.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab2PokerclubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clientrest_pokerclubs_clientrest_pokerclubs__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_vars_global_vars__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { AppMinimize } from '@ionic-native/app-minimize';
var Tab2PokerclubsPage = /** @class */ (function () {
    function Tab2PokerclubsPage(navCtrl, navParams, clientrest, alertCtrl, formBuilder, platform, globalvars) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clientrest = clientrest;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.globalvars = globalvars;
        this.dadosClube = {};
        this.dadosClube = this.formBuilder.group({
            nome: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            proprietario: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            telefone: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    Tab2PokerclubsPage.prototype.ionViewDidEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    Tab2PokerclubsPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    Tab2PokerclubsPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        // Regitrando o Botao Voltar do Android
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.botaoVoltarAndroid();
        }, 101);
    };
    Tab2PokerclubsPage.prototype.botaoVoltarAndroid = function () {
        //this.appMinimize.minimize();
        this.navCtrl.parent.select(0);
    };
    Tab2PokerclubsPage.prototype.saveClub = function () {
        var _this = this;
        var dataParam = {
            'nome': this.dadosClube.value.nome,
            'proprietario': this.dadosClube.value.proprietario,
            'telefone': this.dadosClube.value.telefone,
            'id_user': this.globalvars.getidUsuario()
        };
        this.clientrest.saveClub(dataParam).then(function (data) {
            if (data["result"] == "S") {
                _this.CriaAlerta("PokerClubs", "Obrigado por indicar o clube. Entraremos em contato com ele o mais breve possível.");
                _this.navCtrl.pop();
            }
            else {
                _this.CriaAlerta("Cadastre-se", data["message"]);
            }
        });
    };
    Tab2PokerclubsPage.prototype.CriaAlerta = function (titulo, subtitulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: subtitulo,
            cssClass: 'alertaCustom',
            enableBackdropDismiss: false,
            buttons: ['OK']
        });
        alert.present();
    };
    Tab2PokerclubsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab2-pokerclubs',template:/*ion-inline-start:"C:\Roots\SAINTEC\pokerclubs\src\pages\tab2-pokerclubs\tab2-pokerclubs.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>PokerClubs - Indicar um Clube</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="dadosClube" (ngSubmit)="saveClub();">\n        <ion-list class="object_transparent">\n\n            <ion-item-divider class="indique-list-divider">\n                Informe todos os dados\n            </ion-item-divider>\n\n            <!-- Nome -->\n            <ion-item class="indique-list-itens">\n                <ion-label floating>Nome</ion-label>\n                <ion-input type="text" maxlength="100" #nome formControlName="nome" value=""></ion-input>   \n            </ion-item>\n\n            <!-- Proprietario -->\n            <ion-item class="indique-list-itens">\n                <ion-label floating>Proprietário</ion-label>\n                <ion-input type="text" maxlength="100" #proprietario formControlName="proprietario" value=""></ion-input>   \n            </ion-item>\n\n            <!-- Endereco \n            <ion-item class="indique-list-itens">\n                <ion-label floating>Endereço</ion-label>\n                <ion-input type="text" maxlength="100" #endereco formControlName="endereco" value=""></ion-input>   \n            </ion-item>\n            -->\n            <!-- Cidade \n            <ion-item class="indique-list-itens">\n                <ion-label floating>Cidade</ion-label>\n                <ion-input type="text" maxlength="100" #cidade formControlName="cidade" value=""></ion-input>   \n            </ion-item>\n            -->\n            <!-- Estado \n            <ion-item class="indique-list-itens">\n                <ion-label floating>Estado</ion-label>\n                <ion-select okText="Confirmar" cancelText="Cancelar" #estado formControlName="estado">\n                    <ion-option value="AC">Acre</ion-option>\n                    <ion-option value="AL">Alagoas</ion-option>\n                    <ion-option value="AP">Amapá</ion-option>\n                    <ion-option value="AM">Amazonas</ion-option>\n                    <ion-option value="BA">Bahia</ion-option>\n                    <ion-option value="CE">Ceará</ion-option>\n                    <ion-option value="DF">Distrito Federal</ion-option>\n                    <ion-option value="ES">Espírito Santo</ion-option>\n                    <ion-option value="GO">Goiás</ion-option>\n                    <ion-option value="MA">Maranhão</ion-option>\n                    <ion-option value="MT">Mato Grosso</ion-option>\n                    <ion-option value="MS">Mato Grosso do Sul</ion-option>\n                    <ion-option value="MG">Minas Gerais</ion-option>\n                    <ion-option value="PA">Pará</ion-option>\n                    <ion-option value="PB">Paraíba</ion-option>\n                    <ion-option value="PA">Paraná</ion-option>\n                    <ion-option value="PI">Piauí</ion-option>\n                    <ion-option value="RJ">Rio de Janeiro</ion-option>\n                    <ion-option value="RN">Rio Grande do Norte</ion-option>\n                    <ion-option value="RS">Rio Grande do Sul</ion-option>\n                    <ion-option value="RO">Rondônia</ion-option>\n                    <ion-option value="RR">Roraíma</ion-option>\n                    <ion-option value="SC">Santa Catarina</ion-option>\n                    <ion-option value="SP">São Paulo</ion-option>\n                    <ion-option value="SE">Sergipe</ion-option>\n                    <ion-option value="TO">Tocantis</ion-option>\n                  </ion-select>\n            </ion-item>\n            -->\n            <!-- E-Mail \n            <ion-item class="indique-list-itens">\n                <ion-label floating>E-Mail</ion-label>\n                <ion-input type="email" maxlength="100" #email formControlName="email" value=""></ion-input>   \n            </ion-item>\n            -->\n            <!-- Telefone -->\n            <ion-item class="indique-list-itens">\n                <ion-label floating>Telefone</ion-label>\n                <ion-input type="text" maxlength="100" #telefone formControlName="telefone" value=""></ion-input>   \n            </ion-item>\n            \n            <!-- Botao -->\n            <ion-item class="indique-list-itens">\n                <button color="cinza" ion-button block [disabled]="dadosClube.invalid">Cadastrar</button>\n            </ion-item>\n        </ion-list>      \n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\Roots\SAINTEC\pokerclubs\src\pages\tab2-pokerclubs\tab2-pokerclubs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_clientrest_pokerclubs_clientrest_pokerclubs__["a" /* ClientrestPokerclubsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */]])
    ], Tab2PokerclubsPage);
    return Tab2PokerclubsPage;
}());

//# sourceMappingURL=tab2-pokerclubs.js.map

/***/ })

});
//# sourceMappingURL=15.js.map