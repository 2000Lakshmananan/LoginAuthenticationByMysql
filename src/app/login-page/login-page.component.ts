import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentyService } from '../authenty.service';
import { HttpclientService } from '../httpclient.service';
import { User } from '../users';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  users:User[]=[];

  constructor(private route:Router,private httpcli:HttpclientService,private auth:AuthentyService){}

  ngOnInit(): void {
    this.httpcli.findAll().subscribe(data => {     //subscribe => call back => Its used for calling a method inside a another method.
      this.users = data;
      console.log("From Login Page Length is "+this.users.length);
    });
  }

  title = 'UserLogin';
  error="";
  username="";
  password="";
  submit()
  {
    if(this.username=="" || this.password=="")
    {
      this.error="Phone & Password can't be Empty!"
    }
    else
    {
    for(let i=0;i<this.users.length;i++)
    {
      console.log(this.users[i].phone);
      if(this.users[i].phone == this.username)
      {
        if(this.password == this.users[i].password)
        {
          this.auth.member(this.users[i].name);
          this.route.navigate(['/home',this.users[i].name]);
        }
        else
        {
          this.error="Phone No. & Password is not match!";
        }
        break;
      }
      else
      {
        this.error="Phone number not Registered Here!";
      }
    }
  }
  }
  

}
