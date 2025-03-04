import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanSwimlaneComponent } from './kanban-swimlane.component';

describe('KanbanSwimlaneComponent', () => {
  let component: KanbanSwimlaneComponent;
  let fixture: ComponentFixture<KanbanSwimlaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanSwimlaneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanSwimlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
