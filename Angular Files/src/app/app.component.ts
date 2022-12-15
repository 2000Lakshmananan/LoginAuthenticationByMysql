import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentyService } from './authenty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private route:Router, private auth:AuthentyService,private routes:ActivatedRoute){}
  name:any;
  ss:any;
  ngOnInit(): void {
    this.name=this.auth.getName();
    this.ss=this.auth.getStatus();
  }
  title = 'LoginAuthenticationByDB';

  log()
  {
    this.route.navigate(['login']);
  }
  sign()
  {
    this.route.navigate(['signup']);
  }
  logout()
  {
    this.route.navigate(['']);
    console.log(this.auth.getName());
    this.auth.remove();
    console.log(this.auth.getName());
    this.route.navigate(['']).then(() => {
    window.location.reload();
  });
  }
}
