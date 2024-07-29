import {Component, EventEmitter, input, Output} from '@angular/core';

@Component({
  selector: 'app-next-event-modal',
  standalone: true,
  imports: [],
  templateUrl: './next-event-modal.component.html',
  styleUrl: './next-event-modal.component.css'
})
export class NextEventModalComponent {
  isVisible = input.required<boolean>();
  @Output() onClose = new EventEmitter();
  onCloseModal(){
    this.onClose.emit();
  }
}
