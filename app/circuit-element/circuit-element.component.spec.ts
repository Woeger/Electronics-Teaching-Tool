import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitElementComponent } from './circuit-element.component';

describe('CircuitElementComponent', () => {
  let component: CircuitElementComponent;
  let fixture: ComponentFixture<CircuitElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
