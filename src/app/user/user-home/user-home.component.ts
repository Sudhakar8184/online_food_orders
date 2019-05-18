import { Component, OnInit } from '@angular/core';
import { UserBaseService } from '../../shared/services/user-base.service';
import { Post } from '../../shared/models/post';
import { StorageService } from '../../shared/services/storage.service';
import { NotifierService } from 'angular-notifier';
declare var $;
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
 public searchText;
 public searchData;
  public pharmas: any;
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
  constructor(public userbaseService: UserBaseService,public storageService: StorageService,public notifierService: NotifierService) {
   }

  ngOnInit() {
    this.getAllPosts()
  }

  getAllPosts(){
    this.userbaseService.getPostAll().subscribe((response)=>{
      if(response.success){
       this.pharmas = response.data;
       this.searchData = this.pharmas;
      }else{
      }
     })
  }
  addToList(data){
    // $(`#myModal`).modal('toggle');
    this.userbaseService.addToList(data._id).subscribe((response)=>{
      if(response.success){
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

  catagorysData(data){
    console.log(">>>>?????",data)
    if(data != 'all'){
    this.userbaseService.getPostCatagory(data).subscribe((response)=>{
      if(response.success){
        this.pharmas = response.data;
        this.searchData = this.pharmas;
      }else{
      }
     })
    }else{
      this.getAllPosts()
    }
  }
 
}
