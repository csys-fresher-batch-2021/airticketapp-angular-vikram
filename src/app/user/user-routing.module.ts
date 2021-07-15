import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from 'src/app/user/display/display.component';
import { SearchComponent } from 'src/app/user/search/search.component';
import { BookingComponent } from 'src/app/user/booking/booking.component';
import { PaymentComponent } from 'src/app/user/payment/payment.component';
import { TicketComponent } from 'src/app/user/ticket/ticket.component';

const routes: Routes = [
  { path: 'user/display', component: DisplayComponent },
  { path: 'user/search', component: SearchComponent },
  { path: 'user/booking', component: BookingComponent },
  { path: 'user/payment', component: PaymentComponent },
  { path: 'user/ticket', component: TicketComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
