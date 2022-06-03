import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAppointementComponent } from './details-appointement.component';

describe('DetailsAppointementComponent', () => {
  let component: DetailsAppointementComponent;
  let fixture: ComponentFixture<DetailsAppointementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAppointementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAppointementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
