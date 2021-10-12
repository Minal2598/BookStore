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
  
  signUpUser(data:any){
    let httpAuthOptions = {
      headers:new Headers({
        'Content-Type' : 'application/json',
        'Authorization' : this.token

      })
    };
    console.log(data);
    return this.httpService.PostService(this.BaseUrl+'/bookstore_user/add_wish_list'+'/'+data,data,false, httpAuthOptions)
  }

  loginUser(data:any){
    let httpAuthOptions = {
      headers:new Headers({
        'Content-Type' : 'application/json',
        'Authorization' : this.token

      })
    };
    console.log(data);
    return this.httpService.PostService(this.BaseUrl+'/bookstore_user/login',data,false,httpAuthOptions)
  }
  
}
