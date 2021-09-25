import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialdisEaseComponent } from './socialdis-ease.component';

describe('SocialdisEaseComponent', () => {
  let component: SocialdisEaseComponent;
  let fixture: ComponentFixture<SocialdisEaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialdisEaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialdisEaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
