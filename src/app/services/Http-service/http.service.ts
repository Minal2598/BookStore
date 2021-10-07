import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl = environment.BaseUrl
  token: any

  constructor(private http:HttpClient) {
    this.token = localStorage.getItem('token')
   }
  PostService(url: string = '', payload: any, tokenRequired: boolean = false, httpAuthOption: any) {
   
    return this.http.post( url, payload, tokenRequired && httpAuthOption);

  }
}
