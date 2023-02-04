import { Component, OnInit } from '@angular/core';
import { LessonProgressService } from '../lesson-progress.service';

@Component({
  selector: 'app-lesson-home-page',
  templateUrl: './lesson-home-page.component.html',
  styleUrls: ['./lesson-home-page.component.scss']
})
export class LessonHomePageComponent implements OnInit {

  constructor(private lessonProgress: LessonProgressService) { }

  lessonOneCompleted = false;

  ngOnInit(): void {
    if (this.lessonProgress.getLessonOne() > 0) {
      this.lessonOneCompleted = true;
    }
  }

}
