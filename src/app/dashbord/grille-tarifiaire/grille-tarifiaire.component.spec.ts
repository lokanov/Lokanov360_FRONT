import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrilleTarifiaireComponent } from './grille-tarifiaire.component';

describe('GrilleTarifiaireComponent', () => {
  let component: GrilleTarifiaireComponent;
  let fixture: ComponentFixture<GrilleTarifiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrilleTarifiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrilleTarifiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
