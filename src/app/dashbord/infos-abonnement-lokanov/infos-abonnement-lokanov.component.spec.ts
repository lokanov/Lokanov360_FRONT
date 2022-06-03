import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosAbonnementLokanovComponent } from './infos-abonnement-lokanov.component';

describe('InfosAbonnementLokanovComponent', () => {
  let component: InfosAbonnementLokanovComponent;
  let fixture: ComponentFixture<InfosAbonnementLokanovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosAbonnementLokanovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosAbonnementLokanovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
