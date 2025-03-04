import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.less'
})
export class UserLoginComponent {
  /**
   *
   */
  constructor(private readonly router: Router) {
  }
  onLogin() {
    // login logic
  }

  toBoard(){
    this.router.navigate(['/board']);
  }

}
