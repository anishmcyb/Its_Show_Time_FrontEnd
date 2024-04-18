import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  [x: string]: any;

//   dropdownOpen: boolean = false;

//   constructor(private router: Router) { }

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   navigateTo(route: string) {
//     this.router.navigate([route]);
//     this.toggleDropdown(); // Close dropdown after navigation
//   }
// adminDropdownOpen: boolean = false;
//   movieDropdownOpen: boolean = false;

//   constructor(private router: Router) {}

//   toggleAdminDropdown() {
//     this.adminDropdownOpen = !this.adminDropdownOpen;
//     // Close movie dropdown when admin dropdown is toggled
//     this.movieDropdownOpen = false;
//   }

//   toggleMovieDropdown() {
//     this.movieDropdownOpen = !this.movieDropdownOpen;
//   }

//   navigateTo(route: string) {
//     this.router.navigate([route]);
//     // Close both admin and movie dropdowns after navigation
//     this.adminDropdownOpen = false;
//     this.movieDropdownOpen = false;
//   }

// dropdownOpen: boolean = false;
//   movieDropdownOpen: boolean = false;

//   constructor(private router: Router) {}

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   toggleMovieDropdown() {
//     this.movieDropdownOpen = !this.movieDropdownOpen;
//   }

//   navigateTo(route: string) {
//     this.router.navigate([route]);
//     this.dropdownOpen = false; // Close the dropdown after navigation
//   }
showDropdown: boolean = false;
isAdminFlow: boolean = true;

constructor(private router: Router) {}

Dropdowns(): void {
  this.showDropdown = !this.showDropdown;
}

movies(): void {
  console.log('Opening Movies');
  this.Dropdowns();
  this.router.navigate(['/Movies']); // Navigate to the Movies component
}

events(): void {
  console.log('Opening Events');
  this.Dropdowns();
  this.router.navigate(['/Events']);
  // Navigate to the Events component or any other logic you want
}


}
