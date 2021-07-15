import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from 'src/app/admin/login/login.component';
import { ScheduleComponent } from 'src/app/admin/schedule/schedule.component';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';
import { TicketComponent } from 'src/app/admin/ticket/ticket.component';
import { AddscheduleComponent } from 'src/app/admin/addschedule/addschedule.component';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';
import { ViewticketComponent } from './viewticket/viewticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';


@NgModule({
  declarations: [
    LoginComponent,
    ScheduleComponent,
    DashboardComponent,
    TicketComponent,
    AddscheduleComponent,
    ViewscheduleComponent,
    ViewticketComponent,
    ViewFlightComponent,
    UpdateFlightComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
