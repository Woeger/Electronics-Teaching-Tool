import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonHomePageComponent } from './lesson-home-page.component';

describe('LessonHomePageComponent', () => {
  let component: LessonHomePageComponent;
  let fixture: ComponentFixture<LessonHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
