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
import { CartComponent } from './components/Cart/cart/cart.component';
import { AuthguardServiceService } from './services/AuthGuardService/authguard-service.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import { PlaceOrderComponent } from './components/PlaceOrder/place-order/place-order.component';
import { BookDetailComponent } from './components/BookDetail/book-detail/book-detail.component';
import { RatingComponent } from './components/Ratings/rating/rating.component';
import { AdminSignupComponent } from './components/Admin-SignUp/admin-signup/admin-signup.component';
import { AdminLoginComponent } from './components/Admin-login/admin-login/admin-login.component';
import { AdminHeaderComponent } from './components/Admin-header/admin-header/admin-header.component';
import { DashboardAdminComponent } from './components/Dashboard/dashboard-admin/dashboard-admin.component';




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
    WishlistComponent,
    CartComponent,
    PlaceOrderComponent,
    BookDetailComponent,
    RatingComponent,
    AdminSignupComponent,
    AdminLoginComponent,
    AdminHeaderComponent,
    DashboardAdminComponent
   
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
    MatChipsModule,MatToolbarModule,MatTooltipModule,
    MatExpansionModule,MatSelectModule,
    MatDialogModule,MatRadioModule,MatDividerModule


    

  
  ],
  providers: [AuthguardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
