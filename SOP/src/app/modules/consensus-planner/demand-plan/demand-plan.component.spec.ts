import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandPlanComponent } from './demand-plan.component';

describe('DemandPlanComponent', () => {
  let component: DemandPlanComponent;
  let fixture: ComponentFixture<DemandPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
