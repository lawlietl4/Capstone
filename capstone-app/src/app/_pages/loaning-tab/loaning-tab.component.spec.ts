import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaningTabComponent } from './loaning-tab.component';

describe('LoaningTabComponent', () => {
  let component: LoaningTabComponent;
  let fixture: ComponentFixture<LoaningTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaningTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaningTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
