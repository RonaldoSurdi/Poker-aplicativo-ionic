import {ErrorHandler, NgModule} from '@angular/core';
import {IonicErrorHandler, IonicPageModule} from 'ionic-angular';
import { IonicImageViewerModule } from "ionic-img-viewer";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { SocialSharing } from "@ionic-native/social-sharing";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { TorneiospremiumPokerclubsPage } from './torneiospremium-pokerclubs';

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
    TorneiospremiumPokerclubsPage,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicImageViewerModule,
    IonicPageModule.forChild(TorneiospremiumPokerclubsPage),
  ],
  providers: [
    PhotoViewer,
    SocialSharing,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class TorneiospremiumPokerclubsPageModule {}
