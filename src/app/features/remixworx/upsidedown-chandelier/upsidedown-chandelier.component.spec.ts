import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsidedownChandelierComponent } from './upsidedown-chandelier.component';

describe('UpsidedownChandelierComponent', () => {
  let component: UpsidedownChandelierComponent;
  let fixture: ComponentFixture<UpsidedownChandelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsidedownChandelierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsidedownChandelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
