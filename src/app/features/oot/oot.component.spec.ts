import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OotComponent } from './oot.component';

describe('OotComponent', () => {
  let component: OotComponent;
  let fixture: ComponentFixture<OotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
