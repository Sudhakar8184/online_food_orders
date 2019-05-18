import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../../shared/models/post';
import { UserBaseService } from '../../shared/services/user-base.service';
import { StorageService } from '../../shared/services/storage.service';
declare var filestack: any
@Component({
  selector: "app-vendor-post",
  templateUrl: "./vendor-post.component.html",
  styleUrls: ["./vendor-post.component.css"]
})
export class VendorPostComponent implements OnInit {
  public postDetails: any;
  public postForm: any;
  public imageCheck: boolean= false
  public imageComplete;
  public submitToComplete:boolean = true
  objectKeys = Object.keys;
  public catagorys: object={
  pizza:'Pizza',
  drinks: 'Drinks',
  burgers:'Burgers',
  fast_foods:'Fast Foods',
  south_indian_tiffin:'South Indian Tiffins',
  south_indian_thali:'South Indian Thalis',
  north_indian_tiffin:'North Indian Tiffins',
  north_indian_thali:'North Indian Thalis',
  }
  constructor(public userbaseService: UserBaseService, public router: Router, public storageService: StorageService) {
    this.postDetails = Post.create();
    this.formGroupBulid();
  }
  formGroupBulid() {
    let fg = {
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      catagory : new FormControl(null, [Validators.required]),
      location : new FormControl(null, [Validators.required]),
    };
    this.postForm = new FormGroup(fg);
  }

  ngOnInit() {}
  onSubmit() {
    console.log(">>>>>?????", this.postDetails);
    this.userbaseService.postDetails(this.postDetails).subscribe(response => {
      if (response.success) {
        this.router.navigateByUrl("/vendor_home");
      } else {
      }
    });
  }
  uploadImage(event) {
    const apikey = "AXllisoFHRwOdUeS2a2J3z";
    const client = filestack.init(apikey);
    const files = event.target.files;
    console.log("acdas", files[0].type);
    this.imageCheck = false;
    if (files[0].type.indexOf("image") >= 0) {
      this.imageComplete = true;
      const file = files.item(0);
      const token = {};
      client.upload(file, {}, token)
        .then(res => {
          this.submitToComplete = false
          this.imageComplete = false
          this.postDetails.image = res.url
          console.log("success: ", res);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.submitToComplete = true;
      this.imageCheck = true;
    }
  }
}
