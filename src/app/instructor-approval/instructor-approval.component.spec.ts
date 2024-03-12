import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorApprovalComponent } from './instructor-approval.component';

describe('InstructorApprovalComponent', () => {
  let component: InstructorApprovalComponent;
  let fixture: ComponentFixture<InstructorApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorApprovalComponent]
    });
    fixture = TestBed.createComponent(InstructorApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
