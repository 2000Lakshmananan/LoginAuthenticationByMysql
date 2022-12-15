import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentyService } from '../authenty.service';
import { HttpclientService } from '../httpclient.service';
import { User } from '../users';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  users: User[]=[];
  constructor(private httpcli:HttpclientService,private route:ActivatedRoute,private auth:AuthentyService) { }

  ngOnInit(): void {
    this.httpcli.findAll().subscribe(data => {     //subscribe => call back => Its used for calling a method inside a another method.
      this.users = data;
      console.log(this.users.length);
    });
  }

}
