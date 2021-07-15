import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ScheduleComponent } from './admin/schedule/schedule.component';
import { TicketComponent } from './admin/ticket/ticket.component';
import { AddscheduleComponent } from './admin/addschedule/addschedule.component';
import { AdminModule } from 'src/app/admin/admin.module';
import { UserModule } from 'src/app/user/user.module';
import { AuthGuardServiceService } from 'src/app/auth-guard-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    UserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
