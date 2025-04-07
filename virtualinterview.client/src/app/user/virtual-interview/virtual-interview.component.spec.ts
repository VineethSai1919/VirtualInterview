import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualInterviewComponent } from './virtual-interview.component';

describe('VirtualInterviewComponent', () => {
  let component: VirtualInterviewComponent;
  let fixture: ComponentFixture<VirtualInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VirtualInterviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
