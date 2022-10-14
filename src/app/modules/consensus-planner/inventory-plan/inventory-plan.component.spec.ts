import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryPlanComponent } from './inventory-plan.component';

describe('InventoryPlanComponent', () => {
  let component: InventoryPlanComponent;
  let fixture: ComponentFixture<InventoryPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
