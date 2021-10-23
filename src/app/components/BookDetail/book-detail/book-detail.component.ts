import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/services/BookService/bookservice.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  booksdata:any;
  bookStoreArray:any=[];
  token: any;

  currentValue:any;
  value:any;


  
  constructor(private bookService:BookserviceService,private router: Router) {

    this.booksdata = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.booksdata);

   }

    getValue(data:any){
    console.warn(data);
    this.currentValue=data
    
  }
  ngOnInit(): void {

  this.getData()
  
}

  getData=() =>{

          try{
                this.booksdata = this.booksdata['details'];

              console.log(this.booksdata);
              
          }
          catch(error:any){
            console.log(error);
            
          }
} 
}