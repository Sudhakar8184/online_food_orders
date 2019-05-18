import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserBaseService } from '../../shared/services/user-base.service';
import { Post } from '../../shared/models/post';
import { StorageService } from '../../shared/services/storage.service';
@Component({
  selector: 'app-vendor-post-details',
  templateUrl: './vendor-post-details.component.html',
  styleUrls: ['./vendor-post-details.component.css']
})
export class VendorPostDetailsComponent implements OnInit {

  pharma: any;
  constructor(private route: ActivatedRoute,
    public userbaseservice: UserBaseService,
  public storageService: StorageService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const post_id = params.get('post_id');
      this.userbaseservice.getPostDetails(post_id).subscribe((response)=>{
      this.pharma = response.data
      console.log(this.pharma)
      })
    })
  }

}
