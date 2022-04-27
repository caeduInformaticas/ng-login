import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared/shared.module';
import { EROUTER, _ROUTES_ } from '../handle/router.service';

const rSignUp = _ROUTES_.find((_r) => _r.key === EROUTER.SIGNUP);
const routes: Routes = [
  {
    path: EROUTER.SIGNUP,
    component: SignupComponent,
    data: {
      title: rSignUp?.title
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
    redirectTo: rSignUp?.path,
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
