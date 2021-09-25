import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemixworxComponent } from './remixworx.component';

describe('RemixworxComponent', () => {
  let component: RemixworxComponent;
  let fixture: ComponentFixture<RemixworxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemixworxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemixworxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
