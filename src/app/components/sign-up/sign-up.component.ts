import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/User-Service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hide =true;
  signupForm! : FormGroup

  constructor(private formBuilder:FormBuilder,private userService:UserService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]  
  
     
});
  }
  onSubmit(){

    let data={

      fullName: this.signupForm.value.fullName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      mobileNumber: this.signupForm.value.mobileNumber,
      service: "advance"

    }

    console.log(data);
    this. userService.signUpUser(data).subscribe((response:any) => { 
      console.log(response);
      
      this.snackBar.open('Successfully Signed-Up','',{duration:2000,}
      ); 
    },

      (error: any) => {
        console.log(error);
      
        this.snackBar.open('Error at SignUP','try Again',{duration:2000,}
        );
      });

  }

  get f() { return this.signupForm.controls;}


}
