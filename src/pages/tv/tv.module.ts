import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TvPage } from './tv';
import { ExtraModule } from "../../extra/extra.module";

@NgModule({
  declarations: [
    TvPage,
  ],
  imports: [
    IonicPageModule.forChild(TvPage),
    ExtraModule
  ],
})
export class TvPageModule { }
