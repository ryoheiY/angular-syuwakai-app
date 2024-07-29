import { Injectable } from '@angular/core';
import {EventModel} from "./event-model";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: EventModel[] = [];
  constructor() {
    this.getEventList();
  }

  getEventList(){
    this.events.push(
      {
      id: 1,
      date: new Date(2024, 6, 1),
      name: 'event1',
      description: 'event desu',
      speakerId: 1,
      facilitatorId: 2,
    },{
        id: 2,
        date: new Date(2024, 6, 8),
        name: 'event2',
        description: 'event2 desu',
        speakerId: 2,
        facilitatorId: 1,
      },{
        id: 3,
        date: new Date(2024, 6, 5),
        name: 'event3',
        description: 'event3 desu',
        speakerId: 1,
        facilitatorId: 3,
      },
      );
  }

  /**
   * 日付の昇順でEventListを返す
   */
  get eventList(){
    return this.events.sort((
      a, b) => a.date > b.date? 1 : -1);
  }
}
