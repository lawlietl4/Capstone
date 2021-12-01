import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketViewerComponent } from './ticketviewer.component';

describe('TicketviewerComponent', () => {
  let component: TicketViewerComponent;
  let fixture: ComponentFixture<TicketViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
