import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/User-Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm! : FormGroup
  constructor( private formBuilder: FormBuilder, private userService:UserService,private snackBar:MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
       
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      // confirmPassword: ['', Validators.required]
  
     
});

  }
  onSubmit(){
    
    console.log("on submit function calling for login",this.loginForm.value);
    let request = {

      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      

    };

    console.log("loginRequest",request)
    this.userService.loginUser(request).subscribe(
      
      (respone:any) => {console.log("login Response",respone);

      localStorage.setItem("token",respone.result.accessToken);
      
      this.snackBar.open("Login successfull", '', { duration: 2000,});
    },
    (error:any) => { 

      console.log(error)
      this.snackBar.open("Login UnSuccessfull", 'try Again', { duration: 2000, });
    });
  }
  get f() { return this.loginForm.controls; }

}
