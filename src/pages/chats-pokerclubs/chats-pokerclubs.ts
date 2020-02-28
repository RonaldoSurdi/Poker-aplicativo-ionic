import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, List } from 'ionic-angular';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
import { AlertController, LoadingController, Platform, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { LoadingProvider } from '../../providers/loading/loading';

@IonicPage()
@Component({
    selector: 'page-chats-pokerclubs',
    templateUrl: 'chats-pokerclubs.html',
})
export class ChatsPokerclubsPage {

    @ViewChild(Content) contentArea: Content;
    @ViewChild(List, {read: ElementRef}) chatList: ElementRef;
    @ViewChild('myMessage') myMessage: ElementRef;

    private mutationObserver: MutationObserver;
    public unregisterBackButtonAction: any;

    data = { tipo:'', jogador:'', mensagem:'' };
    chats = [];

    nomeClube:string;
    nomeTorneio:string;
    keyTorneio:string;

    idJogador:string;
    nomeJogador:string;
    avatarJogador:any;
    nicknameJogador:string = '';

    toggled:boolean = false;
    toggledTimer:any;
    offStatus:boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, public globalvars: GlobalVarsProvider,
                public alertCtrl: AlertController, public loadingController: LoadingController,
                public platform: Platform, public toastController: ToastController,
                public angularFireDB: AngularFireDatabase, public loadingCtrl: LoadingProvider) {

        this.loadingCtrl.presentLoadingCircle1();

    }

    ionViewDidLoad() {
        this.mutationObserver = new MutationObserver((mutations) => {
            this.contentArea.scrollToBottom();
        });
        this.mutationObserver.observe(this.chatList.nativeElement, {
            childList: true
        });
        this.initializeBackButtonCustomHandler();
        this.idJogador = this.globalvars.getidUsuario();
        this.nomeJogador = this.globalvars.getnomeFacebook();
        this.avatarJogador = this.globalvars.getavatarFacebook();
        this.nicknameJogador = this.nomeJogador;
    }

    ionViewWillEnter() {
        this.initializeBackButtonCustomHandler();
    }

    ionViewDidEnter() {
        this.loadingCtrl.dismiss().then(() => {
            setTimeout(() => {
                this.loadingCtrl.presentLoadingFicha3();
                this.initializeChat();
            }, 500);
        });
    }

    ionViewWillLeave() {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    }

    initializeChat() {
        this.nomeClube = this.navParams.get("clube") as string;
        this.nomeTorneio = this.navParams.get("torneio") as string;
        this.keyTorneio = this.navParams.get("cod") as string;
        this.data.tipo = 'mensagem';
        this.data.jogador = this.nomeJogador;
        this.nomeTorneio = (this.nomeTorneio).toString() + ' - ' + (this.keyTorneio).toString();

        this.angularFireDB.database.ref('chatrooms/'+this.nomeClube+'/'+this.nomeTorneio).on('value', resp => {
            this.chats = [];
            this.chats = snapshotToArray(resp);
        });
        /*setTimeout(() => {
            const newData = this.angularFireDB.database.ref('chatrooms/'+this.nomeClube+'/'+this.nomeTorneio+'/').push();
            newData.set({
                cod:this.idJogador,
                jogador:this.nomeJogador,
                tipo:'entrou',
                mensagem:this.nomeJogador+' juntou-se a esta sala.',
                data:Date()
            });
        }, 1000);*/
        setTimeout(() => {
            this.data.mensagem = '';
            this.loadingCtrl.dismiss().then(() => {});
        }, 1000);
    }

    sendMensagem() {
        if (this.data.mensagem !== '') {
            let textWithLineBreaks = this.data.mensagem;
            textWithLineBreaks = textWithLineBreaks .replace(/\n/g, '<br \/>');
            const newData = this.angularFireDB.database.ref('chatrooms/'+this.nomeClube+'/'+this.nomeTorneio+'/').push();
            newData.set({
                cod:this.idJogador,
                jogador:this.data.jogador,
                tipo:this.data.tipo,
                mensagem:textWithLineBreaks,
                data:Date()
            });
            this.data.mensagem = '';
            setTimeout(() => {
                this.resize();
            }, 500);
        }
    }

    resize() {
        let element = this.myMessage['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        element.style.height = 'auto';
        this.myMessage['_elementRef'].nativeElement.style.height = 'auto';
    }

    public initializeBackButtonCustomHandler(): void {
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
            this.botaoVoltarAndroid();
        }, 101);
    }

    private botaoVoltarAndroid(): void {
        /*const exitData = this.angularFireDB.database.ref('chatrooms/'+this.nomeClube+'/'+this.nomeTorneio+'/').push();
        exitData.set({
            cod:this.idJogador,
            jogador:this.nomeJogador,
            tipo:'saiu',
            mensagem:this.nomeJogador+' saiu desta sala.',
            data:Date()
        });*/
        this.offStatus = true;
        this.navCtrl.pop();
    }

}

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};
//chat.tipo==='entrou'||chat.tipo==='saiu'
