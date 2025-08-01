import { Component, Input, Output, EventEmitter } from '@angular/core';
import { KanbanStoryTicketComponent } from '../kanban-story-ticket/kanban-story-ticket.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KanbanSwimlane, KanbanTicket } from '../../project-types/kanban.types';
import { KanbanBoardService } from '../../../services/kanban-board.service';

@Component({
  selector: 'app-kanban-swimlane',
  standalone: true,
  imports: [KanbanStoryTicketComponent, CommonModule, FormsModule],
  templateUrl: './kanban-swimlane.component.html',
  styleUrl: './kanban-swimlane.component.less'
})
export class KanbanSwimlaneComponent {
  @Input() swimlane!: KanbanSwimlane;
  @Output() ticketCreated = new EventEmitter<void>();
  @Output() ticketMoved = new EventEmitter<void>();

  showCreateForm: boolean = false;
  newTicket: Partial<KanbanTicket> = {};

  constructor(private kanbanBoardService: KanbanBoardService) {}

  createTicket(): void {
    this.showCreateForm = true;
    this.newTicket = {
      title: '',
      description: '',
      priority: 'Medium',
      assignee: '',
      swimlaneId: this.swimlane.id,
      status: this.swimlane.title
    };
  }

  saveTicket(): void {
    if (this.newTicket.title && this.newTicket.description) {
      this.kanbanBoardService.createTicket(this.newTicket as Omit<KanbanTicket, 'id' | 'createdAt' | 'updatedAt'>)
        .subscribe({
          next: (ticket) => {
            this.swimlane.tickets.push(ticket);
            this.ticketCreated.emit();
            this.cancelCreate();
          },
          error: (err) => {
            console.error('Error creating ticket:', err);
          }
        });
    }
  }

  cancelCreate(): void {
    this.showCreateForm = false;
    this.newTicket = {};
  }

  onTicketUpdated(): void {
    this.ticketMoved.emit();
  }
}
