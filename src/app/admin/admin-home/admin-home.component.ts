import { Component, OnInit } from '@angular/core';
import { UserBaseService } from '../../shared/services/user-base.service';
import { Post } from '../../shared/models/post';
import { AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { StorageService } from '../../shared/services/storage.service';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  postDetails: any;
  postForm: FormGroup;
  public searchText;
 public searchData;
  public pharmas: any;
  constructor(public userbaseService: UserBaseService,public router: Router, public storageService: StorageService) {
   }

  ngOnInit() {
    this.userbaseService.getPostAll().subscribe((response)=>{
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

  checkorders(postid){
    this.router.navigateByUrl(`admin_home/admin_post/${postid}`);
  }
  deleteFromAdminList(data){
    console.log(data)
    this.userbaseService.deleteFromAdminList(data._id).subscribe((response)=>{
      if(response.success){
        this.searchData = response.data
      }else{
      }
     })
  }
}
