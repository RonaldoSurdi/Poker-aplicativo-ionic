import { Platform, ActionSheetController, AlertController, Nav } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Network } from '@ionic-native/network';
import { ClientrestPokerclubsProvider } from "../providers/clientrest-pokerclubs/clientrest-pokerclubs";
import { GlobalVarsProvider } from '../providers/global-vars/global-vars';
import { Device } from '@ionic-native/device';
//import { timer } from 'rxjs/observable/timer';
//import { Keyboard } from '@ionic-native/keyboard';

@Component({
    templateUrl: 'app.html'
})
export class PokerClubs {

    @ViewChild (Nav) nav;

    //showSplash:boolean = true;
    rootPage: any = '';
    backPressed = false;
    tipoLogin: string = '';

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
        //public app: App,
        public actionSheetCtrl: ActionSheetController, private screenOrientation: ScreenOrientation,
        public alertCtrl: AlertController, private network: Network,
        private storage: Storage,
        private clientrest: ClientrestPokerclubsProvider,
        public globalvars: GlobalVarsProvider,
        private device: Device) { //public keyboard: Keyboard,
        //storage.clear().then(){}
            this.initializeApp();
    }

    initializeApp() {

        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
            //timer(4000).subscribe(() => this.showSplash = false);

            // Verifica quando a Rede foi desconectada
            let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
                const alert = this.alertCtrl.create({
                    title: 'PokerClubs',
                    message: 'A conexão de rede não foi encontrada ou foi desconectada.<br>' +
                        'Alguns recursos do PokerClubs poderão não funcionar corretamente.',
                    cssClass: 'alertaCustom',
                    enableBackdropDismiss: false,
                    buttons: [{
                        text: 'Continuar',
                        role: 'Continuar',
                        handler: () => {
                            disconnectSubscription.unsubscribe();
                        }
                    }, {
                        text: 'Sair do PokerClubs',
                        handler: () => {
                            disconnectSubscription.unsubscribe();
                            this.platform.exitApp();
                        }
                    }]
                });
                alert.present();
            });

            this.configuraNotificacoes(this);

            if (this.globalvars.getunicDevieID()==='') {
                this.globalvars.setunicDevieID(this.device.uuid);
            }

            //this.rootPage = 'MenuPokerclubsPage';
            //this.rootPage = 'LoginPokerclubsPage';
            this.globalvars.settipoPesquisaClubes("R");
            //this.globalvars.setidDeviceOneSignal('');
            //this.globalvars.settokenDeviceOneSignal('');


            //let erroconectUser:any = true;

            this.storage.get('pokerClubs_tipoLogin').then((tipoLogin) => {
                this.tipoLogin = tipoLogin;
                //if (this.tipoLogin !== null) {
                    if (this.tipoLogin === "A") {
                        // Ultimo Login feito pelo APP
                        this.logarAPP().then(data => {
                            if (data) {
                                // Se validou o usuario no servidor entao armazena na storage o email e o tipo de login (APP)
                                //this.storage.set('pokerClubs_tipoLogin', 'A');
                                //this.globalvars.setidUsuario(this.dadosUserAPP["user_id"]);
                                //this.globalvars.setidUsuarioFacebook("");
                                //this.globalvars.settipoPesquisaClubes("R"); // Tipo de Pesquisa do Clube R= Raio C= Cidade N= Nome
                                if (parseInt(this.globalvars.getidUsuario()) === 1) {
                                    this.rootPage = 'LoginPokerclubsPage';
                                } else {
                                    this.rootPage = 'MenuPokerclubsPage';
                                }
                            }
                            else {
                                this.rootPage = 'LoginPokerclubsPage';
                            }
                        });
                    } else if (this.tipoLogin === "F") {
                        // Ultimo Login feito pelo FaceBook
                        this.logarFacebook().then(data => {
                            if (data) {
                                // Se validou o usuario no servidor entao armazena na storage o email e o tipo de login (APP)
                                //this.storage.set('pokerClubs_emailUsuario', this.dadosUserFacebook['email']);
                                //this.storage.set('pokerClubs_tipoLogin', 'F');
                                //this.globalvars.setidUsuarioFacebook(this.dadosUserFacebook["id"]);
                                //this.globalvars.settipoPesquisaClubes("R"); // Tipo de Pesquisa do Clube R= Raio C= Cidade N= Nome
                                if (parseInt(this.globalvars.getidUsuario()) === 1) {
                                    this.rootPage = 'LoginPokerclubsPage';
                                } else {
                                    this.rootPage = 'MenuPokerclubsPage';
                                }
                            }
                        });
                    } else {
                        this.logarAnonymous().then(data => {
                            if (data) {
                                this.rootPage = 'MenuPokerclubsPage';
                            }
                            else {
                                this.rootPage = 'LoginPokerclubsPage';
                            }
                        });
                    }
                //} else {
                    // Se for nulo é porque é o primeiro acesso ao APP nesse dispositivo
                    //this.rootPage = 'LoginPokerclubsPage';
                //}
            });



            //let configNot =
            //erroconectUser = this.gettipoLogin();
       /*     this.storage.get('pokerClubs_tipoLogin').then((tipoLogn) => {
                this.tipoLogin = tipoLogn;
                console.log('tipolog:'+tipoLogn);
                console.log('tipolog:'+this.tipoLogin);
            });
            console.log('login>>>>>> '+this.tipoLogin);
            this.configuraNotificacoes(this);*/

