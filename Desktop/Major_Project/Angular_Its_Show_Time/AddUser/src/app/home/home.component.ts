import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToRegister() {
    this.router.navigate(['/app-register']); // Navigate to the RegisterComponent
  }

  navigateToLogin() {
    this.router.navigate(['/app-login']);
  }

}
