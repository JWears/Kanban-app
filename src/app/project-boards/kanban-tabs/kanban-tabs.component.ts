import { Component } from '@angular/core';
import { TabComponent, TabType } from '../project-types/tab-component.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kanban-tabs',
  standalone: true,
  imports: [],
  templateUrl: './kanban-tabs.component.html',
  styleUrl: './kanban-tabs.component.less'
})
export class KanbanTabsComponent implements TabComponent {
  constructor(private readonly _router: Router) {

  }
  id: string = "kanban-tabs";
  name: string = "Kanban Tabs";
  icon: string = "tabs-icon";
  component: TabType = TabType.KanbanAnalyticsComponent;
  showTab: boolean = true;

  navigateToBoard() {
    this._router.navigate(['/kanban-board']);
  }

  navigateToProject() {
    this._router.navigate(['/kanban-project']);
  }

  navigateToAnalytics() {
    this._router.navigate(['/kanban-analytics']);
  }

  navigateToGantt() {
    this._router.navigate(['/kanban-gantt']);
  }

  onClick() {
    // Default implementation
  }
}
