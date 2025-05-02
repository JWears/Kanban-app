import { Routes } from '@angular/router';
import { KanbanBoardComponent } from './project-boards/kanban-board/kanban-board.component';
import { KanbanProjectComponent } from './project-boards/kanban-project/kanban-project.component';
import { UserLoginComponent } from './user-sign-in/user-login/user-login.component';
import { CreateProjectComponent } from './project-boards/create-project/create-project.component';

export const routes: Routes = [
  { path: 'kanban-board', component: KanbanBoardComponent },
  { path: 'kanban-project', component: KanbanProjectComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'create-project', component: CreateProjectComponent },
];
