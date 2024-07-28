import { Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {ListDispComponent} from "./list-disp/list-disp.component";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },{
    path: 'list',
    component: ListDispComponent,
  }
];
