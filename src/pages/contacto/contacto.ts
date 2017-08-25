import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the ContactoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {
  }

  ionViewDidLoad() {

  }
  llamar() {
    this.callNumber.callNumber('633868137', false)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

}
