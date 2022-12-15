import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  u:any;
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {  //Observable=>To achieve SPA //(if i add some rows in mysql its not relad again)
    return this.http.get<User[]>(this.usersUrl);
  }

  save(user:User):Observable<object> { 
    return this.http.post("http://localhost:8080/save-user", user); 
  }

  iddd:any;

  getUser(id: number): Observable<Object> {  
    return this.http.get(`http://localhost:8080/user/${id}`);  
  } 
}