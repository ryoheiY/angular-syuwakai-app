import {Injectable} from '@angular/core';
import {UserModel} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: UserModel[] = [];

  constructor() {
    this.getUsers();
  }

  get usersList() {
    return this.users;
  }

  getUsers(): void {
    this.users = [
      {id: 1, name: '山田太郎', nextRole: 'Speaker', point: 1},
      {id: 2, name: '山田太郎2', nextRole: 'Facilitator', point: 2},
    ];
  }
}
