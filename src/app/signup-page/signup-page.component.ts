import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentyService } from '../authenty.service';
import { User } from '../users';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpclientService } from '../httpclient.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  u:User=new User();


  constructor(private auth: AuthentyService,private router: Router,private httpcli:HttpclientService) {
  }
  error="";
  form=new FormGroup
  ({
    // name: new FormControl('Lakshamn',[Validators.required, Validators.minLength(3)]),
    // id: new FormControl(''),
    name: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    phone: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    city: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    pass: new FormControl('',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$") ]),
    cpass: new FormControl('',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")])
  });
  get f(){
    return this.form.controls;
  }

  submitted = false;
  
  allusers: User[]=[];
  ngOnInit(): void {
    this.submitted = false; 
    this.httpcli.findAll().subscribe(data => {     //subscribe => call back => Its used for calling a method inside a another method.
      this.allusers=data;
      console.log("lastly"+this.allusers.length);
  });
}
  flag:any;
  submit(vv:any)
  {
    if(this.form.value.city=="" || this.form.value.cpass=="" || this.form.value.phone =="" || this.form.value.name=="" || this.form.value.pass=="")
    {
      this.error="Look!, Fields are in Empty";
    }
    else if(this.form.value.pass != this.form.value.cpass)
    {
      this.error="Password and Confirm Password Are does not Match";
    }
    else
    {
    this.error="";
    this.flag=0;
    this.u.name=this.form.value.name;
    this.u.address=this.form.value.city;
    this.u.password=this.form.value.pass;
    this.u.phone=this.form.value.phone;
    this.u.id="";
      for(let i=0;i<this.allusers.length;i++)
      {
          console.log(this.allusers[i].phone);
          if(this.form.value.phone==this.allusers[i].phone)
          {
              this.flag=1;
              console.log("for "+this.flag);
              break;
          }
          console.log("without for"+this.flag); 
      }
      if(this.flag==1)
          {
            this.error="Your Phone is Already Registered Here!";
          }
          else
          {
            this.save();
          }
        }
  }

  save()
  {
    console.log(this.u.name);
      this.httpcli.save(this.u).subscribe(data => alert("User Added Successfully!!!"), error => alert("Can not added"));  //if you observable then you must use the subscribe
      this.u=new User();
      this.router.navigate(["/"]);
  }

}