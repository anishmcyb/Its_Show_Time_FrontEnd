import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';
  isloggedIn: boolean=false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(){
    console.log(this.router.url)
    if(this.router.url == "/app-login"){
      this.isloggedIn = false;
      this.userService.sendMessage(this.isloggedIn);
    }
  }

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
        this.isloggedIn = true;
        this.userService.sendMessage(this.isloggedIn);
        this.router.navigate(['/']);
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
      alert("Invalid Credentails.Please try again");
    });
  }
  // logut(){
  //   this.isloggedIn = false;
  //   this.userService.sendMessage(this.isloggedIn);
  // }
}