import {ErrorHandler, NgModule} from '@angular/core';
import {IonicErrorHandler, IonicPageModule} from 'ionic-angular';
import { RelativeTime } from "../../providers/pipes/relative-time";
import { Autosize } from "../../providers/components/autosize";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { ChatsPokerclubsPage } from './chats-pokerclubs';
//import { FileTransferObject } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';
//import { AngularFireStorageModule } from '@angular/fire/storage';
//import { AngularFireAuthModule } from '@angular/fire/auth'
//AngularFireAuthModule,

export const firebaseConfig = {
    apiKey: "AIzaSyCu-GdAWOloRPGNQwCIDx4HjRk3MiDrki8",
    authDomain: "pokerclubs-217904.firebaseapp.com",
    databaseURL: "https://pokerclubs-217904.firebaseio.com",
    projectId: "pokerclubs-217904",
    storageBucket: "pokerclubs-217904.appspot.com",
    messagingSenderId: "992326147401"
};

@NgModule({
    declarations: [
        ChatsPokerclubsPage,
        RelativeTime,
        Autosize,
    ],
    imports: [
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        //AngularFireStorageModule,
        IonicPageModule.forChild(ChatsPokerclubsPage),
    ],
    providers: [
        //FileTransferObject,
        //File,
        AngularFireDatabase,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})

export class ChatsPokerclubsPageModule {}