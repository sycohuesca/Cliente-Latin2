import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaPage } from './mapa';
import { ExtraModule } from "../../extra/extra.module";

@NgModule({
  declarations: [
    MapaPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaPage),
    ExtraModule
  ],
})
export class MapaPageModule { }
