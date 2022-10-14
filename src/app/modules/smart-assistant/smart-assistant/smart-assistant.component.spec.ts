import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartAssistantComponent } from './smart-assistant.component';

describe('SmartAssistantComponent', () => {
  let component: SmartAssistantComponent;
  let fixture: ComponentFixture<SmartAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartAssistantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
