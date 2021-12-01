import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    this.http.post('localhost:3000/api/auth/login',{
      username: username,
      password: password
    })
  }

  register(username: string, name: string, password: string){
    this.http.post('localhost:3000/api/auth/signup',{
      username: username,
      password: password,
      name: name
    })
  }
}
