import {ErrorHandler, NgModule} from '@angular/core';
import {IonicErrorHandler, IonicPageModule} from 'ionic-angular';
import {IonicImageViewerModule} from "ionic-img-viewer";
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { BannermapPokerclubsPage } from './bannermap-pokerclubs';

@NgModule({
  declarations: [
    BannermapPokerclubsPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(BannermapPokerclubsPage),
  ],
  providers: [
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class BannermapPokerclubsPageModule {}