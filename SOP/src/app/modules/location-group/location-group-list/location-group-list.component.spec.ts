import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationGroupListComponent } from './location-group-list.component';

describe('LocationGroupListComponent', () => {
  let component: LocationGroupListComponent;
  let fixture: ComponentFixture<LocationGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationGroupListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
