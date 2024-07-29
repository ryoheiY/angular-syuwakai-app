import {Component, EventEmitter, inject, input, OnInit, Output} from '@angular/core';
import {EventModel} from "../user-list/event/event-model";
import {DatePipe} from "@angular/common";
import {UserModel} from "../user-list/users/user/user.model";
import {UserService} from "../user-list/users/user/user.service";

@Component({
  selector: 'app-event-modal',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './event-modal.component.html',
  styleUrl: './event-modal.component.css'
})
export class EventModalComponent implements OnInit{
  isVisible = input.required<boolean>();
  event = input<EventModel>();
  users : UserModel[] = [];
  private userService: UserService = inject(UserService);



  @Output() onClose = new EventEmitter();
  onCloseModal(){
    this.onClose.emit();
  }

  ngOnInit(): void {
    this.users = this.userService.usersList;
  }


}
