import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { GlobalVarsProvider  } from '../../providers/global-vars/global-vars';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import * as $ from "jquery";

@IonicPage()
@Component({
  selector: 'page-bannermap-pokerclubs',
  templateUrl: 'bannermap-pokerclubs.html',
})
export class BannermapPokerclubsPage {


  constructor(private view: ViewController, public globalvars: GlobalVarsProvider, 
              public photoViewer: PhotoViewer) {

  }

  ionViewDidEnter()
  {    
    let objThis = this;
    $("#botaoFechar").click(function(event){
      event.stopPropagation();
      objThis.view.dismiss();
    });
    document.getElementById("contentBanner").style.backgroundImage = "url('" + this.globalvars.getlinkBannerPromocao() + "')";
  }

  showZoomBanner() {
    this.photoViewer.show(this.globalvars.getlinkBannerPromocao(), "Anúncio", {share: true});
  }
}
