import { TestBed, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let router: Router;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ FormsModule,
                 RouterTestingModule
               ]
    }).compileComponents();

    router = TestBed.get(Router); 
    router.initialNavigation();

  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


});
