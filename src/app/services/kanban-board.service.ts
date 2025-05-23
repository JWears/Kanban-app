import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class KanbanBoardHttpService {
  private url = "";
  constructor(private readonly _httpClient: HttpClient) {
  }

  public GetKanbanBoard(projectId: string, userId: string){
    this._httpClient.get(this.url);
  }
}
