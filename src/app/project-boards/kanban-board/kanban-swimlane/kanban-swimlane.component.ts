import { Component, Input } from '@angular/core';
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
  public swimlaneTitle: string = "Title";
  public swimlaneId: number = 0;

  @Input() storyTicketList: KanbanStoryTicketComponent[] = [];
  @Input() swimlaneComponent: KanbanSwimlaneComponent = {} as KanbanSwimlaneComponent;

  createTicket(){
    // what do we need for this
    // a http service to make a Create request
    // board id so ticket is assigned a parent automatically
    // a swimlane id so that it creates ticket in current swimlane
    // all ticket information
      // should I bring the user to the ticket UI similar to ADO
      // how would this be done
      // create a ticket then change url to the tickets Id
  }
}
