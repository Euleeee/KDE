import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBlueButtonComponent } from './big-blue-button.component';

describe('BigBlueButtonComponent', () => {
  let component: BigBlueButtonComponent;
  let fixture: ComponentFixture<BigBlueButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigBlueButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigBlueButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
