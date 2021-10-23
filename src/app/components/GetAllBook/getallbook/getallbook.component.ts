import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


import { BookserviceService } from 'src/app/services/BookService/bookservice.service';


@Component({
  selector: 'app-getallbook',
  templateUrl: './getallbook.component.html',
  styleUrls: ['./getallbook.component.scss']
})
export class GetallbookComponent implements OnInit {

  bookStoreArray:any=[];
  token: any;
  data: any;
  id:any;

  
  constructor(private bookService: BookserviceService,private snackbar:MatSnackBar, private router:Router) { }

@Input() favBooks: any;

  ngOnInit(){

    this.token = localStorage.getItem('token')
    this.getBooks();
  }

  /*get-books*/
  getBooks(){

    
    this.bookService.getBooksService().subscribe(
      (response: any) => { 
        
        console.log(response.result)
        
        this.bookStoreArray=response['result'];

        console.log("getBooksArray",this.bookStoreArray);

      })
  }

  /*For-random-rating*/

  rating(){
    const rate = Math.max((Math.random()*4)+1);
    return rate.toFixed(1);
  }

  /*random-Images*/
images:Array<any>=[
  {image:'',key:'1'},
  {image:'',key:'1'},
]
bookimage(){

}

  AddToWishList(data:any){

   
  
    this.bookService.AddToWishList(data).subscribe(
      
        (response: any) => { 
          
          console.log('Wishlist GetBooks.ts',response)
          this.snackbar.open("Added to WishList", '', { duration: 2000,});
  
  
        },
        
        (error: any) => {console.log(error);
        });
  }

  AddToCart(data:any){

    this.bookService.addToCartService(data).subscribe(
      
        (response: any) => { 
          
          console.log('Add to cart',response)
          this.snackbar.open("Added to Cart", '', { duration: 2000,});
          
        },
        
        (error: any) => {console.log(error);
        });
  
  }
  details(data:any){
    this.id = data._id;
    console.log("book-Id -> ",this.id);
    this.router.navigate(['/dashboard/details'],{state: { details: data,id: data._id } })
  }

}
