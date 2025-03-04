import { Component } from '@angular/core';
import { KanbanStoryTicketComponent } from '../kanban-story-ticket/kanban-story-ticket.component';

@Component({
  selector: 'app-kanban-swimlane',
  standalone: true,
  imports: [KanbanStoryTicketComponent],
  templateUrl: './kanban-swimlane.component.html',
  styleUrl: './kanban-swimlane.component.less'
})
export class KanbanSwimlaneComponent {

  storyTicketList: KanbanStoryTicketComponent[] = [];

}
