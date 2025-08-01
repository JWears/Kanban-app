import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { KanbanBoard, KanbanTicket, KanbanSwimlane } from "../project-boards/project-types/kanban.types";

@Injectable({providedIn: "root"})
export class KanbanBoardService {
  private baseUrl = ""; // TODO: Configure API base URL

  constructor(private readonly _httpClient: HttpClient) {}

  public getKanbanBoard(projectId: string, boardId: string): Observable<KanbanBoard> {
    // For now, return mock data
    return of(this.getMockBoard());
  }

  public createTicket(ticket: Omit<KanbanTicket, 'id' | 'createdAt' | 'updatedAt'>): Observable<KanbanTicket> {
    // TODO: Implement HTTP POST
    const newTicket: KanbanTicket = {
      ...ticket,
      id: Date.now(), // Temporary ID generation
      createdAt: new Date(),
      updatedAt: new Date()
    };
    return of(newTicket);
  }

  public updateTicket(ticketId: number, updates: Partial<KanbanTicket>): Observable<KanbanTicket> {
    // TODO: Implement HTTP PUT/PATCH
    return of({} as KanbanTicket);
  }

  public moveTicket(ticketId: number, newSwimlaneId: number): Observable<KanbanTicket> {
    // TODO: Implement ticket movement
    return of({} as KanbanTicket);
  }

  public deleteTicket(ticketId: number): Observable<boolean> {
    // TODO: Implement HTTP DELETE
    return of(true);
  }

  private getMockBoard(): KanbanBoard {
    return {
      id: "board-1",
      title: "Sample Kanban Board",
      description: "A sample board for development",
      projectId: "project-1",
      createdAt: new Date('2023-10-01'),
      updatedAt: new Date(),
      swimlanes: [
        {
          id: 1,
          title: "To Do",
          order: 1,
          color: "#e3f2fd",
          tickets: [
            {
              id: 1,
              title: "Implement user authentication",
              description: "Create a user authentication system using JWT.",
              status: "To Do",
              priority: "High",
              assignee: "John Doe",
              createdAt: new Date("2023-10-01T10:00:00Z"),
              updatedAt: new Date("2023-10-01T10:00:00Z"),
              dueDate: new Date("2023-10-10T23:59:59Z"),
              swimlaneId: 1,
              storyPoints: 8
            }
          ]
        },
        {
          id: 2,
          title: "In Progress",
          order: 2,
          color: "#fff3e0",
          tickets: [
            {
              id: 2,
              title: "Design landing page",
              description: "Design the landing page for the application.",
              status: "In Progress",
              priority: "Medium",
              assignee: "Jane Smith",
              createdAt: new Date("2023-10-02T11:00:00Z"),
              updatedAt: new Date("2023-10-03T12:00:00Z"),
              dueDate: new Date("2023-10-15T23:59:59Z"),
              swimlaneId: 2,
              storyPoints: 5
            }
          ]
        },
        {
          id: 3,
          title: "Done",
          order: 3,
          color: "#e8f5e8",
          tickets: [
            {
              id: 3,
              title: "Set up database",
              description: "Set up the initial database schema and tables.",
              status: "Done",
              priority: "Low",
              assignee: "Alice Johnson",
              createdAt: new Date("2023-10-01T09:00:00Z"),
              updatedAt: new Date("2023-10-02T09:00:00Z"),
              dueDate: new Date("2023-10-05T23:59:59Z"),
              swimlaneId: 3,
              storyPoints: 3
            }
          ]
        }
      ]
    };
  }
}
