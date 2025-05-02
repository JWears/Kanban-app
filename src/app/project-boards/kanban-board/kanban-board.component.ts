import { Component } from '@angular/core';
import { KanbanSwimlaneComponent } from "../kanban-swimlane/kanban-swimlane.component";
import { TabComponent } from '../project-types/tab-component.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [KanbanSwimlaneComponent, CommonModule],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.less'
})
export class KanbanBoardComponent implements TabComponent {
  id: string = 'kanban-board';
  name: string = 'Kanban Board';
  icon: string = 'icon-kanban-board';
  component: any = KanbanBoardComponent;
  isActive: boolean = false;
  isDisabled: boolean = false;
  onClick?: (() => void) | undefined;
  swimlaneList: KanbanSwimlaneComponent[] = [ new KanbanSwimlaneComponent(), new KanbanSwimlaneComponent(), new KanbanSwimlaneComponent() ];
}
