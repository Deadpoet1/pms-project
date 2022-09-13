import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { PensionServiceService} from '../pension-service.service';
import {HttpClient,HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    return await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [HttpClient, HttpHandler],
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Loader and Alert test",()=>{
   let mockService: jasmine.SpyObj<PensionServiceService>;
   mockService = jasmine.createSpyObj('PensionServiceService', ['getLogedIn']);
    mockService.getLogedIn.and.returnValue(new Observable((data)=>{
      data.next({"status":"NotFound"});
      data.complete();
    }));
    const comp=new LoginComponent(mockService, router);
    expect(comp.loader).toBeFalse();
    expect(comp.alert).toBeFalse();
    comp.loginSubmit()
    expect(comp.alert).toBeTrue();

  })
});
