import { Component, OnInit } from '@angular/core';
import { LessonProgressService } from '../lesson-progress.service';

@Component({
  selector: 'app-lesson-activity',
  templateUrl: './lesson-activity.component.html',
  styleUrls: ['./lesson-activity.component.scss']
})
export class LessonActivityComponent implements OnInit {

  LessonElements: Array<string> = [];
  LessonConnected: boolean = false;
  LessonCompleted: boolean = false;

  constructor(private lessonProgress: LessonProgressService) { }

  getElements(event: string[]) {
    this.LessonElements = event;
    console.log(this.LessonElements)
  }

  getConnected(event: boolean) {
    this.LessonConnected = event;
    console.log(this.LessonConnected)
    if (this.LessonElements.includes("bulb") && this.LessonElements.includes("cell") && this.LessonConnected == true) {
      this.LessonCompleted = true;
      this.lessonProgress.setLessonOne(this.LessonElements.length);
    }
  }

  ngOnInit(): void {
  }

}
