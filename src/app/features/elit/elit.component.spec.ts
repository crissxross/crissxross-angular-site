import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElitComponent } from './elit.component';

describe('ElitComponent', () => {
  let component: ElitComponent;
  let fixture: ComponentFixture<ElitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
