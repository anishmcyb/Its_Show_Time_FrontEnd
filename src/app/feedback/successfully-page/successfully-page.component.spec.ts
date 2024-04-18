import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullyPageComponent } from './successfully-page.component';

describe('SuccessfullyPageComponent', () => {
  let component: SuccessfullyPageComponent;
  let fixture: ComponentFixture<SuccessfullyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessfullyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessfullyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
