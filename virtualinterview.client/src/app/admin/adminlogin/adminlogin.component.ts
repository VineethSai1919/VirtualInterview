import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from '../../Shared/login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  email: string = '';
  password: string = '';
  loginDTO: any;
  role: string = "";
  errorMessage!: any;
  error!: boolean;
  roles: string[];
  loginRole: any;
  isPasswordVisible: boolean = false;

  constructor(private loginService: LoginService, private route: Router, private messageService: MessageService) {
    this.roles = []
    this.roles.push("admin", "user")
  }

  ngOnInit(): void {

  }

  Login() {
    /*if (this.loginRole == "admin") {*/
    if (this.email.trim() != null || this.email.trim() != "") {
      this.loginDTO.emailId = this.email.trim();
      this.loginDTO.password = this.password.trim();
    }
  }
  togglePasswordVisibility(): void {
    const passwordInput = document.getElementById('pass') as HTMLInputElement;
    this.isPasswordVisible = !this.isPasswordVisible;
    passwordInput.type = this.isPasswordVisible ? 'text' : 'password';
  }
}
