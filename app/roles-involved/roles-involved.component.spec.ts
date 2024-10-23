import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesInvolvedComponent } from './roles-involved.component';

describe('RolesInvolvedComponent', () => {
  let component: RolesInvolvedComponent;
  let fixture: ComponentFixture<RolesInvolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesInvolvedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesInvolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
