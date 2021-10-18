import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAdderComponent } from './student-adder.component';

describe('StudentAdderComponent', () => {
  let component: StudentAdderComponent;
  let fixture: ComponentFixture<StudentAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
