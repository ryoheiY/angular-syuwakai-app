import {Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {ListDispComponent} from "./list-disp/list-disp.component";
import {DateListComponent} from "./list-disp/date-list/date-list.component";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  }, {
    path: 'list',
    component: ListDispComponent,
  },{
    path: 'event-list',
    component: DateListComponent
  }
];
