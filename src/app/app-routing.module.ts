import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EROUTER } from './handle/router.service';

const routes: Routes = [
  {
    path: EROUTER.AUTH,
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: EROUTER.DASHBOARD,
    loadChildren: () =>
      import('./modules/main/main.module').then((m) => m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
