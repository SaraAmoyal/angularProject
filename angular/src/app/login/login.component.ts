import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { CommonModule } from '@angular/common';
import { strUser } from 'src/strUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
name:string;
password:string;
ifnotvalid:boolean=true;
ifvalid:boolean=false;
user:strUser=null;

sara:string="amoyal";

  constructor(public userService:RecipesService, public router: Router) { }

  ngOnInit() {
  }
  txt:string="fdgdfg";
  find:boolean=false;
  notFound:boolean=false;
  checkPassword(password){
    if(password.length>=8&&!!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%* #+=?&])[A-Za-z\d$@$!%* +=?&]{3,}$/))
    this.ifnotvalid=false;
    else
    this.ifvalid=true;
};
   
toregister(){
  this.router.navigate(["Register"]);
}

  LookForUser(name:string, password:string){
    event.preventDefault();
    this.checkPassword(password);
    debugger
    if(!this.ifnotvalid){
      this.userService.lookForUser(name, password).subscribe(suc=>{
        debugger
        if(suc==1)
        {
          this.find=true;
          this.user=new strUser(name, password);
          this.router.navigate(["All-recipes"]);
        } 
        else if(suc==2)
        {
          this.router.navigate(["Register"]);
        }
        else
        {
          debugger
          this.notFound=true;
        }
        let str=JSON.stringify(this.user);
        sessionStorage.setItem("theUser", str);
      }, err=>console.error());
    }
  }
}
