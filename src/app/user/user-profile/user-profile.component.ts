import { Component, OnInit } from '@angular/core';
import { UserBaseService } from '../../shared/services/user-base.service';
import { Router } from '@angular/router';
import { StorageService } from '../../shared/services/storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
public pharmas: any;
public user: any;
  constructor(public userbaseService:UserBaseService,public router: Router,public storageService: StorageService) { }

  ngOnInit() {
 this.userbaseService.myList().subscribe((response)=>{
 this.pharmas = response.data;
 })
 this.userbaseService.getUserDetails().subscribe((response)=>{
  this.user = response.data[0];
  })
  }

  deleteFromList(data){
    this.userbaseService.deleteFromList(data._id).subscribe((response)=>{
      if(response.success){
        this.pharmas = response.data
      }else{
      }
     })
  }

}
