import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitVideoComponent } from './visit-video.component';

describe('VisitVideoComponent', () => {
  let component: VisitVideoComponent;
  let fixture: ComponentFixture<VisitVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
