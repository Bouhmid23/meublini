import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabPage } from '../pages/tab/tab';
import { AcceuilPage } from '../pages/acceuil/acceuil';
import { ProduitPage } from '../pages/produit/produit';
import { ReglagesPage } from '../pages/reglages/reglages';
import { SingleProduitPage } from '../pages/single-produit/single-produit';
import { ProduitService } from '../services/produit.services';
import { OptionsPage } from '../pages/options/options';
import { AjoutProduitPage } from '../pages/ajout-produit/ajout-produit';
import { AuthService } from '../services/AuthService';
import { AuthPage } from '../pages/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabPage,
    AcceuilPage,
    ProduitPage,
    ReglagesPage,
    SingleProduitPage,
    OptionsPage,
    AjoutProduitPage,
    AuthPage,
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabPage,
    AcceuilPage,
    ProduitPage,
    ReglagesPage,
    SingleProduitPage,
    OptionsPage,
    AjoutProduitPage,
    AuthPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProduitService,
    AuthService
    
  ]
})
export class AppModule {}
