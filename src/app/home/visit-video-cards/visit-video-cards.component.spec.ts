import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitVideoCardsComponent } from './visit-video-cards.component';

describe('VisitVideoCardsComponent', () => {
  let component: VisitVideoCardsComponent;
  let fixture: ComponentFixture<VisitVideoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitVideoCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitVideoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
