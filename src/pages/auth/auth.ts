import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/AuthService';
import { TabPage } from '../tab/tab';



@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage implements OnInit {

  mode:string;
  authForm:FormGroup;
  errorMessage:string;

  constructor(public menuCtrl: MenuController,
     private navParams: NavParams ,
      private authService:AuthService,
      private formBuilder:FormBuilder,
      private navCtrl:NavController,
      ) {
  }
  ngOnInit(): void {
      this.mode=this.navParams.get('mode');
      this.initForm();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }
  initForm(){
    this.authForm=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['',Validators.required]
    });
  }

  onSubmitForm() {
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;
    if (this.mode === 'new') {
      this.authService.signUpUser(email, password).then(
        ()=>{
          this.navCtrl.setRoot(TabPage);
        },
        (error) => {
          this.errorMessage = error;
        });
    } else if (this.mode === 'connect') {
      this.authService.signInUser(email, password).then(
        () => {
          this.navCtrl.setRoot(TabPage);
        },
        (error) => {
          this.errorMessage = error;
        });
    }
    }

}
