import { Component } from '@angular/core';
import { TabComponent } from '../project-types/tab-component.type';
import { CommonModule } from '@angular/common';
import { KanbanBoardComponent } from '../kanban-board/kanban-board.component';
import { KanbanGanttChartComponent } from '../kanban-gantt-chart/kanban-gantt-chart.component';
import { KanbanAnalyticsBoardComponent } from '../kanban-analytics-board/kanban-analytics-board.component';

@Component({
  selector: 'app-kanban-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kanban-project.component.html',
  styleUrl: './kanban-project.component.less'
})
export class KanbanProjectComponent {
  tabList: TabComponent[] = [ new KanbanBoardComponent(), new KanbanGanttChartComponent(), new KanbanAnalyticsBoardComponent() ];

  changeTab(tabComponent: TabComponent) {

  }
}
