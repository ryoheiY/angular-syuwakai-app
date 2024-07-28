import {Component, inject, OnInit} from '@angular/core';
import {UserModel} from "./user/user.model";
import {UserService} from "./user/user.service";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users : UserModel[] = [];
  private userService: UserService = inject(UserService);

  ngOnInit() {
    this.users = this.userService.usersList;
  }
}
