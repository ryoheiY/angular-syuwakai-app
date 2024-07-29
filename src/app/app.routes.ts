import {Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {UserListComponent} from "./user-list/user-list.component";
import {EventListComponent} from "./event-list/event-list.component";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  }, {
    path: 'user-list',
    component: UserListComponent,
  },{
    path: 'event-list',
    component: EventListComponent
  }
];
