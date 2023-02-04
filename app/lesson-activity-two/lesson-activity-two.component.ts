import { Component, OnInit } from '@angular/core';
import { LessonProgressService } from '../lesson-progress.service';

@Component({
  selector: 'app-lesson-activity-two',
  templateUrl: './lesson-activity-two.component.html',
  styleUrls: ['./lesson-activity-two.component.scss']
})
export class LessonActivityTwoComponent implements OnInit {

  LessonElements: Array<string> = [];
  LessonResistance: number = 0;
  LessonConnected: boolean = false;
  LessonCompleted: boolean = false;

  constructor(private lessonProgress: LessonProgressService) { }

  getElements(event: string[]) {
    this.LessonElements = event;
    console.log(this.LessonElements)
  }

  getResistance(event: number) {
    this.LessonResistance = event;
    console.log(this.LessonResistance)
  }

  getConnected(event: boolean) {
    this.LessonConnected = event;
    console.log(this.LessonConnected)
    if (this.LessonResistance == 30 && this.LessonConnected == true) {
      this.LessonCompleted = true;
      this.lessonProgress.setLessonTwo(this.LessonElements.length);
    }
  }

  ngOnInit(): void {
  }

}
