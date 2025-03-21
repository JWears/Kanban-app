import { Routes } from '@angular/router';
import { KanbanBoardComponent } from './project-boards/kanban-board/kanban-board.component';
import { KanbanProjectComponent } from './project-boards/kanban-project/kanban-project.component';

export const routes: Routes = [
 {path: 'board', component: KanbanBoardComponent },
 { path: 'kanban-project', component: KanbanProjectComponent}
];
