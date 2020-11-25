import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBlueButtonComponent } from './small-blue-button.component';

describe('SmallBlueButtonComponent', () => {
  let component: SmallBlueButtonComponent;
  let fixture: ComponentFixture<SmallBlueButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallBlueButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallBlueButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
