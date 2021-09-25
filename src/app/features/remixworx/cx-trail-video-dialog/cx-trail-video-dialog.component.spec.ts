import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CxTrailVideoDialogComponent } from './cx-trail-video-dialog.component';

describe('CxTrailVideoDialogComponent', () => {
  let component: CxTrailVideoDialogComponent;
  let fixture: ComponentFixture<CxTrailVideoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CxTrailVideoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CxTrailVideoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
