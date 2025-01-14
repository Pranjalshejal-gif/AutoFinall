import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BAComponent } from './ba.component';

describe('BAComponent', () => {
  let component: BAComponent;
  let fixture: ComponentFixture<BAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
