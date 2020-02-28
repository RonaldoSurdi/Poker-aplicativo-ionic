import {ErrorHandler, NgModule} from '@angular/core';
import {IonicErrorHandler, IonicPageModule} from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import {PhotoViewer} from "@ionic-native/photo-viewer";
import {IonicImageViewerModule} from "ionic-img-viewer";
import { OclubepremiumPokerclubsPage } from './oclubepremium-pokerclubs';

@NgModule({
  declarations: [
      OclubepremiumPokerclubsPage,
  ],
  imports: [
      IonicImageViewerModule,
      IonicPageModule.forChild(OclubepremiumPokerclubsPage),
  ],
  providers: [
    CallNumber,
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class OclubepremiumPokerclubsPageModule {}
