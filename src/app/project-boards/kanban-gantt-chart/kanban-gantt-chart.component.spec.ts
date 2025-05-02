import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanGanttChartComponent } from './kanban-gantt-chart.component';

describe('KanbanGanttChartComponent', () => {
  let component: KanbanGanttChartComponent;
  let fixture: ComponentFixture<KanbanGanttChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanGanttChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanGanttChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
