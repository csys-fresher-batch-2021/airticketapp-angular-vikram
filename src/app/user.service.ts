import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users=[
    { email: 'hero@gmail.com', password: 'king123' },
    { email: 'admin@ussr.com', password: 'admin1234' },
    { email: 'goldy@outlook.com', password: 'goldy1234'}
  ];
  constructor() { }

  getAllUsers(){
    return this.users;
  }
}
