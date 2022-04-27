import { Component, OnInit } from '@angular/core';
import { ISIGNUP } from 'src/app/auth/type';
import { AuthService } from 'src/app/handle/auth.service';
import { EROUTER, RouterService } from 'src/app/handle/router.service';
import { IDATALOGO } from 'src/app/shared/logo/logo.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  mUser!: null | ISIGNUP;
  constructor(public sAuth: AuthService,
    public sRouter: RouterService) { }

  ngOnInit(): void {
    this.mUser = this.sAuth._getUser();
  }
  private _callbackLogo = () => {
    window.open('https://github.com/caeduInformaticas/ng-login', '_blank');
  };

  iDataLogo: IDATALOGO = {
    alt: 'Logo',
    src: 'https://seeklogo.com/images/E/education-book-sun-logo-B0AC2622BD-seeklogo.com.png',
    width: 40,
    callback: this._callbackLogo
  };
  _close() {
    this.sAuth._leave();
    this.sRouter._navigate(EROUTER.SIGNUP);
  }

}
