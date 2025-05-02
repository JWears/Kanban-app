import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanAnalyticsBoardComponent } from './kanban-analytics-board.component';

describe('KanbanAnalyticsBoardComponent', () => {
  let component: KanbanAnalyticsBoardComponent;
  let fixture: ComponentFixture<KanbanAnalyticsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanAnalyticsBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanAnalyticsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
