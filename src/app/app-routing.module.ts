import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/Admin-login/admin-login/admin-login.component';
import { AdminSignupComponent } from './components/Admin-SignUp/admin-signup/admin-signup.component';
import { AuthenticationGuard } from './components/Authguard/authentication.guard';
import { BookDetailComponent } from './components/BookDetail/book-detail/book-detail.component';
import { CartComponent } from './components/Cart/cart/cart.component';
import { DashboardAdminComponent } from './components/Dashboard/dashboard-admin/dashboard-admin.component';
import { FooterComponent } from './components/Footer/footer/footer.component';
import { GetallbookComponent } from './components/GetAllBook/getallbook/getallbook.component';
import { HeaderComponent } from './components/Header/header/header.component';
import { HomepageComponent } from './components/HomePage/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { PlaceOrderComponent } from './components/PlaceOrder/place-order/place-order.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpLoginComponent } from './components/SignUp-Login/sign-up-login/sign-up-login.component';
import { WishlistComponent } from './components/WishList/wishlist/wishlist.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'signup-login',component:SignUpLoginComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'book',component:GetallbookComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'',redirectTo:'signup-login',pathMatch:'full'},
  {path:'adminSignup',component:AdminSignupComponent},
  {path:'adminLogin',component:AdminLoginComponent},


   {path:'AdminDashboard',component:DashboardAdminComponent,canActivate:[AuthenticationGuard],
    children:[
                  {path:'adminSignup',component:AdminSignupComponent},
                  {path:'adminLogin',component:AdminLoginComponent},

              ]},



  {path:'home',component:HomepageComponent,canActivate:[AuthenticationGuard],
  
  children:[
    {path:'',redirectTo:'book',pathMatch:'full'},
    // {path:'header',component:HeaderComponent},
    // {path:'footer',component:FooterComponent},
    {path:'book',component:GetallbookComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'cart',component:CartComponent},
    {path:'placed-order',component:PlaceOrderComponent},
    
    {path:'bookdetails',component:BookDetailComponent},
    
   
  ]

}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
