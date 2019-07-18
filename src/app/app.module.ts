import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { routerConfig } from './app.route-config';
import { UserBaseService } from './shared/services/user-base.service';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminPostComponent } from './admin/admin-post/admin-post.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { StorageService } from './shared/services/storage.service';
import { VendorPostDetailsComponent } from './vendors/vendor-post-details/vendor-post-details.component';
import { VendorHomeComponent } from './vendors/vendor-home/vendor-home.component';
import { VendorPostComponent } from './vendors/vendor-post/vendor-post.component';
import { NotifierModule} from 'angular-notifier';
import { AuthGuardService } from './shared/auth/auth-guard.service';
import { AuthService } from './shared/auth/auth.service';
import { RoleGuardService } from './shared/auth/role-guard.service';
import {APP_BASE_HREF} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminPostComponent,
    UserHomeComponent,
    UserProfileComponent,
    VendorPostDetailsComponent,
    VendorHomeComponent,
    VendorPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routerConfig),
    NotifierModule
    

  ],
  providers: [UserBaseService,StorageService, AuthGuardService,AuthService,RoleGuardService,{provide: APP_BASE_HREF, useValue : '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
