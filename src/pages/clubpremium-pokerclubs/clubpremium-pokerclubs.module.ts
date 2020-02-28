import { ErrorHandler, NgModule } from '@angular/core';
import { IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { LaunchNavigator} from "@ionic-native/launch-navigator";
import { IonicImageViewerModule } from "ionic-img-viewer";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { ClubpremiumPokerclubsPage } from './clubpremium-pokerclubs';

@NgModule({
  declarations: [
    ClubpremiumPokerclubsPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(ClubpremiumPokerclubsPage),
  ],
  providers: [
    LaunchNavigator,
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class ClubpremiumPokerclubsPageModule {}
