import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DocListService } from '../service/doc-list.service'
import { StaffComponent } from './staff.component';

describe('StaffComponent', () => {
  let component: StaffComponent;
  let fixture: ComponentFixture<StaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffComponent ],
      providers: [ DocListService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
