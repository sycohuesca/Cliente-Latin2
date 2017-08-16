import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { Push } from '@ionic-native/push';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { CategoriaPageModule } from '../pages/categoria/categoria.module'
import { ComercioPageModule } from "../pages/comercio/comercio.module";
import { ComercioDetailPageModule } from "../pages/comercio-detail/comercio-detail.module";
import { ContactoPageModule } from "../pages/contacto/contacto.module";
import { MapaPageModule } from "../pages/mapa/mapa.module";
import { TvRadioPageModule } from "../pages/tv-radio/tv-radio.module";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceProvider } from '../providers/service';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    TabsPageModule,
    CategoriaPageModule,
    ComercioPageModule,
    ComercioDetailPageModule,
    ContactoPageModule,
    MapaPageModule,
    TvRadioPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServiceProvider,
    Push
  ]
})
export class AppModule { }
