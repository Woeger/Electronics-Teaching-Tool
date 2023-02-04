import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonActivityTwoComponent } from './lesson-activity-two.component';

describe('LessonActivityTwoComponent', () => {
  let component: LessonActivityTwoComponent;
  let fixture: ComponentFixture<LessonActivityTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonActivityTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonActivityTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
