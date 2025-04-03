import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsmleditorComponent } from './ssmleditor.component';

describe('SsmleditorComponent', () => {
  let component: SsmleditorComponent;
  let fixture: ComponentFixture<SsmleditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SsmleditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsmleditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
