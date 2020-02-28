import {Injectable} from '@angular/core';
import {Loading, LoadingController} from 'ionic-angular';

@Injectable()
export class LoadingProvider {
    loading: Loading;
    constructor(public loadingCtrl: LoadingController) {
    }

    presentLoadingCircle1() {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: `
          <div class="custom-spinner-container">
            <img class="loading" width="100px" height="100px" src="assets/loading/loading-circle-1.gif" />
          </div>`
        });
        
        return this.loading.present();
    }

    presentLoadingCircle2() {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: `
          <div class="custom-spinner-container">
            <img class="loading" width="30px" height="30px" src="assets/loading/loading-circle-2.gif" />
          </div>`
        });

        return this.loading.present();
    }

    presentLoadingFicha1() {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: `
          <div class="custom-spinner-container">
            <img class="loading" width="200px" height="200px" src="assets/loading/loading-ficha-1.gif" />
          </div>`
        });

        return this.loading.present();
    }

    presentLoadingFicha2() {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: `
          <div class="custom-spinner-container">
            <img class="loading" width="30px" height="30px" src="assets/loading/loading-ficha-2.gif" />
          </div>`
        });

        return this.loading.present();
    }

    presentLoadingFicha3() {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: `
          <div class="custom-spinner-container">
            <img class="loading" width="90%" height="auto" src="assets/loading/loading-ficha-3.gif" />
          </div>`
        });

        return this.loading.present();
    }

    presentWithMessage(message) {
        this.loading = this.loadingCtrl.create({
            content: message
        });

        return this.loading.present();
    }

    dismiss() {
        return new Promise((resolve, reject) => {
            if (this.loading) {
                return this.loading.dismiss(resolve(true)).catch(error => {
                    //console.log('loading error: ', error);
                });
            } else {
                resolve(true);
            }
        });

    }
}