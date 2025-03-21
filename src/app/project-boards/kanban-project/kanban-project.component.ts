import { Component } from '@angular/core';
import { TabComponent } from '../project-types/tab-component.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kanban-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kanban-project.component.html',
  styleUrl: './kanban-project.component.less'
})
export class KanbanProjectComponent {
  tabList: TabComponent[] = [];

  changeTab(tabComponent: TabComponent) {

  }
}
