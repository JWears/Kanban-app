import { Component } from '@angular/core';
import { TabComponent } from '../project-types/tab-component.type';

@Component({
  selector: 'app-kanban-analytics-board',
  standalone: true,
  imports: [],
  templateUrl: './kanban-analytics-board.component.html',
  styleUrl: './kanban-analytics-board.component.less'
})
export class KanbanAnalyticsBoardComponent implements TabComponent {
  id: string = 'kanban-analytics-board';
  name: string = 'Analytics Board';
  icon: string = 'icon-analytics-board';
  component: any = KanbanAnalyticsBoardComponent;
  isActive: boolean = false;
  isDisabled: boolean = false;
  onClick?: (() => void) | undefined;

}
