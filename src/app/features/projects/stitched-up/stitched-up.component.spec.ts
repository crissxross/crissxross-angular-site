import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StitchedUpComponent } from './stitched-up.component';

describe('StitchedUpComponent', () => {
  let component: StitchedUpComponent;
  let fixture: ComponentFixture<StitchedUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StitchedUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StitchedUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
