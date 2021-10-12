import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookserviceService } from 'src/app/services/BookService/bookservice.service';
import { DataService } from 'src/app/services/DataService/data.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(private bookService:BookserviceService,private dataService:DataService,private snackbar:MatSnackBar) { }
  wishListArray:any=[];

  ngOnInit(): void {
    this.getWishlist()
    this.dataService.recevieData.subscribe(
      (response:any)=>{
        console.log(response);
        this.getWishlist();
      })


  }
  getWishlist(){

    
    this.bookService.getWishList().subscribe(
      (response: any) => { 
        
        console.log(response.result)
        
        this.wishListArray=response['result'];

        console.log("getBooksArray",this.wishListArray);

      })
  }

  deleteWishList(data:any){

  
    this.bookService.deleteWishList(data).subscribe(
      
        (response: any) => { 
          
          console.log('delete wishlist',response)

          this.dataService.sendData(response);
          this.snackbar.open("Removed from WishList", '', { duration: 2000,});
          
  
  
        },
        
        (error: any) => {console.log(error);
        });
  }

}
