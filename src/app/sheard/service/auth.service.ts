import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environmentProd} from "../../../enviroments/environment.prod";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  API_URL = environmentProd.baseUrl + 'api/auth/';

  login(form: any): Observable<any> {
    return this.http.post(
      this.API_URL + 'signin',
      {
        email: form.email,
        password: form.password
      },
      httpOptions
    );
  }
  register(user:any): Observable<any> {
    return this.http.post(this.API_URL + 'signup', user, httpOptions);
  }



  update(user:any): Observable<any> {
    return this.http.put(this.API_URL + 'update', {
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role,
    }, httpOptions);
  }


  logout(): Observable<any> {
    return this.http.post(this.API_URL + 'signout', { }, httpOptions);
  }
}
