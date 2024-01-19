import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from 'src/app/home/welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { EROUTER, _ROUTES_ } from 'src/app/handle/router.service';
import { ModalLoadingComponent } from '../modals/modal-loading/modal-loading.component';
import { ModalPageComponent } from '../modals/modal-page/modal-page.component';
import { ModalMessageComponent } from '../modals/modal-message/modal-message.component';
const rHome = _ROUTES_.find((_r: any) => _r.key === EROUTER.WELCOME_PAGE);

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
  declarations: [WelcomeComponent, ModalLoadingComponent, ModalPageComponent, ModalMessageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
