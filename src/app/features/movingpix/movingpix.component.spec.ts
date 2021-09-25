import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingpixComponent } from './movingpix.component';

describe('MovingpixComponent', () => {
  let component: MovingpixComponent;
  let fixture: ComponentFixture<MovingpixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingpixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingpixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
