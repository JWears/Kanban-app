import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanStoryTicketComponent } from './kanban-story-ticket.component';

describe('KanbanStoryTicketComponent', () => {
  let component: KanbanStoryTicketComponent;
  let fixture: ComponentFixture<KanbanStoryTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanStoryTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanStoryTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
