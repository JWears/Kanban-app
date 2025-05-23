import { Component } from '@angular/core';
import { TabComponent } from '../project-types/tab-component.type';
import { CommonModule } from '@angular/common';
import { KanbanSwimlaneComponent } from './kanban-swimlane/kanban-swimlane.component';
import { KanbanStoryTicketComponent } from './kanban-story-ticket/kanban-story-ticket.component';
@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [KanbanSwimlaneComponent, CommonModule],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.less'
})
export class KanbanBoardComponent implements TabComponent {
  constructor() {
  }
  showTab: boolean = true;
  id: string = 'kanban-board';
  name: string = 'Kanban Board';
  icon: string = 'icon-kanban-board';
  component: any = KanbanBoardComponent;
  isActive: boolean = false;
  isDisabled: boolean = false;

  private mockTicketData = [
      {
        ticketTitle: "Title1",
        ticketId: 101,
        ticketRegisteredSwimlaneId: 101,
      } as KanbanStoryTicketComponent,
      {
        ticketTitle: "Title2",
        ticketId: 102,
        ticketRegisteredSwimlaneId: 101,
      } as KanbanStoryTicketComponent,
      {
        ticketTitle: "Title3",
        ticketId: 103,
        ticketRegisteredSwimlaneId: 102,
      } as KanbanStoryTicketComponent
    ];

  mockSwimlaneData = [
    {
      swimlaneTitle: "Title1",
      swimlaneId: 101,
    } as KanbanSwimlaneComponent,
    {
      swimlaneTitle: "Title2",
      swimlaneId: 102,
    } as KanbanSwimlaneComponent,
    {
      swimlaneTitle: "Title3",
      swimlaneId: 103,
    } as KanbanSwimlaneComponent,
  ];
  swimlaneList: KanbanSwimlaneComponent[] = this.mockSwimlaneData;
  storyTicketList: KanbanStoryTicketComponent[] = this.mockTicketData;

  public onClick(): void{
    // call data for board to load
      // what information would be provided? id, board name, list of swimlanes? list of tickets? // list of board users
    // change url
    // cache data to prevent calls
  };

}
