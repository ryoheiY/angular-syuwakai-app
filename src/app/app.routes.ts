import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UserListComponent} from "./user-list/user-list.component";
import {EventListComponent} from "./event-list/event-list.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

}, {
    path: 'user-list',
    component: UserListComponent,
  },{
    path: 'event-list',
    component: EventListComponent
  }
];
