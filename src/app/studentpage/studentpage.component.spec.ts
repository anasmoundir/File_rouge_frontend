import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpageComponent } from './studentpage.component';

describe('StudentpageComponent', () => {
  let component: StudentpageComponent;
  let fixture: ComponentFixture<StudentpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentpageComponent]
    });
    fixture = TestBed.createComponent(StudentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
