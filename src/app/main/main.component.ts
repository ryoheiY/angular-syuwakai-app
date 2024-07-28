import {Component} from '@angular/core';
import {CardComponent} from "./ui/card/card.component";

interface HeaderMenu {
  title: string;
  description: string;
}

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
  headerList: HeaderMenu[] = [
    {title: '一覧', description: 'ユーザ一覧、スピーカー、ファシリテーターを確認できる一覧画面です。'},
    {title: '工事中', description: '工事中です。'},
  ];

}
