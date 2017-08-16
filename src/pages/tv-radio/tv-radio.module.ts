import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TvRadioPage } from './tv-radio';
import { ExtraModule } from "../../extra/extra.module";

@NgModule({
  declarations: [
    TvRadioPage,
  ],
  imports: [
    IonicPageModule.forChild(TvRadioPage),
    ExtraModule
  ],
})
export class TvRadioPageModule { }
