import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Produit } from '../../models/produit';
import { ProduitService } from '../../services/produit.services';
@Component({
  selector: 'page-single-prdouit',
  templateUrl: 'single-produit.html',
})
export class SingleProduitPage implements OnInit {


  index:number;
  produit:Produit;


  constructor(public navParams: NavParams,
             public viewCtrl: ViewController,
             public produitService:ProduitService) {
  }
  ngOnInit() {
  this.index = this.navParams.get('index');
  this.produit=this.produitService.produitsList[this.index]
  }


  dismissModal() {
  this.viewCtrl.dismiss();
  }
  
  }