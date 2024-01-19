import { Component, OnInit } from '@angular/core';
import { EROUTER, RouterService } from '../../handle/router.service';
import { ISIGNUP } from '../../auth/type';
import { AuthService } from '../../handle/auth.service';
import { homeValues } from '../../store-app/home/HomeValues';
import { Store } from '@ngrx/store';
import { selectStateStoreApp } from '../../store-app/store/store-app.selector';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  mUser!: null | ISIGNUP;
  constructor(public sAuth: AuthService,
    public sRouter: RouterService, private store: Store<{ storeAppData: any }>) { }

  public data = { ...homeValues };

  ngOnInit(): void {
    this.data.fullname = selectStateStoreApp(this.store, "fullname");
    this.data.ci = selectStateStoreApp(this.store, "ci");
    this.data.email = selectStateStoreApp(this.store, "email");
    this.data.password = selectStateStoreApp(this.store, "password");
    this.data.remember = Boolean(selectStateStoreApp(this.store, "remember"));
  }

  public closeWindow() {
    this.sAuth._leave();
    this.sRouter._navigate(EROUTER.SIGNUP);
  }
}
