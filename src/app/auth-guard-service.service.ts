import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService {

  constructor() { }

  getToken(){
    return JSON.parse(localStorage.getItem("LOGGED_IN_USER") || '{}');
  }
}
