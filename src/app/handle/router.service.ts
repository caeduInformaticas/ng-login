import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { EERROR, _MAP_MESSAGES } from './messages';

export enum EROUTER {
  AUTH = 'auth',
  DASHBOARD = 'dashboard',
  SIGNUP = 'signup',
  WELCOME = 'welcome',
}

export const _ROUTES_ = [
  {
    key: EROUTER.SIGNUP,
    title: 'Register',
    path: `${EROUTER.AUTH}/${EROUTER.SIGNUP}`,
  },
  {
    key: EROUTER.WELCOME,
    title: 'Hi Friend',
    path: `${EROUTER.DASHBOARD}/${EROUTER.WELCOME}`,
  },
];
@Injectable({
  providedIn: 'root',
})
export class RouterService {
  title = 'Full Stack Dev';
  constructor(
    public router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute
  ) {}
  _initialize() {
    this.setTitle();
  }
  private setTitle() {
    const appTitle = this.titleService.getTitle();
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child: any = this.activatedRoute.firstChild;
          while (child.firstChild) {
            child = child.firstChild;
          }
          if (child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          }
          return appTitle;
        })
      )
      .subscribe((ttl: string) => {
        this.titleService.setTitle(`${ttl} | Dev`);
      });
  }
  _navigate(key: EROUTER) {
    try {
      const route = _ROUTES_.find((_r) => _r.key === key);
      if (route) {
        this.router.navigate([route.path]);
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
