//angular components
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//custom made objects
import { User } from './user';
import { JwtResponse } from './jwt-response';
//rxjs components
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  AUTH_SSEVER = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  httpClient!: HttpClient;
  constructor() { }

  register(user: User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SSEVER}/register`, user).pipe(
      tap((res: JwtResponse)=>{
        if(res.user){
          localStorage.setItem("ACCESS_TOKEN", res.user.access_token);
          localStorage.setItem("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true);
        }
      })
    );
  }

  signIn(user: User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SSEVER}/login`, user).pipe(
      tap(async (res: JwtResponse) =>{
        if(res.user){
          localStorage.setItem("ACCESS_TOKEN", res.user.access_token);
          localStorage.setItem("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true);
        }
      })
    );
  }

  signOut(){
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
    this.authSubject.next(false);
  }

  isAuthenticated(){
    return this.authSubject.asObservable();
  }
}
