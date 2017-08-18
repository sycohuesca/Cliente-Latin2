import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComercioDetailPage } from './comercio-detail';
import { ExtraModule } from "../../extra/extra.module";


@NgModule({
  declarations: [
    ComercioDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ComercioDetailPage),
    ExtraModule
  ],
})
export class ComercioDetailPageModule { }
