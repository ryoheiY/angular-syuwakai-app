import {Component, signal, } from '@angular/core';
import {UsersComponent} from "./users/users.component";
import {ModalComponent} from "../main/ui/modal/modal.component";
import {NextEventModalComponent} from "./next-event-modal/next-event-modal.component";

@Component({
  selector: 'app-list-disp',
  standalone: true,
  imports: [
    UsersComponent,
    ModalComponent,
    NextEventModalComponent
  ],
  templateUrl: './list-disp.component.html',
  styleUrl: './list-disp.component.css'
})
export class ListDispComponent {
  isVisible = signal<boolean>(false);

  onChangeModal(): void {
    this.isVisible.set(!this.isVisible());
  }
}
