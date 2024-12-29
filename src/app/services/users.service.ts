import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly usersKey = 'users';
  users: User[] = [];

  constructor() {
    const cache = localStorage.getItem(this.usersKey);
    console.log('cache:', cache);
    if (cache) {
      const userCache:User[]|undefined = JSON.parse(cache);
      console.log('parsed cache:', userCache);
      if (userCache)
        this.users = userCache;
    }
  }

  addUsers(emails: string[]) {
    this.users.push(...emails.map(e => ({
      email: e,
      maxSkips: 5,
      remainingSkips: 0
    })));
    this.setStorage();
  }

  // eventually this will migrate to
  // a generic storage serice
  private setStorage = () =>
    localStorage.setItem(
      this.usersKey,
      JSON.stringify(this.users)
    );
}
