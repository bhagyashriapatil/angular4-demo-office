import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeheadComponent } from './typehead.component';
import { TypeaheadModule } from 'ngx-bootstrap';
import { FormsModule }  from '@angular/forms';

describe('TypeheadComponent', () => {
  let component: TypeheadComponent;
  let fixture: ComponentFixture<TypeheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeheadComponent ],
      imports: [  TypeaheadModule.forRoot(), FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
