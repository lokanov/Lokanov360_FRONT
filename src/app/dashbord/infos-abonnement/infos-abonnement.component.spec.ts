import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosAbonnementComponent } from './infos-abonnement.component';

describe('InfosAbonnementComponent', () => {
  let component: InfosAbonnementComponent;
  let fixture: ComponentFixture<InfosAbonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosAbonnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosAbonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
