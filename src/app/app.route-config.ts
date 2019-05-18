import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminPostComponent } from './admin/admin-post/admin-post.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { VendorPostDetailsComponent } from './vendors/vendor-post-details/vendor-post-details.component';
import { VendorHomeComponent } from './vendors/vendor-home/vendor-home.component';
import { VendorPostComponent } from './vendors/vendor-post/vendor-post.component';
import {  AuthGuardService as AuthGuard } from './shared/auth/auth-guard.service';
import {  RoleGuardService as RoleGuard  } from './shared/auth/role-guard.service';
export const routerConfig: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'signup',
        component: SignupComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'admin_home',
        component: AdminHomeComponent,
        canActivate: [RoleGuard],
        data: { 
            expectedRole: 'admin'
          }
    },
    {
        path:'user_home',
        component: UserHomeComponent,
        canActivate: [RoleGuard],
        data: { 
            expectedRole: 'user'
          }
    },
    {
        path:'user_home/user_profile',
        component: UserProfileComponent,
        canActivate: [RoleGuard],
        data: { 
            expectedRole: 'user'
          }
    },
     {
        path:'vendor_home',
        component: VendorHomeComponent,
        canActivate: [RoleGuard],
        data: { 
            expectedRole: 'vendor'
          }
    },
    {
        path:'vendor_home/vendor_upload',
        component: VendorPostComponent,
        canActivate: [RoleGuard],
        data: { 
            expectedRole: 'vendor'
          }
    },
    {
        path:'vendor_home/vendor_upload/vendor_post/:post_id',
        component: VendorPostDetailsComponent,
        canActivate: [RoleGuard],
        data: { 
            expectedRole: 'vendor'
          }
    },
    {
        path:'admin_home/admin_post/:post_id',
        component: VendorPostDetailsComponent,
        canActivate: [RoleGuard],
        data: { 
            expectedRole: 'admin'
          }
    },
];
