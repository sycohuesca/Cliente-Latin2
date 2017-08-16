import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ServiceProvider) {
    this.pet = 'tv';
    this.service.getVideos().then(datos => {
      this.videos = datos;
    })
      .catch(() => alert('No hay conexion de internet.'));
    this.service.getRadios().then(datos => {
      this.radios = datos;
    })

  }

  ionViewDidLoad() {


  }

}
