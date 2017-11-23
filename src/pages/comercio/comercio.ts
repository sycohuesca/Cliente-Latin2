import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the ComerciosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-comercio',
  templateUrl: 'comercio.html',
})
export class ComercioPage {
  categoria: any;
  ciudad: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categoria = this.navParams.get('categoria');
  }



  itemSelected(comercio: any): void {
    this.navCtrl.push('ComercioDetailPage', { comercio: comercio });
  }

}
