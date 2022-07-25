import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberByCatgeoryComponent } from './number-by-catgeory.component';

describe('NumberByCatgeoryComponent', () => {
  let component: NumberByCatgeoryComponent;
  let fixture: ComponentFixture<NumberByCatgeoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberByCatgeoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberByCatgeoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
