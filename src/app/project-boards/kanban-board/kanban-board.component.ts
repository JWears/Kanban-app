import { Component } from '@angular/core';
import { TabComponent } from '../project-types/tab-component.type';
import { CommonModule } from '@angular/common';
import { KanbanSwimlaneComponent } from './kanban-swimlane/kanban-swimlane.component';
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
  showTab: boolean = false;
  id: string = 'kanban-board';
  name: string = 'Kanban Board';
  icon: string = 'icon-kanban-board';
  component: any = KanbanBoardComponent;
  isActive: boolean = false;
  isDisabled: boolean = false;
  swimlaneList: KanbanSwimlaneComponent[] = [ new KanbanSwimlaneComponent(), new KanbanSwimlaneComponent(), new KanbanSwimlaneComponent() ];

  public onClick(): void{
    // call data for board to load
      // what information would be provided? id, board name, list of swimlanes? list of tickets? // list of board users
    // change url
    // cache data to prevent calls
  };

}
