import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../project-types/tab-component.type';
import { CommonModule } from '@angular/common';
import { KanbanSwimlaneComponent } from './kanban-swimlane/kanban-swimlane.component';
import { KanbanTabsComponent } from '../kanban-tabs/kanban-tabs.component';
import { KanbanBoardService } from '../../services/kanban-board.service';
import { KanbanBoard, KanbanSwimlane } from '../project-types/kanban.types';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [KanbanSwimlaneComponent, KanbanTabsComponent, CommonModule],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.less'
})
export class KanbanBoardComponent implements TabComponent, OnInit {

  constructor(private kanbanBoardService: KanbanBoardService) {}

  showTab: boolean = true;
  id: string = 'kanban-board';
  name: string = 'Kanban Board';
  icon: string = 'icon-kanban-board';
  component: any = KanbanBoardComponent;
  isActive: boolean = false;
  isDisabled: boolean = false;

  board: KanbanBoard | null = null;
  swimlanes: KanbanSwimlane[] = [];
  isLoading: boolean = true;
  error: string | null = null;

  ngOnInit(): void {
    this.loadBoardData();
  }

  private loadBoardData(): void {
    this.isLoading = true;
    this.error = null;

    // TODO: Get actual project and board IDs from route params or service
    this.kanbanBoardService.getKanbanBoard('project-1', 'board-1').subscribe({
      next: (board) => {
        this.board = board;
        this.swimlanes = board.swimlanes;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load board data';
        this.isLoading = false;
        console.error('Error loading board:', err);
      }
    });
  }

  public loadBoard(): void {
    this.loadBoardData();
  }

  public onTicketCreated(): void {
    // Refresh the board when a new ticket is created
    this.loadBoardData();
  }

  public onTicketMoved(): void {
    // Refresh the board when a ticket is moved
    this.loadBoardData();
  }

  public onClick(): void {
    // Legacy method - could be used for board-level actions
  }
}
