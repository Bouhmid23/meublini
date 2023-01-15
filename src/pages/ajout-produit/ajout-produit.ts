import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';
import { Produit } from '../../models/produit';
import { ProduitService } from '../../services/produit.services';



@IonicPage()
@Component({
  selector: 'page-ajout-produit',
  templateUrl: 'ajout-produit.html',
})

export class AjoutProduitPage implements OnInit {

  produitForm:FormGroup;

  constructor(private formBuilder:FormBuilder, public navCtrl:NavController, public service:ProduitService) {
  }
  ngOnInit(): void {
    this.initForm();    
  }



    initForm() {
    this.produitForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: this.formBuilder.array([])
    });
    }

    getDescriptionArray() {
      return this.produitForm.get('description') as FormArray;
      }
      onAddDescription() {
        let newControl = this.formBuilder.control('');
        this.getDescriptionArray().controls.push(newControl);
        }

        onRemoveDescription(index: number) {
          this.getDescriptionArray().removeAt(index);
          } 

          onSubmitForm() {
            let newProduit = new Produit(this.produitForm.get('name').value, [], "");       
            for (let control of this.getDescriptionArray().controls) {
              console.log(control.value)
            newProduit.description.push(control.value);
            }
            console.log(newProduit);
            this.service.addAppareil(newProduit);
            this.navCtrl.pop();
            }    

  }

  


