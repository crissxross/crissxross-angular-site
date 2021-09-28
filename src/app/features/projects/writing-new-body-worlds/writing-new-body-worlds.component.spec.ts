import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingNewBodyWorldsComponent } from './writing-new-body-worlds.component';

describe('WritingNewBodyWorldsComponent', () => {
  let component: WritingNewBodyWorldsComponent;
  let fixture: ComponentFixture<WritingNewBodyWorldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritingNewBodyWorldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingNewBodyWorldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
