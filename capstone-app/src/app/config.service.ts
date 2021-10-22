import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = '_assets/config.json';
  
  constructor(private http: HttpClient) { }
}
