import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Project } from "../project-boards/project-types/project.type";

@Injectable({providedIn: "root"})
export class ProjectBoardService {
  constructor(private readonly _httpService: HttpClient) {
  }

  public getUserProjects(userId: string): Project[] {
    this._httpService.get("");
    // get and return a users project as a list

    return [];
  }
}
