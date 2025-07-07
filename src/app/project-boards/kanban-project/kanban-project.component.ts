import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanBoardHttpService } from '../../services/kanban-board.service';
import { Project } from '../project-types/project.type';
import { KanbanProjectListComponent } from '../kanban-project-list/kanban-project-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-kanban-project',
  standalone: true,
  imports: [
    CommonModule,
    KanbanProjectListComponent,
    HttpClientModule],
  providers: [KanbanBoardHttpService],
  templateUrl: './kanban-project.component.html',
  styleUrl: './kanban-project.component.less'
})
export class KanbanProjectComponent implements OnInit {
  public projectId: string = ""; // where does projectId come from? retrieve list from userId?
  public projectList: Project[] = [
    { ProjectId: "1", ProjectName: "Website Redesign" },
    { ProjectId: "2", ProjectName: "Mobile App Development" },
    { ProjectId: "3", ProjectName: "Q4 Marketing Campaign" },
    { ProjectId: "4", ProjectName: "HR Recruitment Process" },
    { ProjectId: "5", ProjectName: "Product Roadmap 2024" },
    { ProjectId: "6", ProjectName: "Customer Support Portal" }
  ]; // TODO: split list into a separate component

  constructor(private readonly _kanbanHttpService: KanbanBoardHttpService) {
  }
  ngOnInit(): void {
  }

  changeProject(selectedProject: Project) {
    // change route to this registered project route
        this.projectId = selectedProject.ProjectId;
    var userId = "";
    // how to manage passing around userId
    // not via url, via singleton user service?
    this._kanbanHttpService.GetKanbanBoard(this.projectId, userId);
    // use this data to create components
  }

  getProjects(){
    // get list of projects from userId
    return [];
  }
}
