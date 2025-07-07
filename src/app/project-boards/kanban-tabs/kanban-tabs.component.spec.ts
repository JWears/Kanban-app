import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanTabsComponent } from './kanban-tabs.component';

describe('KanbanTabsComponent', () => {
  let component: KanbanTabsComponent;
  let fixture: ComponentFixture<KanbanTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
