import { Component, OnInit } from '@angular/core';
import { LessonProgressService } from '../lesson-progress.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  lessonOneScore = 0;
  lessonTwoScore = 0;

  constructor(private lessonProgress: LessonProgressService) { }

  ngOnInit(): void {
  }

  refreshScores() {
    this.lessonOneScore = this.lessonProgress.getLessonOne();
    this.lessonTwoScore = this.lessonProgress.getLessonTwo();
  }

}
