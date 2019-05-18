import { Component, OnInit } from '@angular/core';
import { UserBaseService } from '../../shared/services/user-base.service';
import { Post } from '../../shared/models/post';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { StorageService } from '../../shared/services/storage.service';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-vendor-home',
  templateUrl: './vendor-home.component.html',
  styleUrls: ['./vendor-home.component.css']
})

export class VendorHomeComponent implements OnInit {

  postDetails: any;
  postForm: FormGroup;
  public searchText;
 public searchData;
  public pharmas: any;
  constructor(public userbaseService: UserBaseService,public router: Router,public storageService :StorageService) {
   }

  ngOnInit() {
    this.userbaseService.getPosts().subscribe((response)=>{
      if(response.success){
       this.pharmas = response.data;
       this.searchData = this.pharmas;
      }else{
      }
     })
  }
  searchClicked(){
    if (this.searchText != undefined) {
      // this.searchpage = true;
      this.searchText = this.searchText.trim();
      this.searchData = this.pharmas.filter((el) => {
        return el.title.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1;
      });
    }
  }
 
  deleteFromVendorList(data){
    console.log(data)
    this.userbaseService.deleteFromVendorList(data._id).subscribe((response)=>{
      if(response.success){
        this.searchData = response.data
      }else{
      }
     })
  }
  checkorders(postid){
    this.router.navigateByUrl(`vendor_home/vendor_upload/vendor_post/${postid}`);
  }
}
