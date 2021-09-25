import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WedrankComponent } from './wedrank.component';

describe('WedrankComponent', () => {
  let component: WedrankComponent;
  let fixture: ComponentFixture<WedrankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WedrankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WedrankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
