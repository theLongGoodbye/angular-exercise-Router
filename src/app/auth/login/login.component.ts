import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {AuthService} from '../../admin/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string;
  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  ngOnInit() {
  }

  setMessage() {
    this.message = 'Logged' + (this.authService.isLoggedIn ? 'in' : 'out')
  }

  login() {
    this.message = 'Trying to log in ...';
    this.authService.login().subscribe(
      () => {
        this.setMessage()
        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/crisis-center/admin';

          let navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };
          this.router.navigate([redirect], navigationExtras)
        }
      }
    )
  }

  logout() {
    this.authService.logout()
    this.setMessage()
  }

}
