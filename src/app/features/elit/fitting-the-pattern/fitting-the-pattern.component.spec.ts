import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FittingThePatternComponent } from './fitting-the-pattern.component';

describe('FittingThePatternComponent', () => {
  let component: FittingThePatternComponent;
  let fixture: ComponentFixture<FittingThePatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FittingThePatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FittingThePatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
