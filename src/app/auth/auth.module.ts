import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      title: 'Registrarse'
    }
  },
  /* 
  {
    path: 'reset',
    component: SigniUpomponent,
  }, 
  {
    path: 'signin',
    component: Signinomponent,
  }, 
  */
  {
    path: '**',
    redirectTo: 'auth/signup',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
