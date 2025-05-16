import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kanban-story-ticket',
  standalone: true,
  imports: [],
  templateUrl: './kanban-story-ticket.component.html',
  styleUrl: './kanban-story-ticket.component.less'
})
export class KanbanStoryTicketComponent {

  public readonly ticketId: number = 0;
  public ticketTitle: string = "";
  public ticketDescription: string = "";
  public storyPoint: number = 0;
  @Input() swimlaneId: number = 0;
  @Input() ticketComponent: KanbanStoryTicketComponent | null = null;
}
