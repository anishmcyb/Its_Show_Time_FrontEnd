import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private router: Router, private userService: UserService) { }

  login() {
    if (!this.username || !this.password) {
      this.loginError = 'Please enter both username and password.';
      return;
    }

    const loginData = {
      userName: this.username,
      userPassword: this.password
    };

    this.userService.loginUser(loginData).subscribe(response => {
      console.log(loginData);
      
      // Check if the login was successful
      if (response) {
        console.log('Login successful.', response);
        // Redirect to the appropriate component after successful login
        this.router.navigate(['/login']);
      } else {
        // Display error message to the user
        this.loginError = 'Login failed. Please check your credentials and try again.';
        console.error('Login failed:', response);
      }
    }, error => {
      // Handle error
      console.log(loginData);
      
      this.loginError = 'Login failed. Please try again later.';
      console.error('Error logging in:', error);
    });
  }
}