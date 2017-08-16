import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComercioPage } from './comercio';
import { ExtraModule } from '../../extra/extra.module';

@NgModule({
  declarations: [
    ComercioPage,
  ],
  imports: [
    IonicPageModule.forChild(ComercioPage),
    ExtraModule
  ],
})
export class ComercioPageModule { }
