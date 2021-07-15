import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { AdminModule } from 'src/app/admin/admin.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/admin/login/login.component';
import { ScheduleComponent } from 'src/app/admin/schedule/schedule.component';
import { TicketComponent } from 'src/app/admin/ticket/ticket.component';
import { AdminRoutingModule } from 'src/app/admin/admin-routing.module';
import { UserRoutingModule } from 'src/app/user/user-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminRoutingModule,
    UserRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
