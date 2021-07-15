import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  flightId: number;
  flight: any;

  constructor(private route: ActivatedRoute, private flightsService: FlightsService, private router: Router) {
    this.flightId = this.route.snapshot.params['flightId'];
    console.log(this.flightId);
  }

  ngOnInit(): void {
    this.loadFlight();
  }

  loadFlight() {
    this.flightsService.findById(this.flightId).subscribe(res => {
      this.flight = res;
      // this.flightDate = res.flight_date;
      console.log(this.flight);
    }, err => console.log(err));
    
  }

  onSubmit() {
    let updatedFlight = {
      "no": this.flight.flight_no,
      "airline": this.flight.airline,
      "date": this.flight.flight_date,
      "origin": this.flight.origin,
      "destiny": this.flight.destiny,
      "departTime": this.flight.depart_time,
      "arrivalTime": this.flight.arrival_time,
      "economy": this.flight.economy,
      "business": this.flight.business,
      "economyPrice": this.flight.economy_price,
      "businessPrice": this.flight.business_price
    };
    console.log(this.flightId, updatedFlight);
    this.flightsService.updateFlight(this.flightId, updatedFlight).subscribe(res => {
      console.log(res);
      alert("Flight Updated Successfully");
      this.router.navigateByUrl('admin/flights');
    }, err => { console.log(err); });
  }
}
