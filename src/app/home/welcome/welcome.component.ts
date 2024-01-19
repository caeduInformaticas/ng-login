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
  styleUrls: []
})
export class WelcomeComponent implements OnInit {
  private mUser!: null | ISIGNUP;
  constructor(public sAuth: AuthService,
    public sRouter: RouterService, private store: Store<{ storeAppData: any }>) {
    this._loading = true;
    this._info = false;
  }

  private _data = { ...homeValues };
  public get data() {
    return this._data;
  }
  public set data(value) {
    this._data = value;
  }

  private _loading: boolean;
  public get loading(): boolean {
    return this._loading;
  }
  public set loading(value: boolean) {
    this._loading = value;
  }

  private _info: boolean;
  public get info(): boolean {
    return this._info;
  }
  public set info(value: boolean) {
    this._info = value;
  }

  public changeInfoFalse() {
    this._info = false;
  }

  public changeInfoTrue() {
    this._info = true;
    setTimeout(() => {
      this._info = false;
    }, 3000);
  }

  private getOut() {
    this.sAuth._leave();
    this.sRouter._navigate(EROUTER.SIGNUP);
  }

  public get getInfoUser() {
    return `fullname: ${this.data.fullname}\n
    ci: ${this.data.ci}\n
    email: ${this.data.email}\n
    password: ${this.data.password}\n
    remember: ${this.data.remember}\n`;
  }



  ngOnInit(): void {
    this.mUser = this.sAuth._getUser();
    if (!this.mUser) {
      this.getOut();
    }

    this._data.fullname = selectStateStoreApp(this.store, "fullname") || "user name";
    this._data.ci = selectStateStoreApp(this.store, "ci") || "1234567";
    this._data.email = selectStateStoreApp(this.store, "email") || "email@gmail.com";
    this._data.password = selectStateStoreApp(this.store, "password") || "admin123$";
    this._data.remember = selectStateStoreApp(this.store, "remember") || "true";

    setTimeout(() => {
      this._loading = false;
    }, 1000);
  }

  public closeWindow() {
    this.getOut();
  }
}
