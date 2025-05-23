import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../project-types/tab-component.type';
import { CommonModule } from '@angular/common';
import { KanbanBoardComponent } from '../kanban-board/kanban-board.component';
import { KanbanGanttChartComponent } from '../kanban-gantt-chart/kanban-gantt-chart.component';
import { KanbanAnalyticsBoardComponent } from '../kanban-analytics-board/kanban-analytics-board.component';
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
  public projectList: Project[] = []; // TODO: split list into a seperate component

  constructor(private readonly _kanbanHttpService: KanbanBoardHttpService) {
  }
  ngOnInit(): void {
  }
  tabList: TabComponent[] = [ new KanbanBoardComponent(), new KanbanGanttChartComponent(), new KanbanAnalyticsBoardComponent() ];

  changeTab(tabComponent: TabComponent) {

  }

  getProjects(){
    // get list of projects from userId
    return [];
  }

  OnProject(projectId: string){
    this.projectId = projectId;
    var userId = "";
    // how to manage passing around userId
    // not via url, via singleton user service?
    this._kanbanHttpService.GetKanbanBoard(this.projectId, userId);
    // use this data to create components
  }
}
