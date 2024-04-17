// admin-login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  adminUsername: string | undefined;
  adminPassword: string | undefined;
  errorMessage: string | undefined;
  constructor(private router: Router) { }


  login() {
    // Check if the provided username and password are correct
    if (this.adminUsername === 'Admin' && this.adminPassword === 'admin') {
      // Redirect to the admin dashboard or perform other actions
      console.log('Admin logged in successfully');
      // You can navigate to the admin dashboard or perform other actions here
      this.router.navigate(['/app-admin-home']);
    } else {
      // Display error message for invalid credentials
      this.errorMessage = 'Invalid username or password';
    }
  }
}
