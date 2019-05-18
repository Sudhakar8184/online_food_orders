import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  private jwtHelper;

  constructor() {
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
      return true;
  }

}