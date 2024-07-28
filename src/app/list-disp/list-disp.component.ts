import {Component} from '@angular/core';
import {UsersComponent} from "./users/users.component";

@Component({
  selector: 'app-list-disp',
  standalone: true,
  imports: [
    UsersComponent
  ],
  templateUrl: './list-disp.component.html',
  styleUrl: './list-disp.component.css'
})
export class ListDispComponent {

}
