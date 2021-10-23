import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpService } from '../Http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
 
  BaseUrl=environment.BaseUrl 
  token:any

  constructor(private http : HttpService) {
    this.token = localStorage.getItem('token')
    console.log(this.token);
   }

 

  getBooksService(){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    console.log(httpAuthOptions); 
    
    return this.http.getService(this.BaseUrl +'/bookstore_user/get/book',false,httpAuthOptions);

  }
  AddToWishList(data: any) {
    this.token = localStorage.getItem('token');
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.PostService(this.BaseUrl+'/bookstore_user/add_wish_list/'+data._id,{},true, httpAuthOptions);
  }
  getWishList(){

    let httpAuthOptions = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    console.log(httpAuthOptions); 
    
    return this.http.getService(this.BaseUrl+'/bookstore_user/get_wishlist_items',true,httpAuthOptions);

  }
  deleteWishList(data:any){

    this.token = localStorage.getItem('token');
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }

  return this.http.deleteService(this.BaseUrl+'/bookstore_user/remove_wishlist_item/'+data.product_id._id,data,true,options)
 }

 addToCartService(data:any){
  this.token = localStorage.getItem('token');
  let options = {
    headers: new HttpHeaders({
      'x-access-token': this.token,
      'Content-Type': 'application/json'
    })
  }
  return this.http.PostService(this.BaseUrl+'/bookstore_user/add_cart_item/'+data._id,{},true, options);
}
getCartList(){

  let httpAuthOptions = {
    headers: new HttpHeaders({
      'x-access-token': this.token,
      'Content-Type': 'application/json'
    })
  }
  console.log(httpAuthOptions); 
  
  return this.http.getService(this.BaseUrl+'/bookstore_user/get_cart_items',true,httpAuthOptions);

}

removeCart(data:any){

  this.token = localStorage.getItem('token');
  let options = {
    headers: new HttpHeaders({
      'x-access-token': this.token,
      'Content-Type': 'application/json'
    })
  }

return this.http.deleteService(this.BaseUrl+'/bookstore_user/remove_cart_item/'+data._id,{},true,options)
}



/******Customer Details*********/

putOrder(data:any){

  this.token = localStorage.getItem('token');
  let options = {
    headers: new HttpHeaders({
      'x-access-token': this.token,
      'Content-Type': 'application/json'
    })
  }

return this.http.putService(this.BaseUrl+'/bookstore_user/edit_user',data,true,options)
}

/**********Order***********/
order(data: any) {
  this.token = localStorage.getItem('token');
  let options = {
    headers: new HttpHeaders({
      'x-access-token': this.token,
      'Content-Type': 'application/json'
    })
  }
  return this.http.PostService(this.BaseUrl+'/bookstore_user/add/order',data,true, options);
}

/************Feed-Back*****POST********/
feedBack(review: any,data:any) {
  this.token = localStorage.getItem('token');
  let options = {
    headers: new HttpHeaders({
      'x-access-token': this.token,
      'Content-Type': 'application/json'
    })
  }
  return this.http.PostService(this.BaseUrl+'/bookstore_user/add/feedback/'+data,review,true,options);
}


/************Feed-Back*******GET***********/
getfeedBack(id:any){

  let httpAuthOptions = {
    headers: new HttpHeaders({
      'x-access-token': this.token,
      'Content-Type': 'application/json'
    })
  }
  console.log(httpAuthOptions); 
  
  return this.http.getService(this.BaseUrl+'/bookstore_user/get/feedback/'+id,true,httpAuthOptions);

}






}
