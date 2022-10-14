import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuePlanComponent } from './revenue-plan.component';

describe('RevenuePlanComponent', () => {
  let component: RevenuePlanComponent;
  let fixture: ComponentFixture<RevenuePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenuePlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenuePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
