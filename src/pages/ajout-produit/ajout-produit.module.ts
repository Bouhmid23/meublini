import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutProduitPage } from './ajout-produit';

@NgModule({
  declarations: [
    AjoutProduitPage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutProduitPage),
  ],
})
export class AjoutProduitPageModule {}



