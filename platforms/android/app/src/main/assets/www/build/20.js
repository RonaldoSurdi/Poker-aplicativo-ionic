webpackJsonp([20],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizarClubePokerclubsPageModule", function() { return LocalizarClubePokerclubsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localizar_clube_pokerclubs__ = __webpack_require__(813);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { MatAutocompleteModule } from '@angular/material/autocomplete';
var LocalizarClubePokerclubsPageModule = /** @class */ (function () {
    function LocalizarClubePokerclubsPageModule() {
    }
    LocalizarClubePokerclubsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__localizar_clube_pokerclubs__["a" /* LocalizarClubePokerclubsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__localizar_clube_pokerclubs__["a" /* LocalizarClubePokerclubsPage */]),
            ],
        })
    ], LocalizarClubePokerclubsPageModule);
    return LocalizarClubePokerclubsPageModule;
}());

//# sourceMappingURL=localizar-clube-pokerclubs.module.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizarClubePokerclubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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




var LocalizarClubePokerclubsPage = /** @class */ (function () {
    function LocalizarClubePokerclubsPage(navCtrl, navParams, platform, clientrest, alertCtrl, globalvars) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.clientrest = clientrest;
        this.alertCtrl = alertCtrl;
        this.globalvars = globalvars;
        this.localizar = "localizar-cidade";
        this.exibirListaCidades = false;
        this.exibirListaClubes = false;
        this.listaCidadesCount = 0;
        this.cidadeSelected = [0, '', '', ''];
        this.listaClubesCount = 0;
        this.clubeSelected = [0, '', '', ''];
    }
    LocalizarClubePokerclubsPage.prototype.ionViewDidEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    LocalizarClubePokerclubsPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    LocalizarClubePokerclubsPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        // Regitrando o Botao Voltar do Android
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.botaoVoltarAndroid();
        }, 101);
    };
    LocalizarClubePokerclubsPage.prototype.botaoVoltarAndroid = function () {
        //this.appMinimize.minimize();
        this.navCtrl.parent.select(0);
    };
    LocalizarClubePokerclubsPage.prototype.getCidades = function (evento) {
        var _this = this;
        var textoCidade = evento.target.value;
        var dataParam = { search: textoCidade };
        this.listaCidadesCount = 0;
        this.cidadeSelected = [0, '', '', ''];
        if (textoCidade.trim().length >= 3) {
            this.clientrest.getCidades(dataParam).then(function (data) {
                if (data["result"] == "N") {
                    _this.CriaAlerta("Cidades", data["message"]);
                    _this.exibirListaCidades = false;
                }
                else {
                    _this.cidades = data["items"];
                    _this.listaCidadesCount = _this.cidades.length;
                    _this.cidadeSelected = [_this.cidades[0].id, _this.cidades[0].text, _this.cidades[0].lat, _this.cidades[0].lng];
                    _this.exibirListaCidades = true;
                }
            });
        }
    };
    LocalizarClubePokerclubsPage.prototype.selecionaCidade = function (codigoCidadeSelecionada, nomeCidadeSelecionada, latCidadeSelecionada, lngCidadeSelecionada) {
        this.searchCidades = nomeCidadeSelecionada;
        this.globalvars.setcodigoCidadeAtual(codigoCidadeSelecionada, nomeCidadeSelecionada, latCidadeSelecionada, lngCidadeSelecionada);
        this.exibirListaCidades = false;
        this.localizarClubesCidade();
    };
    LocalizarClubePokerclubsPage.prototype.escondeListaCidades = function () {
        this.listaCidadesCount = 0;
        this.cidadeSelected = [0, '', '', ''];
        this.globalvars.setcodigoCidadeAtual(0, "", "", "");
        this.exibirListaCidades = false;
        this.globalvars.setlocalizandoClubes(false);
    };
    LocalizarClubePokerclubsPage.prototype.localizarClubesCidade = function () {
        var _this = this;
        var cidadeSelectedArray = this.globalvars.getcodigoCidadeAtual();
        var dataParam = {
            'city_id': cidadeSelectedArray[0],
            'user_id': this.globalvars.getidUsuario()
        };
        if (cidadeSelectedArray[0] !== 0) {
            this.clientrest.getClubsCidades(dataParam).then(function (data) {
                if (data["result"] == "S") {
                    var clubesCidades = data["items"];
                    if (clubesCidades.length > 0) {
                        _this.globalvars.settipoPesquisaClubes("C"); // Tipo de Pesquisa do Clube C= Cidade N= Nome
                        _this.globalvars.setlocalizandoClubes(true);
                        _this.navCtrl.parent.select(0);
                    }
                    else {
                        _this.CriaAlerta("Localizar Clubes", "Não foi localizado nenhum clube na cidade desejada.");
                    }
                }
                else {
                    _this.CriaAlerta("Localizar Clubes", data["message"]);
                }
            });
        }
        else if (this.cidadeSelected[0] !== 0) {
            if (this.listaCidadesCount == 1) {
                this.selecionaCidade(this.cidadeSelected[0], this.cidadeSelected[1], this.cidadeSelected[2], this.cidadeSelected[3]);
                this.localizarClubesCidade();
            }
            else if (this.listaCidadesCount > 1) {
                this.CriaAlerta("Localizar Clubes", this.listaCidadesCount + " cidades localizadas, selecione na lista abaixo...");
            }
        }
        else {
            this.CriaAlerta("Localizar Clubes", "Entre com a Cidade que desejas localizar...");
        }
    };
    LocalizarClubePokerclubsPage.prototype.getClubsAutoComplete = function (evento) {
        var _this = this;
        var textoClube = evento.target.value;
        var dataParam = {
            search: textoClube,
            user_id: this.globalvars.getidUsuario()
        };
        this.listaClubesCount = 0;
        this.clubeSelected = [0, '', '', ''];
        if (textoClube.trim().length >= 3) {
            this.clientrest.getClubsAutoComplete(dataParam).then(function (data) {
                if (data["result"] == "N") {
                    _this.CriaAlerta("Clubes", data["message"]);
                    _this.exibirListaClubes = false;
                }
                else {
                    _this.clubes = data["items"];
                    _this.listaClubesCount = _this.clubes.length;
                    _this.clubeSelected = [_this.clubes[0].id, _this.clubes[0].name, _this.clubes[0].lat, _this.clubes[0].lng];
                    _this.exibirListaClubes = true;
                }
            });
        }
    };
    LocalizarClubePokerclubsPage.prototype.selecionaClube = function (codigoClubeSelecionado, nomeClubeSelecionado, latClubeSelecionado, lngClubeSelecionado) {
        this.searchClubes = nomeClubeSelecionado;
        this.globalvars.setcodigoClubeAtual(codigoClubeSelecionado, nomeClubeSelecionado, latClubeSelecionado, lngClubeSelecionado);
        this.exibirListaClubes = false;
        this.localizarClubesAutoComplete();
    };
    LocalizarClubePokerclubsPage.prototype.escondeListaClubes = function () {
        this.listaClubesCount = 0;
        this.clubeSelected = [0, '', '', ''];
        this.globalvars.setcodigoClubeAtual(0, "", "", "");
        this.exibirListaClubes = false;
        this.globalvars.setlocalizandoClubes(false);
    };
    LocalizarClubePokerclubsPage.prototype.localizarClubesAutoComplete = function () {
        var _this = this;
        var clubeSelectedArray = this.globalvars.getcodigoClubeAtual();
        var dataParam = {
            'club_id': clubeSelectedArray[0],
            'user_id': this.globalvars.getidUsuario()
        };
        if (clubeSelectedArray[0] !== 0) {
            this.clientrest.getoClub(dataParam).then(function (data) {
                if (data["result"] == "S") {
                    //let clubesAutoComplete = data;
                    //if (clubesAutoComplete.length > 0) {
                    _this.globalvars.settipoPesquisaClubes("N"); // Tipo de Pesquisa do Clube C= Cidade N= Nome
                    _this.globalvars.setlocalizandoClubes(true);
                    _this.navCtrl.parent.select(0);
                    /*} else {
                        this.CriaAlerta("Localizar Clubes", "Não foi localizado nenhum clube com nome informado.");
                    }*/
                }
                else {
                    _this.CriaAlerta("Localizar Clubes", data["message"]);
                }
            });
        }
        else if (this.clubeSelected[0] !== 0) {
            if (this.listaClubesCount == 1) {
                this.selecionaClube(this.clubeSelected[0], this.clubeSelected[1], this.clubeSelected[2], this.clubeSelected[3]);
                this.localizarClubesAutoComplete();
            }
            else if (this.listaClubesCount > 1) {
                this.CriaAlerta("Localizar Clubes", this.listaClubesCount + " clubes localizados, selecione na lista abaixo...");
            }
        }
        else {
            this.CriaAlerta("Localizar Clubes", "Entre com a Clube que desejas localizar...");
        }
    };
    // Funcao para criar alertas em todo o sistema
    LocalizarClubePokerclubsPage.prototype.CriaAlerta = function (titulo, subtitulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: subtitulo,
            enableBackdropDismiss: false,
            cssClass: 'alertaCustom-localizar',
            buttons: ['OK']
        });
        alert.present();
    };
    LocalizarClubePokerclubsPage.prototype.voltarInicio = function () {
        if (this.globalvars.getLocationInit()) {
            this.CriaAlerta('Atenção', 'Como seu GPS está desativado, é necessário localizar uma cidade ou clube para poder continuar.');
        }
        else {
            this.escondeListaCidades();
            this.escondeListaClubes();
            this.navCtrl.parent.select(0);
        }
    };
    LocalizarClubePokerclubsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-localizar-clube-pokerclubs',template:/*ion-inline-start:"C:\Roots\SAINTEC\pokerclubs\src\pages\localizar-clube-pokerclubs\localizar-clube-pokerclubs.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>PokerClubs - Localizar Clube</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="localizar">\n      <ion-segment-button value="localizar-cidade">\n        Cidade\n      </ion-segment-button>\n      <ion-segment-button value="localizar-clube">\n        Clube\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div [ngSwitch]="localizar">\n\n    <!-- Localizar Cidade -->\n    <ion-list *ngSwitchCase="\'localizar-cidade\'">\n        <ion-item class="localizar-list-itens">\n            <span>Digite o nome da cidade que deseja:</span>\n        </ion-item>\n        <ion-item class="localizar-list-itens">\n          <ion-searchbar placeholder="Digite a cidade" [showCancelButton]="true" [cancelButtonText]="Cancelar" [animated]="true" [debounce]="1000" [(ngModel)]="searchCidades" (ionInput)="getCidades($event)" (ionClear)="escondeListaCidades()"></ion-searchbar>\n          <ion-list *ngIf="exibirListaCidades">\n            <ion-item *ngFor="let cidade of cidades" (click)="selecionaCidade(cidade.id, cidade.text, cidade.lat, cidade.lng)">\n              {{ cidade.text }}\n            </ion-item>\n          </ion-list>\n        </ion-item>\n        <ion-item class="localizar-list-itens">\n            <button color="cinza" class="localizar-button-send" ion-button block (click)="localizarClubesCidade()">Localizar</button>\n            <button color="cinza" class="localizar-button-close" ion-button block (click)="voltarInicio()">Voltar</button>\n        </ion-item>      \n      </ion-list>\n    \n      <!-- Localizar Clube -->\n      <ion-list *ngSwitchCase="\'localizar-clube\'">\n        <ion-item class="localizar-list-itens">\n            <span>Digite o nome do clube que deseja:</span>\n        </ion-item>\n        <ion-searchbar placeholder="Digite o clube" [showCancelButton]="true" [cancelButtonText]="Cancelar" [animated]="true" [debounce]="1000" [(ngModel)]="searchClubes" (ionInput)="getClubsAutoComplete($event)" (ionClear)="escondeListaClubes()"></ion-searchbar>\n        <ion-list *ngIf="exibirListaClubes">\n          <ion-item *ngFor="let clube of clubes" (click)="selecionaClube(clube.id, clube.name, clube.lat, clube.lng)">\n            {{ clube.name }}\n          </ion-item>\n        </ion-list>\n        <ion-item class="localizar-list-itens">\n          <button color="cinza" class="localizar-button-send" ion-button block (click)="localizarClubesAutoComplete()">Localizar</button>\n          <button color="cinza" class="localizar-button-close" ion-button block (click)="voltarInicio()">Voltar</button>\n        </ion-item>      \n      </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Roots\SAINTEC\pokerclubs\src\pages\localizar-clube-pokerclubs\localizar-clube-pokerclubs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_clientrest_pokerclubs_clientrest_pokerclubs__["a" /* ClientrestPokerclubsProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */]])
    ], LocalizarClubePokerclubsPage);
    return LocalizarClubePokerclubsPage;
}());

//# sourceMappingURL=localizar-clube-pokerclubs.js.map

/***/ })

});
//# sourceMappingURL=20.js.map