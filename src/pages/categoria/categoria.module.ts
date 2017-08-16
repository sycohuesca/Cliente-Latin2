import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriaPage } from './categoria';
import { ExtraModule } from '../../extra/extra.module';

@NgModule({
  declarations: [
    CategoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriaPage),
    ExtraModule
  ],
})
export class CategoriaPageModule { }
