import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { GoogleMaps} from '@ionic-native/google-maps';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { OpenNativeSettings } from "@ionic-native/open-native-settings";
import { Tab1PokerclubsPage } from './tab1-pokerclubs';

@NgModule({
  declarations: [
    Tab1PokerclubsPage,
  ],
  imports: [
    IonicPageModule.forChild(Tab1PokerclubsPage),
  ],
  providers: [
    Diagnostic,
    OpenNativeSettings,
    GoogleMaps,
    LaunchNavigator,
  ]
})
export class Tab1PokerclubsPageModule {}
