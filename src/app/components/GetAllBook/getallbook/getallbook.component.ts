import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


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

  
  constructor(private bookService: BookserviceService,private snackbar:MatSnackBar) { }

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

  AddToWishList(data:any){

   
  
    this.bookService.AddToWishList(data).subscribe(
      
        (response: any) => { 
          
          console.log('Wishlist GetBooks.ts',response)
          this.snackbar.open("Added to WishList", '', { duration: 2000,});
  
  
        },
        
        (error: any) => {console.log(error);
        });
  }
}
