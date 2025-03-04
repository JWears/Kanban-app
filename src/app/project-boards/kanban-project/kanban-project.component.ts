import { Component } from '@angular/core';
import { TabComponent } from '../project-types/tab-component.type';

@Component({
  selector: 'app-kanban-project',
  standalone: true,
  imports: [],
  templateUrl: './kanban-project.component.html',
  styleUrl: './kanban-project.component.less'
})
export class KanbanProjectComponent {
  tabList: TabComponent[] = [];

  changeTab(tabComponent: TabComponent) {

  }
}
