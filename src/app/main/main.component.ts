import { Component } from '@angular/core';
import {CardComponent} from "./ui/card/card.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
