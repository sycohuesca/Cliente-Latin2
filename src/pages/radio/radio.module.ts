import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RadioPage } from './radio';
import { ExtraModule } from "../../extra/extra.module";

@NgModule({
  declarations: [
    RadioPage,
  ],
  imports: [
    IonicPageModule.forChild(RadioPage),
    ExtraModule
  ],
})
export class RadioPageModule { }
