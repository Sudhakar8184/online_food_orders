import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';
import { UserBaseService } from '../shared/services/user-base.service';
import { ResponseOptions } from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public inputType: string = 'password';
  public userDetails;
  public userForm;
  public errorMessage : boolean = false
  constructor(public userbaseService: UserBaseService,public router: Router) {
    this.userDetails = User.create();
    this.formGroupBulid()
   }
   formGroupBulid(){
     let fg = {
      'fullName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,[Validators.required, Validators.minLength(5)]),
      'phone': new FormControl(null,[Validators.required, Validators.minLength(5)]),
      'role': new FormControl(null,[Validators.required]),
      'address': new FormControl(null,[Validators.required]),
     }
     this.userForm = new FormGroup(fg);
   }
  ngOnInit() {

  }
  onSubmit(){
    this.errorMessage = false;
    console.log(">>>>>?????",this.userDetails)
    this.userbaseService.signup(this.userDetails).subscribe((response)=>{
     if(response.success){
      this.router.navigateByUrl('/login');
     }else{
      this.errorMessage = true;
     }
    })
  }

  tooglepwd() {
    if (this.inputType === 'password') {
    this.inputType = 'text';
    } else if (this.inputType === 'text') {
    this.inputType = 'password';
    }
  }
}
