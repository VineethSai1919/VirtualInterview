import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from '../Shared/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
  providers: [MessageService]
})
export class UserLoginComponent {
  email: string = '';
  password: string = '';
  loginDTO: any;
  role: string = "";
  errorMessage!: any;
  error!: boolean;
  roles: string[];
  loginRole: any;
  info!: boolean;

  /**
   * Constructor to initialize the component with necessary services.
   * @param authenticationLogin - Service to handle authentication.
   * @param loginService - Service to manage login state.
   * @param route - Router to navigate between routes.
   * @param messageService - Service to display messages.
   */
  constructor(private loginService: LoginService, private route: Router, private messageService: MessageService) {
    this.roles = []
    this.roles.push("admin", "user")
  }

  /**
   * Method to handle user login.
   * Validates the email format and sends login request.
   * Displays appropriate messages based on the response.
   */
  Login() {
    //write login code here
  }

  /**
   * Method to handle forgot password functionality.
   * Validates the email format and sends a request to reset the password.
   * Displays appropriate messages based on the response.
   */
  forgetPassword() {
   //write forget password code here
  }

  isPasswordVisible: boolean = false;

  /**
   * Toggles the visibility of the password input field.
   */
  togglePasswordVisibility(): void {
    const passwordInput = document.getElementById('pass') as HTMLInputElement;
    this.isPasswordVisible = !this.isPasswordVisible;
    passwordInput.type = this.isPasswordVisible ? 'text' : 'password';
  }
}

