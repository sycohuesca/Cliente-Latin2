import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { BuscarPipe } from './buscar'
import { ObjectPipe } from './object'
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [MenuComponent, BuscarPipe, ObjectPipe],
	imports: [IonicModule],
	exports: [MenuComponent, BuscarPipe, ObjectPipe]
})
export class ExtraModule { }
