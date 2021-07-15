import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string | undefined;
  password:string | undefined;
  constructor(private router:Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  isValidUser(){
    let found = false;
    let users:any = this.userService.getAllUsers();
    for(let i = 0; i < users.length; i++){
      if((users[i].email === this.email) && (users[i].password === this.password)){
        found = true;
        break;
      }
    }
    return found;
  }

  login(){
    let found = this.isValidUser();
    if(found == true){
      alert("successfully logged in");
      let user = { name: this.email, mail: this.email };
      localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));
      this.router.navigateByUrl("/admin/dashboard");
    }
    else{
      alert("Invalid Login Credentials");
    }
  }
}
