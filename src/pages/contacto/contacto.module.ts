import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactoPage } from './contacto';
import { ExtraModule } from "../../extra/extra.module";

@NgModule({
  declarations: [
    ContactoPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactoPage),
    ExtraModule
  ],
})
export class ContactoPageModule { }
