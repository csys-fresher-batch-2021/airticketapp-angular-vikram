import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/services/flights.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-viewschedule',
  templateUrl: './viewschedule.component.html',
  styleUrls: ['./viewschedule.component.css']
})
export class ViewscheduleComponent implements OnInit {
  flights:any;
  constructor(private flightService: FlightsService) { }

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights(){
    this.flightService.getAllFlights().subscribe(res=>{
      console.log(res);
      this.flights = res;
    }, err => {
      console.log(err);
    }
  );
  }
}
