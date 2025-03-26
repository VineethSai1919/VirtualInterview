import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-nav-menu',
  templateUrl: './admin-nav-menu.component.html',
  styleUrl: './admin-nav-menu.component.css'
})
export class AdminNavMenuComponent {
  isNavbarOpen = false;

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
