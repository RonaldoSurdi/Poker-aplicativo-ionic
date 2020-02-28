import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ErrorHandler, NgModule } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { LoadingProvider } from '../providers/loading/loading';

import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import { Network } from '@ionic-native/network';

import { IonicStorageModule } from '@ionic/storage';
import { Facebook } from '@ionic-native/facebook';
import { BrowserTab } from '@ionic-native/browser-tab';
import { BrowserModule } from '@angular/platform-browser';
import { Device } from '@ionic-native/device';
import { OneSignal } from "@ionic-native/onesignal"

import { GlobalVarsProvider  } from '../providers/global-vars/global-vars';
import { ClientrestPokerclubsProvider } from '../providers/clientrest-pokerclubs/clientrest-pokerclubs';
import { PokerClubs } from './app.component';

import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

import { AppMinimize } from '@ionic-native/app-minimize';
import { Keyboard } from '@ionic-native/keyboard';

@NgModule({
  declarations: [
    PokerClubs
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(PokerClubs, {
        tabsHideOnSubPages: 'true',
        swipeBackEnabled: 'true',
        preloadModules: 'false'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PokerClubs
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ClientrestPokerclubsProvider,
    ScreenOrientation,
    AppMinimize,
    Keyboard,
    Facebook, 
    GlobalVarsProvider,
    Network,
    HTTP,
    BrowserTab,
    LoadingProvider,
    Device,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}