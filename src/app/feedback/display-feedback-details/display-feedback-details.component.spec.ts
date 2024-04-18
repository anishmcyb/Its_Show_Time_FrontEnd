import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFeedbackDetailsComponent } from './display-feedback-details.component';

describe('DisplayFeedbackDetailsComponent', () => {
  let component: DisplayFeedbackDetailsComponent;
  let fixture: ComponentFixture<DisplayFeedbackDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayFeedbackDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayFeedbackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
