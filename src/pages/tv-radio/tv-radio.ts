import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the TvRadioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tv-radio',
  templateUrl: 'tv-radio.html',
})
export class TvRadioPage {
  videos: any;
  radios: any;
  pet: string;
  loader: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private service: ServiceProvider, private loadingCtrl: LoadingController) {
    this.pet = 'tv';

  }

  ionViewDidLoad() {
    this.presentLoading();

  }
  ionViewWillEnter() {
    this.service.getVideos().then(datos => {
      this.videos = datos;
      this.loader.dismiss();
    })
      .catch(() => alert('No hay conexion de internet.'));
    this.service.getRadios().then(datos => {
      this.radios = datos;
    })

  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Cargando canales..."
    });
    this.loader.present();
  }
  verRadio(radio: any) {
    this.navCtrl.push('RadioPage', { radio: radio });
  }

  verTv(tv: any) {
    this.navCtrl.push('TvPage', { tv: tv });
  }
}
