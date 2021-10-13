import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketviewerComponent } from './ticketviewer.component';

describe('TicketviewerComponent', () => {
  let component: TicketviewerComponent;
  let fixture: ComponentFixture<TicketviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
