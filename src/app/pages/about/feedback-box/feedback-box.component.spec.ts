import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackBoxComponent } from './feedback-box.component';

describe('FeedbackBoxComponent', () => {
  let component: FeedbackBoxComponent;
  let fixture: ComponentFixture<FeedbackBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
