import {Component, EventEmitter, input, Output} from '@angular/core';
import {EventModel} from "../event/event-model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-event-modal',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './event-modal.component.html',
  styleUrl: './event-modal.component.css'
})
export class EventModalComponent {
  isVisible = input.required<boolean>();
  event = input<EventModel>();
  @Output() onClose = new EventEmitter();
  onCloseModal(){
    this.onClose.emit();
  }


}
