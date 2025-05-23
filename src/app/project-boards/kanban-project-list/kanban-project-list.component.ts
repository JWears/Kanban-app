import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ProjectBoardService as ProjectListService } from "../../services/project-board.service";
import { Project } from "../project-types/project.type";

@Component({
  selector: "app-kanban-project-list",
  standalone: true,
  imports: [CommonModule],
  providers: [ProjectListService],
  templateUrl: "./kanban-project-list.component.html",
  styleUrl: './kanban-project-list.component.less'
})
export class KanbanProjectListComponent implements OnInit{
  @Input() userId: string = "" //TODO: figure out best way to keep hold of a users Id
  public projectList: Project[] = [];
  constructor(private readonly _projectListService: ProjectListService) {
  }
  ngOnInit(): void {
    this.projectList = this._projectListService.getUserProjects(this.userId);
  }

  OnProject(projectId: string){

  }
}
