import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { BookserviceService } from '../../../services/BookService/bookservice.service';
import { DataService } from '../../../services/DataService/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 

  constructor(private router:Router,private formBuilder: FormBuilder,private service:BookserviceService,private dataService:DataService,private snackbar:MatSnackBar) { }
  
  bookStoreArray:any=[];
  book:any
  quantity:any;

  BookingForm!: FormGroup;

  displayAddress = true;
  displayButton = true;
  displayCart = true;
  displayContinueButton = true;

  addressType:any = ['Home', 'Office', 'Other'];
  
  ngOnInit(): void {

    this.getCartList();
    this.dataService.recevieData.subscribe(
      (response:any)=>{
        console.log(response);
        this.getCartList();})

    /*****form field****/
      
      this.BookingForm = this.formBuilder.group({

      fullName: ['',Validators.required],
      phonenumber: ['',[Validators.required,Validators.minLength(10)]],
      fullAddress: ['',[Validators.required,Validators.minLength(6)]],
      city: ['',[Validators.required,Validators.minLength(3)]],
      state: ['',[Validators.required,Validators.minLength(3)]],
      addressType:['',Validators.required]
    });
  }
      /****get-books****/
      getCartList(){

    
        this.service.getCartList().subscribe(
          (response: any) => { 
            
            console.log(response.result)
            
            this.bookStoreArray=response['result'];
    
            console.log("getBooksArray",this.bookStoreArray);
    
          })
      }

      remove(data:any){

      
        this.service.removeCart(data).subscribe(
          
            (response: any) => { 
              
              console.log('delete wishlist',response)
  
              this.dataService.sendData(response);
              this.snackbar.open("Removed from the Cart",'',{ duration: 2000,});

            },
            
            (error: any) => {console.log(error);
            });
      }

/*****AddressToggle********/

addressToggle(){
  this.displayAddress = false
  this.displayButton = false
}

/**********Customer Details***************/
submit(){
    
      this.displayCart = false
      this.displayContinueButton = false
      let data={
 
      fullName: this.BookingForm.value.fullName,
      phonenumber: this.BookingForm.value.phonenumber,
      fullAddress: this.BookingForm.value.fullAddress,
      city: this.BookingForm.value.city,
      state: this.BookingForm.value.state,
      addressType: this.BookingForm.value.addressType,
      service: "advance",
    }
    
    console.log(data);
    this.service.putOrder(data).subscribe(
      (response:any) => { console.log(response);
      
      this.snackbar.open('Successfully Updated details','',{duration:2000,}); },

      (error: any) => {console.log(error);
      
        this.snackbar.open('Error at update details','try Again',{duration:2000,});
      });
}


/*************Checkout************/
checkout(){
  this.book = this.book;
  
  let orders:Array<any>=[]

  for(this.book of this.bookStoreArray){
    
    let order = {
      "product_id": this.book.product_id._id,
      "product_name": this.book.product_id.bookName,
      "product_quantity": this.book.product_id.quantity,
      "product_price": this.book.product_id.price,
    }
    
    orders.push(order)
  }
  let OrderDetails={

    orders: orders
  }
  console.log(OrderDetails)
  this.service.order(OrderDetails).subscribe(
    (response:any)=>{ 
      console.log(response)
      this.snackbar.open("successfully ordered",'',{ duration: 2000,});
      // this.router.navigate(['/dashboard/cart/placeorder']);
      this.router.navigate(['/home/placeorder']);
    },
    (error: any)=>{
      console.log(error);
      this.snackbar.open("Order UnSuccessfull",'',{ duration: 2000,});
    })
}
}
