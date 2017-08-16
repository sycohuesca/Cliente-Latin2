import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import {
  Push,
  PushToken
} from '@ionic/cloud-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public push: Push, public alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.registerToken();
      this.getNotifications();

      this.showAlert();
    });


  }


  showAlert() {
    let res: boolean = true;
    let alert = this.alertCtrl.create({
      title: 'Recordatoriao',
      subTitle: 'Bienvendio a nuetsra aplicacion!',

      buttons: ['OK']
    });
    alert.addInput({
      type: 'checkbox',
      label: 'No volver a ver este mensaje',
      value: 'si',
      checked: res
    });
    alert.present();
  }

  private registerToken() {
    this.push.register().then((t: PushToken) => {
      return this.push.saveToken(t, {
        ignore_user: true
      });
    }).then((t: PushToken) => {
      console.log('Token saved:', t.token);
    });
  }

  private getNotifications() {
    this.push.rx.notification()
      .subscribe((msg) => {
        this.alertCtrl.create({
          title: msg.title,
          subTitle: msg.text,
        }).present();
        // alert(msg.title + ': ' + msg.text);
      });
  }


}
