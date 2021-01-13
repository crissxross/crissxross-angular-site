import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoladesListComponent } from './accolades-list.component';

describe('AccoladesListComponent', () => {
  let component: AccoladesListComponent;
  let fixture: ComponentFixture<AccoladesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccoladesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccoladesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
