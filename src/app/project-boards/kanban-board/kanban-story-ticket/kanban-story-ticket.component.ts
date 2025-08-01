import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { KanbanTicket } from '../../project-types/kanban.types';

@Component({
  selector: 'app-kanban-story-ticket',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './kanban-story-ticket.component.html',
  styleUrl: './kanban-story-ticket.component.less'
})
export class KanbanStoryTicketComponent {
  @Input() ticket!: KanbanTicket;
  @Output() ticketUpdated = new EventEmitter<void>();

  isEditing: boolean = false;

  onTicketClick(): void {
    // Navigate to ticket details or open in modal
    console.log('Ticket clicked:', this.ticket.id);
  }

  editTicket(): void {
    this.isEditing = true;
  }

  saveTicket(): void {
    this.isEditing = false;
    this.ticketUpdated.emit();
  }

  getPriorityClass(): string {
    switch (this.ticket.priority) {
      case 'Critical': return 'priority-critical';
      case 'High': return 'priority-high';
      case 'Medium': return 'priority-medium';
      case 'Low': return 'priority-low';
      default: return 'priority-medium';
    }
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
