import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the ComercioDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comercio-detail',
  templateUrl: 'comercio-detail.html',
})
export class ComercioDetailPage {
  comercio: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {
    this.comercio = this.navParams.get('comercio');
  }

  llamar(numero: string) {
    this.callNumber.callNumber(numero, false)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

}
