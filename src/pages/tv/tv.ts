import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the TvPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tv',
  templateUrl: 'tv.html',
})
export class TvPage {
  tv: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tv = this.navParams.get('tv');
  }

  ionViewDidLoad() {

  }

}
