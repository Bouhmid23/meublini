import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase'
import { TabPage } from '../pages/tab/tab';
import { OptionsPage } from '../pages/options/options';
import { ProduitPage } from '../pages/produit/produit';
import { initializeApp } from 'firebase';
import { AuthPage } from '../pages/auth/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

    isAuth:boolean;
    authPage:any=AuthPage;
    tabPage:any = TabPage;
    optionsPage:any = OptionsPage;
    produitPage:any=ProduitPage;
    @ViewChild('content') content: NavController;

    constructor(platform: Platform,statusBar: StatusBar,splashScreen: SplashScreen,private menuCtrl: MenuController  ) {
      platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      let firebaseConfig = {
        apiKey: "AIzaSyAJ_Lx5lj5Odj2xiPGDrRNGueHaYJ1b3OI",
        authDomain: "meublini-ab5fe.firebaseapp.com",
        databaseURL: "https://meublini-ab5fe-default-rtdb.firebaseio.com",
        projectId: "meublini-ab5fe",
        storageBucket: "meublini-ab5fe.appspot.com",
        messagingSenderId: "252690910290",
        appId: "1:252690910290:web:76868de6c1c20d544be38b",
        measurementId: "G-0095BZBCJZ"
      };
      firebase.initializeApp(firebaseConfig);
      
      firebase.auth().onAuthStateChanged((user)=>
        {
          if(user){
            this.isAuth=true;
            this.content.setRoot(TabPage);}
          else{
            this.isAuth=false;
            this.content.setRoot(AuthPage,{mode:'connect'});
          }
        }
      )
    });
    
    }
    onNavigate(page: any, data?:{}) {
       this.content.setRoot(page, data ? data : null);
       this.menuCtrl.close();

    }

    onDisconnect() {
      firebase.auth().signOut();
      this.menuCtrl.close();
      }
    }


