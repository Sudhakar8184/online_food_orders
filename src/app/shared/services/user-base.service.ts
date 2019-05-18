import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ApiServiceService } from './api.service';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { StorageService } from './storage.service';
import { Post } from '../models/post';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserBaseService extends ApiServiceService {

  constructor(public http: Http, public storageService: StorageService) {
    super();
   }

  signup(data :any): Observable<any>{
    console.log(">?>?>?>",environment);
    
    return this.http.post( environment.root +'signup',data,this.post()).map((res)=>{
      // console.log(res)
      return res.json()
    }).catch((error)=>{
      return new ErrorObservable(error.error);
    })
  }

  login(data :any): Observable<any>{
    return this.http.post(environment.root +'login',data,this.post()).map((res)=>{
      console.log(res)
      this.setSession(res)
      return res.json()
    }).catch((error)=>{
      return new ErrorObservable(error.error);
    })
  }
  postDetails(data :any): Observable<any>{
    console.log('sesssion data',this.storageService.getSessionData())
    console.log('main data',data)
    return this.http.post(environment.root +'postDetail',{
      data: data,
      vendor_id:this.storageService.getSessionData().id
    },this.post()).map((res)=>{
      return res.json()
    }).catch((error)=>{
      return new ErrorObservable(error.error);
    })
  }
  getPostDetails(postId): Observable<any>{
    console.log('sesssion data',this.storageService.getSessionData())
    return this.http.get(environment.root +'getpostDetail',{
      params:{
      post_id:postId
      }
    }).map((res)=>{
      return res.json()
    }).catch((error)=>{
      return new ErrorObservable(error.error);
    })
  }
  getPosts(): Observable<any>{
    console.log('sesssion data',this.storageService.getSessionData())
    return this.http.get(environment.root +'getposts',{
      params:{
      vendor_id:this.storageService.getSessionData().id
      }
    }).map((res)=>{
      return res.json()
    }).catch((error)=>{
      return new ErrorObservable(error.error);
    })
  }

  getPostAll(): Observable<any>{
    return this.http.get(environment.root +'getpostAll').map((res)=>{
      return res.json()
    }).catch((error)=>{
      return new ErrorObservable(error.error);
    })
  }
  getPostCatagory(data): Observable<any>{
    return this.http.get(environment.root +'getPostCatagorys',{
     params:{ 
       catagory: data
      }
    }).map((res)=>{
      return res.json()
    }).catch((error)=>{
      return new ErrorObservable(error.error);
    })
  }
  addToList(data): Observable<any>{
    console.log('sesssion data',this.storageService.getSessionData(),data)
    return this.http.post(environment.root +'addtoList',{
        user_id: this.storageService.getSessionData().id,
        pharma_id:data
    },this.post()).map((res)=>{
      console.log(res);
      return res.json()
    }).catch((error)=>{
      return new ErrorObservable(error.error);
    })
  }

  deleteFromList(data): Observable<any>{
    console.log('sesssion data',this.storageService.getSessionData(),data)
    return this.http.post(environment.root +'deletefromList',{
        user_id: this.storageService.getSessionData().id,
        pharma_id:data
    },this.post()).map((res)=>{
      console.log(res);
      return res.json()
    }).catch((error)=>{
      return new ErrorObservable(error.error);
    })
  }

  deleteFromVendorList(data): Observable<any>{
    console.log('sesssion data',this.storageService.getSessionData(),data)
    return this.http.post(environment.root +'deleteFromVendorlist',{
        user_id: this.storageService.getSessionData().id,
        pharma_id:data
    },this.post()).map((res)=>{
      console.log(res);
      return res.json()
    }).catch((error)=>{
      return new ErrorObservable(error.error);
    })
  }

  deleteFromAdminList(data): Observable<any>{
    console.log('sesssion data',this.storageService.getSessionData(),data)
    return this.http.post(environment.root +'deleteFromAdminList',{
        pharma_id:data
    },this.post()).map((res)=>{
      console.log(res);
      return res.json()
    }).catch((error)=>{
      return new ErrorObservable(error.error);
    })
  }

  myList(): Observable<any>{
    return this.http.get(environment.root +'myList',{
      params:{
      id:this.storageService.getSessionData().id
      }
    }).map((res)=>{
      console.log(res)
      return res.json()
    }).catch((error)=>{
      return new ErrorObservable(error.error);
    })
  }

  getUserDetails(): Observable<any>{
    return this.http.get(environment.root +'getUserDetails',{
      params:{
      id:this.storageService.getSessionData().id
      }
    }).map((res)=>{
      console.log(res)
      return res.json()
    }).catch((error)=>{
      return new ErrorObservable(error.error);
    })
  }

  private setSession(data) {
    let main = JSON.parse(data._body)
    if(main){
      window.localStorage['role']= main.role;
    window.localStorage['u_id']= main._id;
    window.localStorage['token']= main.token;
    }
    console.log('sesssion data',this.storageService.getSessionData())
  }

}
