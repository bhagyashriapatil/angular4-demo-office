import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { PopoverModule, TooltipModule, ModalModule, TypeaheadModule, CollapseModule,
  CarouselModule, AccordionModule, AlertModule, ButtonsModule, BsDropdownModule, PaginationModule,
  ProgressbarModule, SortableModule, TabsModule } from 'ngx-bootstrap';

import { appRoutes } from './router/router.component';

import { AuthGuard } from './auth.guard';
import { ListResolver } from './router/list.resolver';

import { AppComponent } from './app.component';
import { TemplateDrivenLoginComponent } from './template-driven-login/template-driven-login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './reactive-form-signup/signup.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { DocsModule } from './docs/docs.module';

import { LoginService } from './service/login.service';

import { StarComponent } from './star/star.component';

import { TooltipComponent } from './ngx-bootstrap-demo/tooltip/tooltip.component';
import { ModalComponent } from './ngx-bootstrap-demo/modal/modal.component';
import { TypeheadComponent } from './ngx-bootstrap-demo/typehead/typehead.component';
import { DatepickerComponent } from './ngx-bootstrap-demo/datepicker/datepicker.component';
import { CollapseComponent } from './ngx-bootstrap-demo/collapse/collapse.component';
import { CarouselComponent } from './ngx-bootstrap-demo/carousel/carousel.component';
import { AccordionComponent } from './ngx-bootstrap-demo/accordion/accordion.component';

import { AlertComponent } from './ngx-bootstrap-demo/alert/alert.component';
import { ButtonComponent } from './ngx-bootstrap-demo/button/button.component';
import { DropdownComponent } from './ngx-bootstrap-demo/dropdown/dropdown.component';
import { PaginationComponent } from './ngx-bootstrap-demo/pagination/pagination.component';
import { ProgressbarComponent } from './ngx-bootstrap-demo/progressbar/progressbar.component';
import { SortableComponent } from './ngx-bootstrap-demo/sortable/sortable.component';
import { TabsComponent } from './ngx-bootstrap-demo/tabs/tabs.component';
import { UpdatemodalComponent } from './home/modals/updatemodal/updatemodal.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenLoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    HomeComponent,
    StarComponent,
    TooltipComponent,
    // ModalContentComponent,
    ModalComponent,
    TypeheadComponent,
    DatepickerComponent,
    CollapseComponent,
    CarouselComponent,
    AccordionComponent,
    AlertComponent,
    ButtonComponent,
    DropdownComponent,
    PaginationComponent,
    ProgressbarComponent,
    SortableComponent,
    TabsComponent,
    UpdatemodalComponent
  ],
  // when we use external component
  // so it compile by angular so we nee to declare that compnent using entryComponent
  entryComponents: [
    UpdatemodalComponent
  ],
  imports: [
    BrowserModule,
    DocsModule,
    // NgxModule,
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    TooltipModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [ ListResolver, LoginService, AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
