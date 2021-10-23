import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../../login/login.component';
import { SignUpComponent } from '../../sign-up/sign-up.component';

import { SignUpLoginComponent } from './sign-up-login.component';

describe('SignUpLoginComponent', () => {
  let component: SignUpLoginComponent;
  let fixture: ComponentFixture<SignUpLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpLoginComponent,
                      SignUpComponent,
                      LoginComponent 
                    ],
       imports:[
                 BrowserAnimationsModule,
      
               ],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
