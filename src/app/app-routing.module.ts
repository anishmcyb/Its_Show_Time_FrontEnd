import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmBookingComponent } from './BookingApp/confirm-booking/confirm-booking.component';
import { BookingComponent } from './BookingApp/booking/booking.component';
import { PaymentComponent } from './BookingApp/payment/payment.component';
import { PaymentConfirmationComponent } from './BookingApp/payment-confirmation/payment-confirmation.component';
import { WalletComponent } from './BookingApp/wallet/wallet.component';


const routes: Routes = [
  { path: 'app-booking', component: BookingComponent },
  { path: 'add-confirm-booking', component: ConfirmBookingComponent },
  { path: 'app-payment', component: PaymentComponent },
  { path: 'payment-confirmation', component: PaymentConfirmationComponent },
  { path: '', redirectTo: '/app-booking', pathMatch: 'full' }, // Default route
  { path: 'add-payment', component: PaymentComponent },
  { path: 'add-confirm-payment', component: PaymentConfirmationComponent }, 
  { path: 'app-wallet', component: WalletComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
