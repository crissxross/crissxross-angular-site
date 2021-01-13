import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightsComponent } from './heights.component';

describe('HeightsComponent', () => {
  let component: HeightsComponent;
  let fixture: ComponentFixture<HeightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
