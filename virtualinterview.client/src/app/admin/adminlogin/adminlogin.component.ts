import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from '../../Shared/login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css',
  providers: [MessageService]
})
export class AdminloginComponent {
  email: string = '';
  password: string = '';
  role: string = "";
  roles: string[] = ["admin", "user"];
  isPasswordVisible: boolean = false;

  constructor(
    private loginService: LoginService,
    private route: Router,
    private messageService: MessageService
  ) { }

  // Handles the login process
  Login() {  }

  // Toggles the visibility of the password input field
  togglePasswordVisibility(): void {  }
}
