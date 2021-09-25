import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RememoriComponent } from './rememori.component';

describe('RememoriComponent', () => {
  let component: RememoriComponent;
  let fixture: ComponentFixture<RememoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RememoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RememoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
