import { Routes } from '@angular/router';
import { KanbanBoardComponent } from './project-boards/kanban-board/kanban-board.component';
import { KanbanProjectComponent } from './project-boards/kanban-project/kanban-project.component';
import { UserLoginComponent } from './user-sign-in/user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-in/user-sign-up/user-sign-up.component';
import { CreateProjectComponent } from './project-boards/create-project/create-project.component';
import { KanbanAnalyticsBoardComponent } from './project-boards/kanban-analytics-board/kanban-analytics-board.component';
import { KanbanGanttChartComponent } from './project-boards/kanban-gantt-chart/kanban-gantt-chart.component';
import { KanbanProjectListComponent } from './project-boards/kanban-project-list/kanban-project-list.component';
import { AuthGuard, GuestGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/user-login', pathMatch: 'full' },
  
  // Public routes (only accessible when not logged in)
  { path: 'user-login', component: UserLoginComponent, canActivate: [GuestGuard] },
  { path: 'user-register', component: UserSignUpComponent, canActivate: [GuestGuard] },
  
  // Protected routes (require authentication)
  { path: 'kanban-board', component: KanbanBoardComponent, canActivate: [AuthGuard] },
  { path: 'kanban-project', component: KanbanProjectComponent, canActivate: [AuthGuard] },
  { path: 'kanban-analytics', component: KanbanAnalyticsBoardComponent, canActivate: [AuthGuard] },
  { path: 'kanban-gantt', component: KanbanGanttChartComponent, canActivate: [AuthGuard] },
  { path: 'kanban-project-list', component: KanbanProjectListComponent, canActivate: [AuthGuard] },
  { path: 'create-project', component: CreateProjectComponent, canActivate: [AuthGuard] },
  
  { path: '**', redirectTo: '/user-login' }
];
