import { Component } from '@angular/core';
import { LoginService } from '../../Shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav-menu',
  templateUrl: './admin-nav-menu.component.html',
  styleUrl: './admin-nav-menu.component.css'
})
export class AdminNavMenuComponent {
  isNavbarOpen = false;
  isNavVisible = false;
  constructor(private loginService: LoginService, private route:Router) {

  }
  ngOnInit() {
    this.isNavVisible = this.loginService.isAuthenticated();

  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavBar() {
    this.isNavbarOpen = false;
  }

  logout() {
    this.loginService.logout();
    this.route.navigate(['/admin/login']);

  }
}
