import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatemodalComponent } from './updatemodal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormsModule }  from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';

class MockModalService {
  config : {
  
  }
constructor(){
this.config = {
  user : {
    data : {
      "name": "abc",
      "email": "abc@gmail.com"
    },
    index : 0
  }
}
}
}  

describe('UpdatemodalComponent', () => {
  let component: UpdatemodalComponent;
  let fixture: ComponentFixture<UpdatemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemodalComponent ],
      imports: [ FormsModule, ModalModule.forRoot() ],
      providers: [ { provide: BsModalService, useClass: MockModalService }, BsModalRef ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
