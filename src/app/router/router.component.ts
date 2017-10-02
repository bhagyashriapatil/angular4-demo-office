import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenLoginComponent } from '../template-driven-login/template-driven-login.component';
import { SignupComponent } from '../reactive-form-signup/signup.component';
import { HomeComponent } from '../home/home.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { AuthGuard } from '../auth.guard';

import { TooltipComponent } from '../ngx-bootstrap-demo/tooltip/tooltip.component';
import { ModalComponent } from '../ngx-bootstrap-demo/modal/modal.component';
import { TypeheadComponent } from '../ngx-bootstrap-demo/typehead/typehead.component';
import { DatepickerComponent } from '../ngx-bootstrap-demo/datepicker/datepicker.component';
import { CollapseComponent } from '../ngx-bootstrap-demo/collapse/collapse.component';
import { CarouselComponent } from '../ngx-bootstrap-demo/carousel/carousel.component';
import { AccordionComponent } from '../ngx-bootstrap-demo/accordion/accordion.component';
import { AlertComponent } from '../ngx-bootstrap-demo/alert/alert.component';
import { ButtonComponent } from '../ngx-bootstrap-demo/button/button.component';
import { DropdownComponent } from '../ngx-bootstrap-demo/dropdown/dropdown.component';
import { PaginationComponent } from '../ngx-bootstrap-demo/pagination/pagination.component';
import { ProgressbarComponent } from '../ngx-bootstrap-demo/progressbar/progressbar.component';
import { SortableComponent } from '../ngx-bootstrap-demo/sortable/sortable.component';
import { TabsComponent } from '../ngx-bootstrap-demo/tabs/tabs.component';
import { DocComponent } from '../docs/doc/doc.component';

export const appRoutes: Routes = [
    { path: 'login', component: TemplateDrivenLoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

    { path: 'tooltip', component: TooltipComponent },
    { path: 'modal', component: ModalComponent },
    { path: 'typehead', component: TypeheadComponent },
    { path: 'datepicker', component: DatepickerComponent },
    { path: 'collapse', component: CollapseComponent },
    { path: 'carousel', component: CarouselComponent },
    { path: 'accordion', component: AccordionComponent },
    { path: 'alert', component: AlertComponent },
    { path: 'ngxbutton', component: ButtonComponent },
    { path: 'ngxdropdown', component: DropdownComponent },
    { path: 'pagination', component: PaginationComponent },
    { path: 'progressbar', component: ProgressbarComponent },
    { path: 'sortable', component: SortableComponent },
    { path: 'tabs', component: TabsComponent },

    { path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    { path: '**', component: PagenotfoundComponent }
]

export const routing = RouterModule.forRoot(appRoutes)

