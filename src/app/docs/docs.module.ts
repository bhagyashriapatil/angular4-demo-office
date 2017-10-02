import { NgModule } from '@angular/core';
import { DocRoutingModule } from './docs.router';
import { BrowserModule } from '@angular/platform-browser';
import { StaffComponent } from './staff/staff.component';
import { ClientComponent } from './client/client.component';
import { DocComponent } from './doc/doc.component';
import { DocListService } from '../docs/service/doc-list.service'

@NgModule({
 declarations: [
     StaffComponent,
     ClientComponent,
     DocComponent
 ],
 imports: [
    BrowserModule, DocRoutingModule 
 ],
 providers: [ DocListService ]
})

export class DocsModule {
    
}