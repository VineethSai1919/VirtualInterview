import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualInterviewInstructionComponent } from './virtual-interview-instruction.component';

describe('VirtualInterviewInstructionComponent', () => {
  let component: VirtualInterviewInstructionComponent;
  let fixture: ComponentFixture<VirtualInterviewInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VirtualInterviewInstructionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualInterviewInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
