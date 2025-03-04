import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserSignInModule } from './user-sign-in/user-sign-in.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserSignInModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Kanban-app';
}
