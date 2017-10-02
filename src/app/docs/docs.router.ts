import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { ClientComponent } from './client/client.component';
import { DocComponent } from './doc/doc.component';
import { AuthGuard } from '../auth.guard'; 

export const routes: Routes = [
    {
        path: "docs",
        component: DocComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [{
                    path: "",
                    component: StaffComponent
                },
                {
                    path: "client",
                    component: ClientComponent
                }]
            }
            
        ]

    }
]

export const DocRoutingModule = RouterModule.forRoot(routes);