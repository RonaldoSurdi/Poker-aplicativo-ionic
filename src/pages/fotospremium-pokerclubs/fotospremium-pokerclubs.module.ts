import {ErrorHandler, NgModule} from '@angular/core';
import {IonicErrorHandler, IonicPageModule} from 'ionic-angular';
import {PhotoViewer} from "@ionic-native/photo-viewer";
import {IonicImageViewerModule} from "ionic-img-viewer";
import { FotospremiumPokerclubsPage } from './fotospremium-pokerclubs';

@NgModule({
  declarations: [
    FotospremiumPokerclubsPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(FotospremiumPokerclubsPage),
  ],
  providers: [
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class FotospremiumPokerclubsPageModule {}
