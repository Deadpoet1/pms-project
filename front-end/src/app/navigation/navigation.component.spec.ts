import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterLink } from '@angular/router';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it("Test Navigation",()=>{
      let comp=new NavigationComponent(router);
      if(sessionStorage.getItem("token"))
        expect(comp.login).toEqual("Logout");
      else
        expect(comp.login).toEqual("Login");

  })
});
