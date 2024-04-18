// register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userName: string | undefined;
  userEmail: string | undefined;
  userPassword: string | undefined;
  userPhone: string | undefined;

  constructor(private userService: UserService, private router: Router) { }

  submitForm() {
    // Basic validation for empty fields
    if (!this.userName || !this.userEmail || !this.userPassword || !this.userPhone) {
      alert('All fields are required');
      return;
    }

    // Basic email format validation
    if (!this.validateEmail(this.userEmail)) {
      alert('Invalid email format');
      return;
    }

    // Basic password length validation
    if (this.userPassword.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    // Basic phone number format validation
    if (!this.validatePhone(this.userPhone)) {
      alert('Invalid phone number format');
      return;
    }

    const userData = {
      userName: this.userName,
      userEmail: this.userEmail,
      userPassword: this.userPassword,
      userPhone: this.userPhone
    };

    this.userService.addUser(userData).subscribe(
      response => {
        console.log('User added successfully:', response);
        this.router.navigate(['/app-login']);
      },
      error => {
        console.error('Error adding user:', error);
        // Optionally, handle errors
      }
    );
  }

  // Function to validate email format
  private validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  // Function to validate phone number format
  private validatePhone(phone: string): boolean {
    const phonePattern = /^((\+91-?)|0)?[0-9]{10}$/; // Example pattern for Indian phone numbers
    return phonePattern.test(phone);
  }
}

