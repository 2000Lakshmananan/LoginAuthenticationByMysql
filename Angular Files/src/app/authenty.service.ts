import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentyService {

  constructor() { }
  status:number=0;
  // name:any;


  member(name:any)
  {
      console.log("From Auth "+name);
      localStorage.setItem("currentName",name);
  }
  getName()
  {
    let nn=localStorage.getItem("currentName");
    // location.reload();
    return nn;
  }

  getStatus():boolean
  {
    let n=localStorage.getItem("currentName");
    return !(n==null);
  }

  remove()
  {
    localStorage.removeItem("currentName");
  }
}
