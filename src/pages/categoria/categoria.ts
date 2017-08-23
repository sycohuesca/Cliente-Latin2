import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the CategoriasListaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})


export class CategoriaPage {
  items: any;
  loader: any;

  constructor(public navCtrl: NavController, private service: ServiceProvider,
    private loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    this.navCtrl.push('InicioPage');
    this.presentLoading();
  }

  ionViewWillEnter() {
    this.service.getCategorias().then(datos => {
      this.items = datos;
      this.loader.dismiss();
    })
      .catch(() => alert('No hay conexion.'))
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Cargando Categorias..."
    });
    this.loader.present();
  }

  itemSelected(categoria: any) {
    this.navCtrl.push('ComercioPage', { categoria: categoria });
  }

}
