import { Component } from '@angular/core';
import { TabComponent } from '../project-types/tab-component.type';

@Component({
  selector: 'app-kanban-gantt-chart',
  standalone: true,
  imports: [],
  templateUrl: './kanban-gantt-chart.component.html',
  styleUrl: './kanban-gantt-chart.component.less'
})
export class KanbanGanttChartComponent implements TabComponent {
  id: string = 'kanban-gantt-chart';
  name: string = 'Gantt Chart';
  icon: string = 'icon-gantt-chart';
  component: any = KanbanGanttChartComponent;
  isActive: boolean = false;
  isDisabled: boolean = false;
  onClick?: (() => void) | undefined;

}
