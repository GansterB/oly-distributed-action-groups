import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];

  constructor() { }

  addUsers = (emails: string[]) =>
    this.users.push(...emails.map(e => ({
      email: e,
      maxSkips: 5,
      remainingSkips: 0
    })));
}
