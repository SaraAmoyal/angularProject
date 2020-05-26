import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { User } from 'src/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userService:RecipesService, public router:Router) { }
  ifvalid:boolean=true;
name:string="sara";
password:string="suggest a password, include Minimum 3 characters at least 1 Alphabet, 1 Number and 1 Special Character, minimum 8 chars.";
  ngOnInit() {
  }
  checkPassword(password){
    if(password.length>=8&&!!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%* #+=?&])[A-Za-z\d$@$!%* #+=?&]{3,}$/))
    this.ifvalid=false;
};
   
  registerMe(){
    debugger
    this.checkPassword(this.password);
    if(!this.ifvalid)
    {this.userService.registerMe(new User(1234, this.name, "fgsdjg", "jsgh", this.password));
    alert("you registered succeesfully!");}
    this.router.navigate(["All-recipes"]);
  }
}
