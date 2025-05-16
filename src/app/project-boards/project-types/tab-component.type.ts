
export interface TabComponent {
  id: string;
  name: string;
  icon: string;
  component: TabType; // The component to be rendered
  showTab: boolean
  onClick?: () => void; // Optional click handler function
}

export enum TabType {
  KanbanBoardComponent,
  KanbanGanttChartComponent,
  KanbanAnalyticsComponent,
}
