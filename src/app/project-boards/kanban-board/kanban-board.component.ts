import { Component } from '@angular/core';
import { KanbanSwimlaneComponent } from "../kanban-swimlane/kanban-swimlane.component";
import { TabComponent } from '../project-types/tab-component.type';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [KanbanSwimlaneComponent],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.less'
})
export class KanbanBoardComponent implements TabComponent {
  swimlaneList: KanbanSwimlaneComponent[] = [];
}
