import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CxTrailRemixworxComponent } from './cx-trail-remixworx.component';

describe('CxTrailRemixworxComponent', () => {
  let component: CxTrailRemixworxComponent;
  let fixture: ComponentFixture<CxTrailRemixworxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CxTrailRemixworxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CxTrailRemixworxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
