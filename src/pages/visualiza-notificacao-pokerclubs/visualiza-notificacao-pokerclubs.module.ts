import {ErrorHandler, NgModule} from '@angular/core';
import {IonicErrorHandler, IonicPageModule} from 'ionic-angular';
import {PhotoViewer} from "@ionic-native/photo-viewer";
import {IonicImageViewerModule} from "ionic-img-viewer";
import { VisualizaNotificacaoPokerclubsPage } from './visualiza-notificacao-pokerclubs';

@NgModule({
  declarations: [
    VisualizaNotificacaoPokerclubsPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(VisualizaNotificacaoPokerclubsPage),
  ],
  providers: [
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class VisualizaNotificacaoPokerclubsPageModule {}
