import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonProgressService {
  lessonOneProgress: number = 0;
  lessonTwoProgress: number = 0;

  constructor() {
   }

   setLessonOne(val: number) {
     this.lessonOneProgress = val;
   }

   setLessonTwo(val: number) {
    this.lessonTwoProgress = val;
  }

  getLessonOne() {
    return this.lessonOneProgress;
  }

  getLessonTwo() {
    return this.lessonTwoProgress;
  }
}
