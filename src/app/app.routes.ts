import { Routes } from '@angular/router';
import { KanbanBoardComponent } from './project-boards/kanban-board/kanban-board.component';
import { KanbanProjectComponent } from './project-boards/kanban-project/kanban-project.component';
import { UserLoginComponent } from './user-sign-in/user-login/user-login.component';
import { CreateProjectComponent } from './project-boards/create-project/create-project.component';
import { KanbanAnalyticsBoardComponent } from './project-boards/kanban-analytics-board/kanban-analytics-board.component';
import { KanbanGanttChartComponent } from './project-boards/kanban-gantt-chart/kanban-gantt-chart.component';
import { KanbanProjectListComponent } from './project-boards/kanban-project-list/kanban-project-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/kanban-project-list', pathMatch: 'full' },
  { path: 'kanban-board', component: KanbanBoardComponent },
  { path: 'kanban-project', component: KanbanProjectComponent },
  { path: 'kanban-analytics', component: KanbanAnalyticsBoardComponent },
  { path: 'kanban-gantt', component: KanbanGanttChartComponent },
  { path: 'kanban-project-list', component: KanbanProjectListComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'create-project', component: CreateProjectComponent },
  { path: '**', redirectTo: '/kanban-project-list' }
];
