import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordLokanovHomeComponent } from './dashbord-lokanov-home.component';

describe('DashbordLokanovHomeComponent', () => {
  let component: DashbordLokanovHomeComponent;
  let fixture: ComponentFixture<DashbordLokanovHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordLokanovHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordLokanovHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
