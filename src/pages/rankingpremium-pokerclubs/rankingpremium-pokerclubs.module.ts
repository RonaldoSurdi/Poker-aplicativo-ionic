import {ErrorHandler, NgModule} from '@angular/core';
import {IonicErrorHandler, IonicPageModule} from 'ionic-angular';
import {PhotoViewer} from "@ionic-native/photo-viewer";
import {IonicImageViewerModule} from "ionic-img-viewer";
import { RankingpremiumPokerclubsPage } from './rankingpremium-pokerclubs';

@NgModule({
  declarations: [
    RankingpremiumPokerclubsPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(RankingpremiumPokerclubsPage),
  ],
  providers: [
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class RankingpremiumPokerclubsPageModule {}
