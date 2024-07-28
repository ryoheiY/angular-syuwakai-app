import {Component} from '@angular/core';
import {CardComponent} from "./ui/card/card.component";
import {RouterLink} from "@angular/router";

interface HeaderMenu {
  title: string;
  description: string;
  link: string | null;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CardComponent,
    RouterLink
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  headerList: HeaderMenu[] = [
    {title: '一覧', description: 'ユーザ一覧、スピーカー、ファシリテーターを確認できる一覧画面です。', link: 'list'},
    {title: '工事中', description: '工事中です。', link: null},
  ];

}
