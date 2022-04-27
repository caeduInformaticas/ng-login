import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { AuthService } from './handle/auth.service';
import { EROUTER, RouterService } from './handle/router.service';
import { EERROR, _MAP_MESSAGES } from './handle/messages';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private sRouter: RouterService, private sStorage: AuthService) {
    this.sRouter._initialize();
    this.verifySession();
  }
  private verifySession() {
    try {
      if (this.sStorage._getUser()) {
        this.sRouter._navigate(EROUTER.WELCOME);
      } else {
        this.sRouter._navigate(EROUTER.SIGNUP);
      }
    } catch (error) {
      if (_MAP_MESSAGES.has(EERROR.E1)) {
        const gMessage = _MAP_MESSAGES.get(EERROR.E1);
        throw new Error(gMessage?.callback(gMessage.error()));
      } else {
        throw new Error('Type Error not exist');
      }
    }
  }
}
