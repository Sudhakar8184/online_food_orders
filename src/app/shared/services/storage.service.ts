import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable()
export class StorageService {
  constructor( public router: Router) {}
   getSessionData(): any {
    return {
      role: window.localStorage['role'],
      token: window.localStorage['token'],
      id:window.localStorage['u_id']
    }
   }

   logout(){
    window.localStorage['role'] = ''
    window.localStorage['token']=''
    window.localStorage['u_id'] = ''
    this.router.navigate(['login']);
   }
}
