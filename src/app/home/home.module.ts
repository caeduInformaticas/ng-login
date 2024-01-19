import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from 'src/app/home/welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { EROUTER, _ROUTES_ } from 'src/app/handle/router.service';
const rHome = _ROUTES_.find((_r) => _r.key === EROUTER.WELCOME_PAGE);

const routes: Routes = [
  {
    path: rHome?.key,
    component: WelcomeComponent,
    data: {
      title: rHome?.title
    }
  },
  {
    path: '**',
    redirectTo: rHome?.path,
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
