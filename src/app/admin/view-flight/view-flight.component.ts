import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit {

  flightId: number;
  flight: any;

  constructor(private route: ActivatedRoute, private flightsService: FlightsService, private router: Router) {
    this.flightId = this.route.snapshot.params['flightId'];
   }

  ngOnInit(): void {
    this.loadFlight();
  }

  loadFlight(){
    this.flightsService.findById(this.flightId).subscribe(res=>{
      this.flight = res;
    }, err => console.log(err));
  }

  delete(){
    this.flightsService.deleteFlight(this.flightId).subscribe(res => {
      alert("Flight removed successfully.");
      this.router.navigateByUrl("admin/flights");
    }, err => console.log(err));
  }
}
