import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutoftouchComponent } from './outoftouch.component';

describe('OutoftouchComponent', () => {
  let component: OutoftouchComponent;
  let fixture: ComponentFixture<OutoftouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutoftouchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutoftouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
