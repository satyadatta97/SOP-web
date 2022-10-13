import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsensusPlannerComponent } from './consensus-planner.component';

describe('ConsensusPlannerComponent', () => {
  let component: ConsensusPlannerComponent;
  let fixture: ComponentFixture<ConsensusPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsensusPlannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsensusPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
