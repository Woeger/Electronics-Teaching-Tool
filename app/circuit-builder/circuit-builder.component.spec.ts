import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitBuilderComponent } from './circuit-builder.component';

describe('CircuitBuilderComponent', () => {
  let component: CircuitBuilderComponent;
  let fixture: ComponentFixture<CircuitBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
