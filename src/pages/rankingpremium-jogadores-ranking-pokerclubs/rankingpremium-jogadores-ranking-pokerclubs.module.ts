import {ErrorHandler, NgModule} from '@angular/core';
import {IonicErrorHandler, IonicPageModule} from 'ionic-angular';
import { RankingpremiumJogadoresRankingPokerclubsPage } from './rankingpremium-jogadores-ranking-pokerclubs';
import {IonicImageViewerModule} from "ionic-img-viewer";
import { PhotoViewer } from '@ionic-native/photo-viewer';

@NgModule({
  declarations: [
    RankingpremiumJogadoresRankingPokerclubsPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(RankingpremiumJogadoresRankingPokerclubsPage),
  ],
  providers: [
      PhotoViewer,
      {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class RankingpremiumJogadoresRankingPokerclubsPageModule {}
