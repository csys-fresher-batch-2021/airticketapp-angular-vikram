import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/services/flights.service';
import { Router } from '@angular/router';
import { DatavalidationService } from 'src/app/services/datavalidation.service';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent implements OnInit {
  
  flight = {
    "no": null,
    "airline": null,
    "date": null,
    "origin": null,
    "destiny": null,
    "departTime": null,
    "arrivalTime": null,
    "economy": null,
    "business": null,
    "economyPrice": null,
    "businessPrice": null
  };

  constructor(private flightService: FlightsService, private router: Router, private datavalidation: DatavalidationService) { }

  ngOnInit(): void {}

  /**
   * Add flight by calling flight service.
   */
  addFlight() {
    if(this.validateData(this.flight)){
      this.flightService.addNewFlight(this.flight).subscribe(res => {
        alert("Flight added successfully");
      }, err => console.log(err));
    }
  }

  validateData(flight: any){
    let isValid: boolean= false;
    let isFormFilled: boolean = this.datavalidation.checkFormFields(flight);
    let isNoValid: boolean = this.datavalidation.validateNumber(flight.no);
    let isAirlineValid: boolean = this.datavalidation.validateTextData(flight.airline);
    let isOriginValid: boolean = this.datavalidation.validateTextData(flight.origin);
    let isDestinyValid: boolean = this.datavalidation.validateTextData(flight.destiny);
    let isDeptTimeValid: boolean = this.datavalidation.validateTime(flight.departTime);
    let isArrTimeValid: boolean = this.datavalidation.validateTime(flight.arrivalTime);
    let isEconomyValid: boolean = this.datavalidation.validateNumber(flight.economy);
    let isBusinessValid: boolean = this.datavalidation.validateNumber(flight.business);
    let isEcoPriceValid: boolean = this.datavalidation.validatePrice(flight.economyPrice);
    let isBusPriceValid: boolean = this.datavalidation.validatePrice(flight.businessPrice);

    if(!isFormFilled) alert("Fill all fields.");
    else if(!isNoValid) alert("Invalid flight no");
    else if(!isAirlineValid) alert("Invalid airline");
    else if(!isOriginValid && !isDestinyValid) alert("Invalid place");
    else if(!isDeptTimeValid && !isArrTimeValid) alert("Invalid time");
    else if(!isEconomyValid) alert("Invalid economy seat count");
    else if(!isBusinessValid) alert("Invalid business seat count");
    else if(!isEcoPriceValid) alert("Invalid economy price");
    else if(!isBusPriceValid) alert("Invalid business price");
    else{
      isValid = true;
    }
    return isValid;
  }
}
