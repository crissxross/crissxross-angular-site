import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailspinComponent } from './tailspin.component';

describe('TailspinComponent', () => {
  let component: TailspinComponent;
  let fixture: ComponentFixture<TailspinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailspinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TailspinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
