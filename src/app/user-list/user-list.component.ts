import {Component, signal, } from '@angular/core';
import {UsersComponent} from "./users/users.component";
import {ModalComponent} from "../main/ui/modal/modal.component";
import {EventModalComponent} from "./event-modal/event-modal.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    UsersComponent,
    ModalComponent,
    EventModalComponent
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  isVisible = signal<boolean>(false);

  onChangeModal(): void {
    this.isVisible.set(!this.isVisible());
  }
}