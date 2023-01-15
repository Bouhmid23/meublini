import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicPage, LoadingController, MenuController, ModalController, NavController, ToastController } from 'ionic-angular';
import { SingleProduitPage } from '../single-produit/single-produit';
import { Produit } from '../../models/produit';
import { ProduitService } from '../../services/produit.services';
import { Subscription } from 'rxjs';
import { AjoutProduitPage } from '../ajout-produit/ajout-produit';


@IonicPage()
@Component({
  selector: 'page-produit',
  templateUrl: 'produit.html',
})


export class ProduitPage implements OnInit,OnDestroy {
  produitList : Produit[];
  produitsSubscription:Subscription;


  constructor(private modalCtrl: ModalController,
    private produitsService:ProduitService,
    private menuCtrl:MenuController,
    private navCtrl:NavController,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController) {}

    ngOnInit(): void {
        this.produitsSubscription=this.produitsService.produits$.subscribe(
          (produits:Produit[])=>{
            this.produitList=produits.slice();
          }
        );
        this.produitsService.emettreProduit();
        this.onFetchList();
    }

  ionViewWillEnter(){
   this.produitList=this.produitsService.produitsList.slice();
  }
  onLoadProduit(index:number) {
  let modal = this.modalCtrl.create(SingleProduitPage, {index: index});
  modal.present();
  }
  onToggleMenu(){
    this.menuCtrl.open();

  }

  onNewProduit(){
    this.navCtrl.push(AjoutProduitPage);
  }

  onSaveList() {
    let loader = this.loadingCtrl.create({
      content: 'Sauvegarde en cours...'
    });
    loader.present();
    this.produitsService.saveData().then(
    () => {
      loader.dismiss();
      this.toastCtrl.create({
        message: 'Données sauvegardées !',
        duration: 3000,
        position: 'bottom'
      }).present();
    },
    (error) => {
    loader.dismiss();
    this.toastCtrl.create({
      message: error,
      duration: 3000,
      position: 'bottom'
    }).present();
    }
    );
    }
    onFetchList() {
      let loader = this.loadingCtrl.create({
      content: 'Récuperation en cours...'
      });
      loader.present();
      this.produitsService.retrieveData().then(
      () => {
      loader.dismiss();
      this.toastCtrl.create({
      message: 'Données récupérées !',
      duration: 3000,
      position: 'bottom'
      }).present();
      },
      (error) => {
      loader.dismiss();
      this.toastCtrl.create({
      message: error,
      duration: 3000,
      position: 'bottom'
      }).present();
      }
      );
      }
  ngOnDestroy(): void {
      this.produitsSubscription.unsubscribe();
  }
}
