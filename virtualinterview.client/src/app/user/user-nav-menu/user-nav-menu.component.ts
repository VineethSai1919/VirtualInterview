import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Shared/login.service';

@Component({
  selector: 'app-user-nav-menu',
  templateUrl: './user-nav-menu.component.html',
  styleUrl: './user-nav-menu.component.css'
})
export class UserNavMenuComponent {
constructor(private loginService: LoginService, private route: Router) { }
  /**
   * Logs out the user and navigates to the home page.
   */
  logout() {
    this.loginService.logout();
    this.route.navigate(['/']);
  }
  /**
   * Toggles the navigation menu visibility.
   */
  openNav() {
    const x = document.getElementById("navDemo");
    if (x) {
      if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
      } else {
        x.className = x.className.replace(" w3-show", "");
      }
    }
  }
  /**
   * Toggles the top navigation bar's responsive class.
   */
  navBar() {
    const x = document.getElementById("myTopnav");
    if (x != null) {
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }
  /**
   * Closes the navigation bar if it is in responsive mode.
   */
  closeNavBar() {
    const topnav = document.getElementById("myTopnav");
    if (topnav?.classList.contains("responsive")) {
      topnav.classList.remove("responsive");
    }
  }
}
