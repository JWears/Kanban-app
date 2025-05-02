import { Component } from '@angular/core';
import { KanbanStoryTicketComponent } from '../kanban-story-ticket/kanban-story-ticket.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kanban-swimlane',
  standalone: true,
  imports: [KanbanStoryTicketComponent, CommonModule],
  templateUrl: './kanban-swimlane.component.html',
  styleUrl: './kanban-swimlane.component.less'
})
export class KanbanSwimlaneComponent {

  storyTicketList: KanbanStoryTicketComponent[] = [ new KanbanStoryTicketComponent(), new KanbanStoryTicketComponent(), new KanbanStoryTicketComponent() ];

}
