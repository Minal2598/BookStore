import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/User-Service/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  loginForm! : FormGroup;

  hide: boolean = true;
  constructor(private userService: UserService, private router: Router,private snackbar: MatSnackBar,private formBuilder: FormBuilder,) { }

  ngOnInit(): void {

    this.loginForm= this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });
  }


  submit(){
    
    console.log("on submit function calling for login",this.loginForm.value);
    let logindata = {

      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      service: "advance"

    };

    console.log("loginRequest",logindata)
    this.userService.adminLogin(logindata).subscribe(
      
      (respone:any) => {console.log("login Response",respone);

      localStorage.setItem("token",respone.result.accessToken);
      
      this.router.navigateByUrl('/adminDashboard'),
      this.snackbar.open("Login successfull", '', { duration: 2000,});

      
    },
    (error:any) => { 

      console.log(error)
      this.snackbar.open("Login UnSuccessfull", 'try Again', { duration: 2000, });
    });
  }
  get f() { return this.loginForm.controls; }
}
