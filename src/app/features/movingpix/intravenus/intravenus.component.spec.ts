import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntravenusComponent } from './intravenus.component';

describe('IntravenusComponent', () => {
  let component: IntravenusComponent;
  let fixture: ComponentFixture<IntravenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntravenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntravenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
