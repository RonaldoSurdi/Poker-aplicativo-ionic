import {ErrorHandler, NgModule} from '@angular/core';
import {IonicErrorHandler, IonicPageModule} from 'ionic-angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { PromocoespremiumPokerclubsPage } from './promocoespremium-pokerclubs';

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
    PromocoespremiumPokerclubsPage,
  ],
  imports: [
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule,
      IonicPageModule.forChild(PromocoespremiumPokerclubsPage),
  ],
    providers: [
        AngularFireDatabase,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class PromocoespremiumPokerclubsPageModule {}
