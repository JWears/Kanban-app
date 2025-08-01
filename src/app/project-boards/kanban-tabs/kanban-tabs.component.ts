import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent, TabType } from '../project-types/tab-component.type';
import { Router } from '@angular/router';
import { AuthService, AuthUser } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kanban-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kanban-tabs.component.html',
  styleUrl: './kanban-tabs.component.less'
})
export class KanbanTabsComponent implements TabComponent, OnInit {
  id: string = "kanban-tabs";
  name: string = "Kanban Tabs";
  icon: string = "tabs-icon";
  component: TabType = TabType.KanbanAnalyticsComponent;
  showTab: boolean = true;

  currentUser$: Observable<AuthUser | null>;

  constructor(
    private readonly _router: Router,
    private authService: AuthService
  ) {
    this.currentUser$ = this.authService.currentUser$;
  }

  ngOnInit(): void {
    // Component initialization
  }

  navigateToBoard() {
    this._router.navigate(['/kanban-board']);
  }

  navigateToProject() {
    this._router.navigate(['/kanban-project']);
  }

  navigateToProjectList() {
    this._router.navigate(['/kanban-project-list']);
  }

  navigateToAnalytics() {
    this._router.navigate(['/kanban-analytics']);
  }

  navigateToGantt() {
    this._router.navigate(['/kanban-gantt']);
  }

  logout() {
    this.authService.logout();
  }

  onClick() {
    // Default implementation
  }
}
