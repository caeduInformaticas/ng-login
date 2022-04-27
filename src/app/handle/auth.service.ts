import { Injectable } from '@angular/core';
import { ISIGNUP } from '../auth/type';
import { EERROR, _MAP_MESSAGES } from './messages';

export enum ESTORAGE {
  USER = 'user'
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  _getUser(): null | ISIGNUP {
    try {
      let user: any = localStorage.getItem(ESTORAGE.USER);
      if (user) {
        user = JSON.parse(user);
      }
      return user;
    } catch (error) {
      throw new Error('Error key Storage');
    }
  }
  _storageUser(user: ISIGNUP): void {
    try {
      localStorage.setItem(ESTORAGE.USER, JSON.stringify(user));
    } catch (error) {
      if (_MAP_MESSAGES.has(EERROR.E1)) {
        const gMessage = _MAP_MESSAGES.get(EERROR.E1);
        throw new Error(gMessage?.callback(gMessage.error()));
      } else {
        throw new Error('Type Error not exist');
      }
    }
  }
  _leave() {
    localStorage.clear();
  }
}
