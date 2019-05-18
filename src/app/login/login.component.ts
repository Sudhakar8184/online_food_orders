import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserBaseService } from '../shared/services/user-base.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public inputType: string = 'password';
  userForm: FormGroup;
  errorMessage : boolean = false
public userDetails: any = {
  email:'',
  password:''
} 
  constructor(public userbaseService:UserBaseService,public router: Router) { }

  ngOnInit() {
    this.formGroupBulid()
  }
  formGroupBulid(){
    let fg = {
     'email': new FormControl(null,[Validators.required,Validators.email]),
     'password': new FormControl(null,[Validators.required, Validators.minLength(5)]),
    }
    this.userForm = new FormGroup(fg);
  }

  onSubmit(){
    console.log(">>>>>?????",this.userDetails)
    this.errorMessage = false;
    this.userbaseService.login(this.userDetails).subscribe((response)=>{
     if(response.success){
       if(response.role === 'user')
      this.router.navigateByUrl('/user_home');
      else if(response.role === 'vendor')
      this.router.navigateByUrl('/vendor_home');
      else
      this.router.navigateByUrl('/admin_home');
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
