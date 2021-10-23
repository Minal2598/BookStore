import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/services/BookService/bookservice.service';
import { DataService } from 'src/app/services/DataService/data.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  currentfeedback : any;

  booksdata:any;
  bookStoreArray:any=[];
  token: any;
  id: any;
  comment: any;
  rating: any;
  value: any;
  
  constructor( private router:Router, private bookService:BookserviceService,private snackbar:MatSnackBar,private dataService:DataService) {
          this.booksdata = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.booksdata);
    

     }

  ngOnInit(): void {

    this.getFeedback()
    this.dataService.recevieData.subscribe(
      (response:any)=>{
        console.log(response);
        this.getFeedback();
      })
  
  }

  feedback(){


    try{ 
          let data={
      comment : this.comment,
      rating : this.value
    }
    this.id = this.booksdata.id;
    this.bookService.feedBack(data,this.id).subscribe(
    
      (response: any) => {
        console.log('reviewID',response);
        
        this.dataService.sendData(response);

        this.snackbar.open("FeedBack Successfull", '', { duration: 2000,});

      },
      
      (error: any) => {console.log(error);
      });

    }
    catch(error:any){
      console.log(error);
    }

  }



    

  getFeedback(){
    try{
      this.bookService.getfeedBack(this.booksdata.id).subscribe(
      (response: any) => { 
        
        console.log(response.result)
        
        this.bookStoreArray=response['result'];
        
        console.log("getBooksArray",this.bookStoreArray);

      })
    }
    catch(error:any){
      console.log(error);
      
    }
  }
}