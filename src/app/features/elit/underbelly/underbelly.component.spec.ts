import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderbellyComponent } from './underbelly.component';

describe('UnderbellyComponent', () => {
  let component: UnderbellyComponent;
  let fixture: ComponentFixture<UnderbellyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderbellyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderbellyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
