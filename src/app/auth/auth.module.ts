import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared/shared.module';

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
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
