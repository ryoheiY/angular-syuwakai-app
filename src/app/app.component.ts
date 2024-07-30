import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {AuthService} from "./auth-service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'speech-app';
  constructor(
    private readonly authService: AuthService,
  ) {

  }

  ngOnInit(): void {
    this.authService.initAuth();
  }
}
