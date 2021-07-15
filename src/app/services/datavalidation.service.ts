import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatavalidationService {

  constructor() { }

    /**
     * Function to check form filds are filled or not.
     * @param {*} flight 
     */
    checkFormFields(flight: any) {
      let no = flight.no;
      let airline = flight.airline;
      let date = flight.date;
      let origin = flight.origin;
      let destiny = flight.destiny;
      let departTime = flight.departTime;
      let arrivalTime = flight.arrivalTime;
      let economy = flight.economy;
      let business = flight.business;
      let economyPrice = flight.economyPrice;
      let businessPrice = flight.businessPrice;
      let valid = true;
      if (this.isEmpty(no) || this.isEmpty(airline) || this.isEmpty(date) || this.isEmpty(origin) || this.isEmpty(destiny) || this.isEmpty(departTime) || this.isEmpty(arrivalTime) || this.isEmpty(economy) || this.isEmpty(business) || this.isEmpty(economyPrice) || this.isEmpty(businessPrice)) {
          valid = false;
      }
      return valid;
  }

    /**
     * Check data has length greater than 1.
     * @param {*} data 
     */
    isEmpty(data : any) {
      let valid = false;
      if (data.toString().trim().length < 1) {
          valid = true;
      }
      return valid;
    }

    /**
     * Function to validate time.
     * @param {*} time 
     */
    validateTime(time : any){
      let regex = /^([0-9]{2})\:([0-9]{2})\:([0-9]{2})$/;
      let valid = false;
      if(time.match(regex)){
          valid = true;
      }
      return valid;
  }

  /**
     * Function to validate text data.
     * @param {*} text
     */
    validateTextData(text : any){
      let valid = false;
      if(isNaN(text)){
          valid = true;
      }
      return valid;
    }

    /**
     * Function to validate flight number data.
     * @param {*} no 
     */
    validateNumber(no : any){
      let valid = false;
      let digitsCount = this.countDigits(no);
      if(!isNaN(no) && digitsCount <= 3){
          valid = true;
      }
      return valid;
    }

    /**
     * Function to validate flight price
     * @param {*} price 
     */
    validatePrice(price : any){
      let valid =false;
      let digitsCount = this.countDigits(price);
      if(!isNaN(price) && digitsCount >= 4){
          valid = true;
      }
      return valid;
    }

    /**
     * returns digit count.
     * @param {*} no 
     */
    countDigits(no : any){
      return no.toString().length;
    }
}
