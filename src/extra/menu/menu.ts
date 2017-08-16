import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {
  @Input() titulo: string;


  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public menuCon: MenuController) {
    console.log('Hello MenuComponent Component');

  }

  menu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Latin2',
      buttons: [
        {
          text: 'Mapa',
          icon: 'map',
          handler: () => {
            this.navCtrl.push('MapaPage');
          }
        },
        {
          text: 'Compartir',
          icon: 'share',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Acerca de...',
          icon: 'create',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Cerrar aplicacion',
          role: 'cancel',
          icon: 'exit',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


}
