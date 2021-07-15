import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/admin/login/login.component';
import { ScheduleComponent } from 'src/app/admin/schedule/schedule.component';
import { TicketComponent } from 'src/app/admin/ticket/ticket.component';
import { AddscheduleComponent } from 'src/app/admin/addschedule/addschedule.component';
import { ViewscheduleComponent } from 'src/app/admin/viewschedule/viewschedule.component';
import { AuthenticationGuard } from 'src/app/authentication.guard';
import { ViewFlightComponent } from 'src/app/admin/view-flight/view-flight.component';
import { UpdateFlightComponent } from 'src/app/admin/update-flight/update-flight.component';
import { ViewticketComponent } from 'src/app/admin/viewticket/viewticket.component';

const routes: Routes = [
  { path: 'admin/dashboard', component: DashboardComponent, canActivate:[AuthenticationGuard] },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/schedule', component: ScheduleComponent },
  { path: 'admin/ticket', component: TicketComponent },
  { path: 'admin/addschedule', component: AddscheduleComponent },
  { path: 'admin/update/:flightId', component: UpdateFlightComponent },
  { path: 'admin/flights/:flightId', component: ViewFlightComponent },
  { path: 'admin/flights', component: ViewscheduleComponent },
  { path: 'admin/viewticket', component: ViewticketComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
