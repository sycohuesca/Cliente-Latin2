import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { BuscarPipe } from './buscar';
import { LugarPipe } from "./lugar";
import { ObjectPipe } from './object';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [MenuComponent, BuscarPipe, ObjectPipe, LugarPipe],
	imports: [IonicModule],
	exports: [MenuComponent, BuscarPipe, ObjectPipe, LugarPipe]
})
export class ExtraModule { }
