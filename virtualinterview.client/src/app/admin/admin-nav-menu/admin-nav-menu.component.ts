import { Component } from '@angular/core';
import { LoginService } from '../../Shared/login.service';

@Component({
  selector: 'app-admin-nav-menu',
  templateUrl: './admin-nav-menu.component.html',
  styleUrl: './admin-nav-menu.component.css'
})
export class AdminNavMenuComponent {
  isNavbarOpen = false;
  isNavVisible = true;
  constructor(private loginService: LoginService) {
   this.isNavVisible = this.loginService.isAuthenticated();

  }
  //ngOnInint() {
  //  this.loginService.getLoginStatus().subscribe(status => {
     
  //  })
  //}

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavBar() {
    this.isNavbarOpen = false;
  }

  logout() {
    console.log('Logging out...');
    // Implement logout logic here (e.g., clearing session, redirecting)
  }
}
