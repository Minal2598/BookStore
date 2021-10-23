import { Injectable } from '@angular/core';
import { HttpService } from '../Http-service/http.service';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

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
    /*Admin-SignUP*/

    adminSignUp(data:any){

      let httpAuthOptions = {
  
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.token
        })
      };
      
      console.log(httpAuthOptions);
      console.log(data);
      // console.log(Authorization)
      
  
      return this.httpService.PostService(this.BaseUrl+'/bookstore_user/admin/registration',data,false,httpAuthOptions)
     }

     /*Admin-Login*/
     adminLogin(data:any){

      let httpAuthOptions = {
  
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.token,
        })
      };
      
      console.log(httpAuthOptions);
      console.log(data);
      // console.log(Authorization)
      
  
      return this.httpService.PostService(this.BaseUrl+'/bookstore_user/admin/login',data,false,httpAuthOptions)
     }
  
  
}
