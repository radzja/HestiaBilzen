import { Injectable } from '@angular/core';
import { User } from './user';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(userInfo: User) {
    if (userInfo.email === 'hermans.stephen@gmail.com' && userInfo.password === '123456789') {
      localStorage.setItem('ACCESS_TOKEN', 'access_token');
      return true;
    } else if (userInfo.email === 'frank.martens10@gmail.com' && userInfo.password === '123456789') {
      localStorage.setItem('ACCESS_TOKEN', 'access_token');
      return true;
    } else {
      console.log('Authentication failed for ' + userInfo.email);
      this.logout();
    }
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
