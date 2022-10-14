import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationGroupViewComponent } from './location-group-view.component';

describe('LocationGroupViewComponent', () => {
  let component: LocationGroupViewComponent;
  let fixture: ComponentFixture<LocationGroupViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationGroupViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationGroupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
