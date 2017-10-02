import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SortableModule } from 'ngx-bootstrap';
import { SortableComponent } from './sortable.component';
import { FormsModule }  from '@angular/forms';

describe('SortableComponent', () => {
  let component: SortableComponent;
  let fixture: ComponentFixture<SortableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortableComponent ],
      imports: [ SortableModule.forRoot(), FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
