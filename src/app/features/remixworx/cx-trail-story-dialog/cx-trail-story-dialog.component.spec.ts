import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CxTrailStoryDialogComponent } from './cx-trail-story-dialog.component';

describe('CxTrailStoryDialogComponent', () => {
  let component: CxTrailStoryDialogComponent;
  let fixture: ComponentFixture<CxTrailStoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CxTrailStoryDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CxTrailStoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
