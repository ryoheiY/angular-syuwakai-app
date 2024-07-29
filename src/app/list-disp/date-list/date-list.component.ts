import {Component, inject, OnInit, signal} from '@angular/core';
import {UserModel} from "../users/user/user.model";
import {UserService} from "../users/user/user.service";
import {EventModel} from "../event/event-model";
import {EventService} from "../event/event.service";
import {DatePipe} from "@angular/common";
import {EventModalComponent} from "../event-modal/event-modal.component";

@Component({
  selector: 'app-date-list',
  standalone: true,
  imports: [
    DatePipe,
    EventModalComponent
  ],
  templateUrl: './date-list.component.html',
  styleUrl: './date-list.component.css'
})
export class DateListComponent implements OnInit {
  users: UserModel[] = [];
  events: EventModel[] = [];
  isVisible = signal<boolean>(false);
  selectedEventId = signal(0);

  private userService: UserService = inject(UserService);
  private eventService: EventService = inject(EventService);

  ngOnInit(): void {
    this.users = this.userService.usersList;
    this.events = this.eventService.eventList;
  }

  onChangeModal(): void {
    this.isVisible.set(!this.isVisible());
  }

  onClickDate(id: number): void {
    this.selectedEventId.set(id);
    this.isVisible.set(!this.isVisible());
  }

  findEventById(id: number): EventModel | undefined {
    return this.events.find(event => event.id === id);
  }


}
