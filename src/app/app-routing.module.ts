import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/Footer/footer/footer.component';
import { GetallbookComponent } from './components/GetAllBook/getallbook/getallbook.component';
import { HeaderComponent } from './components/Header/header/header.component';
import { HomepageComponent } from './components/HomePage/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
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
 



  {path:'home',component:HomepageComponent,
  children:[
    {path:'header',component:HeaderComponent},
    {path:'footer',component:FooterComponent},
    {path:'footer',component:FooterComponent},
    {path:'book',component:GetallbookComponent}
  ]

}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
