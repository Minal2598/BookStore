import { Injectable } from '@angular/core';
import { HttpService } from '../Http-service/http.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BaseUrl=environment.BaseUrl ;
  token:any

  constructor(private httpService: HttpService ) { }
  
  signUpUser(requestdata:any){
    let httpAuthOptions = {
      headers:new Headers({
        'Content-Type' : 'application/json',
        'Authorization' : this.token

      })
    };
    console.log(requestdata);
    return this.httpService.PostService(this.BaseUrl+'bookstore_user/registration',requestdata,false, httpAuthOptions)
  }

  loginUser(requestdata:any){
    let httpAuthOptions = {
      headers:new Headers({
        'Content-Type' : 'application/json',
        'Authorization' : this.token

      })
    };
    console.log(requestdata);
    return this.httpService.PostService(this.BaseUrl+'bookstore_user/login',requestdata,false, httpAuthOptions)
  }
  
}
