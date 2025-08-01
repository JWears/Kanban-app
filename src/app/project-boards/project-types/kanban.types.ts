export interface KanbanTicket {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  assignee: string;
  createdAt: Date;
  updatedAt: Date;
  dueDate?: Date;
  storyPoints?: number;
  swimlaneId: number;
  tags?: string[];
}

export interface KanbanSwimlane {
  id: number;
  title: string;
  order: number;
  tickets: KanbanTicket[];
  color?: string;
}

export interface KanbanBoard {
  id: string;
  title: string;
  description?: string;
  swimlanes: KanbanSwimlane[];
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Developer' | 'Project Manager' | 'Designer' | 'Tester' | 'Admin';
  avatar?: string;
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  users: User[];
  boards: KanbanBoard[];
  createdAt: Date;
  updatedAt: Date;
}

export type TicketPriority = 'Low' | 'Medium' | 'High' | 'Critical';
export type UserRole = 'Developer' | 'Project Manager' | 'Designer' | 'Tester' | 'Admin';