/*            if (erroconectUser) {
                if ((this.tipoLogin === "A")) { //||(this.tipoLogin == "O")) {
                    erroconectUser = this.logarAPP();
                    console.log('cad>>>>>> '+erroconectUser);
                } else if (this.tipoLogin === "F") {
                    erroconectUser = this.logarFacebook();
                    console.log('face>>>>>> '+erroconectUser);
                }
            }
            console.log('login>>>>>> '+this.tipoLogin);
            if ((this.tipoLogin==="")||(this.tipoLogin==="N")) {
                //let saveNew:boolean = true;
                /*if (configNot) {
                    if (this.tipoLogin=="") {
                        if (this.logarAPPonesignal(1)) saveNew=false;
                    }
                    if (saveNew) erroconectUser = this.saveNewRegister(1);
                } else if (this.globalvars.getunicDevieID()!=='') {
                    if (this.tipoLogin=="") {
                        if (this.logarAPPonesignal(2)) saveNew=false;
                    }
                    if (saveNew) erroconectUser = this.saveNewRegister(2);
                } else {*/
                    //erroconectUser = this.logarAnonymous();
                //}
            //}

            /*if (!erroconectUser) {
                this.globalvars.setidUsuario(1);
                this.globalvars.setidUsuarioFacebook("");
                this.globalvars.setnomeFacebook("Sem Cadastro");
                this.globalvars.setavatarFacebook("assets/imgs/user.png");
                this.globalvars.setidDeviceOneSignal('');
                this.globalvars.settokenDeviceOneSignal('');
            }*/

            this.platform.resume.subscribe((e) => {
                if (this.globalvars.getrecebeuNotificacao()) {
                    this.globalvars.setabriuAPPPelaNotificacao(false);
                    this.globalvars.setrecebeuNotificacao(false);
                    this.nav.push('VisualizaNotificacaoPokerclubsPage');                    
                }
            });
                        
        });
    }

    configuraNotificacoes(objectThis) {
        let returnfc:boolean = false;
        console.log('notifyddd');
        // Quando a notificacao foi recebida
        let notificationReceivedCallback = function(jsonData) {
            objectThis.globalvars.setrecebeuNotificacao(true);  
            let idMensagemOneSignal = jsonData["payload"]["notificationID"];
            let idMensagem          = jsonData["payload"]["additionalData"]["msg_id"];
            objectThis.globalvars.setidMensagemOneSignalAtual(idMensagemOneSignal);                    
            objectThis.globalvars.setidMensagemAtual(idMensagem);            
        };
        // Quando a notificacao foi aberta
        let notificationOpenedCallback = function(jsonData) {
            objectThis.globalvars.setabriuAPPPelaNotificacao(true);
            let idMensagem          = jsonData["notification"]["payload"]["additionalData"]["msg_id"];
            let idMensagemOneSignal = jsonData["notification"]["payload"]["notificationID"];
            objectThis.globalvars.setidMensagemOneSignalAtual(idMensagemOneSignal);
            objectThis.globalvars.setidMensagemAtual(idMensagem);                  
        };
        window["plugins"].OneSignal
        //.startInit("f8fec6cb-d5bc-4ce1-ab77-9c49b62a6b58", "MWE4Y2Q1YzEtYmZjNC00OWIxLWE5NmMtYzA3N2M1MTFmMzll")
        //.startInit("b52187cd-1b28-456f-b316-87f4cc82d101", "MWFmYzNlNzEtYWQ1NS00YWFkLWI5ZmEtNjMyZDRmOWM3ZWQ4")
        //.startInit("f8fec6cb-d5bc-4ce1-ab77-9c49b62a6b58", "MWE4Y2Q1YzEtYmZjNC00OWIxLWE5NmMtYzA3N2M1MTFmMzll")
        .startInit("48ab8249-e50d-42a6-b46f-ecf31e023419", "ZjhhNjQ2YjItNDMwOS00ZDAwLTljMTAtZWI0M2JkMTk1MGY5")
        .handleNotificationOpened(notificationOpenedCallback)
        .handleNotificationReceived(notificationReceivedCallback)
        .endInit();
        window["plugins"].OneSignal.getIds(function (ids) {
            console.log('getids - '+ids.userId);
            console.log('gettok - '+ids.pushToken);
            objectThis.globalvars.setidDeviceOneSignal(ids.userId);
            objectThis.globalvars.settokenDeviceOneSignal(ids.pushToken);
            returnfc = true;
        });
        if (objectThis.globalvars.getidDeviceOneSignal() !== '') returnfc = true;
        return returnfc;
    }

    /*gettipoLogin() {
        this.tipoLogin = '';
        return new Promise((resolve, reject) => {
        this.storage.get('pokerClubs_tipoLogin').then((tipoLogn) => {
            this.tipoLogin = tipoLogn;
            console.log('tipolog:'+tipoLogn);
            console.log('tipolog:'+this.tipoLogin);
            resolve(true);
        });
        });
    }*/

    saveNewRegister(type) {
        let returnfc:boolean = false;
        let newNome = 'Jogador-';
        let newEmail = "";
        let newSenha = "";
        if (type === 1) {
            newNome += this.globalvars.getidDeviceOneSignal();
            newEmail = this.globalvars.getidDeviceOneSignal();
            newSenha = this.globalvars.gettokenDeviceOneSignal();
        } else {
            newNome += this.globalvars.getunicDevieID();
            newEmail = this.globalvars.getunicDevieID();
            newSenha = this.globalvars.getunicDevieID()+'#';
        }
        let dataParam    = {
            'email' : newEmail,
            'senha': newSenha,
            'nome': newNome,
            'apelido': newNome,
            'telefone': '',
            "one_signal": this.globalvars.getidDeviceOneSignal(),
            "one_signal_token": this.globalvars.gettokenDeviceOneSignal(),
            "unic_id": this.globalvars.getunicDevieID()
        };
        this.clientrest.saveRegister(dataParam).then(data => {
            if (data["result"] == "S") {
                this.globalvars.setidUsuario(data["user_id"]);
                this.globalvars.setidUsuarioFacebook("");
                this.globalvars.setnomeFacebook(newNome);
                this.globalvars.setavatarFacebook("assets/imgs/user.png");
                this.storage.set('pokerClubs_tipoLogin', 'O');
                this.storage.set('pokerClubs_emailUsuario', newEmail);
                this.storage.set('pokerClubs_apelidoUsuario', newNome);
                this.storage.set('pokerClubs_senhaUsuario', newSenha);
                this.storage.set('pokerClubs_nomeUsuario', newNome);
                returnfc = true;
            }
        });
        return returnfc;
    }

    logarAnonymous() {
        return new Promise((resolve, reject) => {
            let dataParam    = {
                'email': 'contato@pokerclubsapp.com.br',
                'senha': '',
                'one_signal': '',
                "one_signal_token": ''
            };
            this.clientrest.validUser(dataParam).then(data => {
                if (data["result"] == "S") {
                    this.globalvars.setidUsuario(data["user_id"]);
                    this.globalvars.setidUsuarioFacebook("");
                    this.globalvars.setnomeFacebook(data["nome"]);
                    this.globalvars.setavatarFacebook("assets/imgs/user.png");
                    resolve(true);
                }
            }).catch(error => {
                reject(false);
            });
        });
    }

    logarAPPonesignal(type) {
        return new Promise((resolve, reject) => {
            let newEmail = '';
            let newSenha = '';
            if (type === 1) {
                newEmail = this.globalvars.getidDeviceOneSignal();
                newSenha = this.globalvars.gettokenDeviceOneSignal();
            } else {
                newEmail = this.globalvars.getunicDevieID();
                newSenha = this.globalvars.getunicDevieID()+'#';
            }
            let dataParam    = {
                'email' : newEmail,
                'senha': newSenha,
                'one_signal': this.globalvars.getidDeviceOneSignal() ,
                "one_signal_token": this.globalvars.gettokenDeviceOneSignal(),
                "unic_id": this.globalvars.getunicDevieID()
            };

            this.clientrest.validUser(dataParam).then(data => {
                if (data["result"] == "S") {
                    this.globalvars.setidUsuario(data["user_id"]);
                    this.globalvars.setidUsuarioFacebook("");
                    this.globalvars.setnomeFacebook(data["nome"]);
                    if ((data["avatar"] === "")||(data["avatar"] === "null")||(data["avatar"] === "undefined")) {
                        this.globalvars.setavatarFacebook("assets/imgs/user.png");
                    } else {
                        this.globalvars.setavatarFacebook(data["avatar"]);
                    }
                    resolve(true);
                }
            }).catch(error => {
                reject(false);
            });
        });
    }

    logarAPP() {
        return new Promise((resolve, reject) => {
            this.storage.get('pokerClubs_emailUsuario').then((emailUsuario) => {
                this.storage.get('pokerClubs_senhaUsuario').then((senhaUsuario) => {
                    let dataParam = {
                        'email': emailUsuario,
                        'senha': senhaUsuario,
                        'one_signal': this.globalvars.getidDeviceOneSignal() ,
                        "one_signal_token": this.globalvars.gettokenDeviceOneSignal(),
                        "unic_id": this.globalvars.getunicDevieID()
                    };

                    this.clientrest.validUser(dataParam).then(data => {
                        if (data["result"] == "S") {
                            this.globalvars.setidUsuario(data["user_id"]);
                            this.globalvars.setidUsuarioFacebook("");
                            this.globalvars.setnomeFacebook(data["nome"]);
                            if ((data["avatar"] === "")||(data["avatar"] === "null")||(data["avatar"] === "undefined")) {
                                this.globalvars.setavatarFacebook("assets/imgs/user.png");
                            } else {
                                this.globalvars.setavatarFacebook(data["avatar"]);
                            }
                            resolve(true);
                        }
                    });
                });
            }).catch(error => {
                reject(false);
            });
        });
    }
   
    
    logarFacebook() {
        return new Promise((resolve, reject) => {
            this.storage.get('pokerClubs_faceidUsuario').then((faceidUsuario) => {
                this.storage.get('pokerClubs_emailUsuario').then((emailface) => {
                    this.storage.get('pokerClubs_nomeUsuario').then((nomeface) => {
                        this.storage.get('pokerClubs_avatarUsuario').then((avatarface) => {
                            if ((avatarface === "")||(avatarface === "null")||(avatarface === "undefined")) {
                                avatarface = "assets/imgs/user.png";
                            }
                            let dataParam = {
                                "face_id": faceidUsuario,
                                "nome": nomeface,
                                "email": emailface,
                                "one_signal": this.globalvars.getidDeviceOneSignal(),
                                "one_signal_token": this.globalvars.gettokenDeviceOneSignal(),
                                "unic_id": this.globalvars.getunicDevieID()
                            };
                            this.clientrest.loginFacebook(dataParam).then(data => {
                                if (data["result"] == "S") {
                                    this.globalvars.setidUsuario(data["user_id"]);
                                    this.globalvars.setidUsuarioFacebook(faceidUsuario);
                                    this.globalvars.setnomeFacebook(nomeface);
                                    this.globalvars.setavatarFacebook(avatarface);
                                    resolve(true);
                                } else {
                                    this.CriaAlerta("Login", data["message"]);
                                    resolve(false);
                                }
                            });
                        });
                    });
                });

            }).catch(error => {
                reject(false);
            });
        });
    }

    // Funcao para criar alertas em todo o sistema
    CriaAlerta(titulo, subtitulo)
    {
      let alert = this.alertCtrl.create({
        title: titulo,
        subTitle: subtitulo,
        cssClass: 'alertaCustom',
        enableBackdropDismiss: false,
        buttons: ['OK']
      });
      alert.present();
    }

}
