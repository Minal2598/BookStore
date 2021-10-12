import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  PostService(url: string = '', payload: any, tokenRequired: boolean = false, httpOptions: any=null) {
    console.log(url);
    console.log(payload);
    console.log(httpOptions);
    console.log(tokenRequired);
    
   
    return this.http.post( url, payload, tokenRequired && httpOptions);

  }
  // get(url: string, isHeaderRequired: any = false, token: any = null) {  
  //   console.log("data Got");
  //   let tokenOption = {headers: new HttpHeaders({"x-access-token": token})};
  //   return this.http.get(url, isHeaderRequired && tokenOption)
  // }
  getService(url: string = '', tokenRequired: boolean = false,httpOptions: any) {
    console.log(url);
    return this.http.get( url, tokenRequired && httpOptions);
  }

  deleteService(url:string='', payload: any,  tokenRequired:boolean=false, httpOption:any) {
    console.log(url);
    return this.http.delete(url, tokenRequired && httpOption)
  }
  
}
