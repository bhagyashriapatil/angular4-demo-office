import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import { TemplateDrivenLoginComponent } from './template-driven-login/template-driven-login.component';
// import { SignupComponent } from './signup/signup.component';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title:string = 'Angular 4 Demo';

  constructor(private router: Router){}

  logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  ngOnInit(){
    
  }

}


