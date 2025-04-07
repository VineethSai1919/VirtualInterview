import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewInterviewComponent } from './review-interview.component';

describe('ReviewInterviewComponent', () => {
  let component: ReviewInterviewComponent;
  let fixture: ComponentFixture<ReviewInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewInterviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
