import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpLoginComponent } from './components/SignUp-Login/sign-up-login/sign-up-login.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/Icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {  MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './components/Header/header/header.component';
import { FooterComponent } from './components/Footer/footer/footer.component';
import { HomepageComponent } from './components/HomePage/homepage/homepage.component';
import {MatMenuModule} from '@angular/material/menu';
import { GetallbookComponent } from './components/GetAllBook/getallbook/getallbook.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { FilterPipe } from './filter.pipe';
import { WishlistComponent } from './components/WishList/wishlist/wishlist.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    SignUpLoginComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    GetallbookComponent,
    FilterPipe,
    WishlistComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule ,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatMenuModule,
    MatPaginatorModule,
    MatChipsModule
    

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
