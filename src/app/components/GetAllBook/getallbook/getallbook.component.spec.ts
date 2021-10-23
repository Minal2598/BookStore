import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { GetallbookComponent } from './getallbook.component';

describe('GetallbookComponent', () => {
  let component: GetallbookComponent;
  let fixture: ComponentFixture<GetallbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallbookComponent ],
      imports:[
                RouterTestingModule,
                HttpClientModule,
                MatSnackBarModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
