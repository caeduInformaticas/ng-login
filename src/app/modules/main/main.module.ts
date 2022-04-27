import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from 'src/app/component/welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { EROUTER, _ROUTES_ } from 'src/app/handle/router.service';
import { SharedModule } from 'src/app/shared/shared/shared.module';
const rWelcome = _ROUTES_.find((_r) => _r.key === EROUTER.WELCOME);

const routes: Routes = [
  {
    path: rWelcome?.key,
    component: WelcomeComponent,
    data: {
      title: rWelcome?.title
    }
  },
  {
    path: '**',
    redirectTo: rWelcome?.path,
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
