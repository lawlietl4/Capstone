import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    var postMethod = this.http.post('localhost:3000/api/auth/login',{
      username: username,
      password: password
    });
    console.log(postMethod);
    return postMethod;
  }

  register(username: string, name: string, password: string): Observable<any>{
    var postMethod = this.http.post('localhost:3000/api/auth/signup',{
      username: username,
      password: password,
      name: name
    });
    console.log(postMethod);
    return postMethod
  }
}
