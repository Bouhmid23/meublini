import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcceuilPage } from '../acceuil/acceuil';
import { AjoutProduitPage } from '../ajout-produit/ajout-produit';
import { ProduitPage } from '../produit/produit';
import { ReglagesPage } from '../reglages/reglages';


@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {

  produitPage=ProduitPage;
  acceuilPage=AcceuilPage;
  reglagePage=ReglagesPage;
  ajoutPage=AjoutProduitPage;
  }


