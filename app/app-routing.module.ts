import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircuitBuilderComponent } from './circuit-builder/circuit-builder.component';
import { HomeComponent } from './home/home.component';
import { LessonActivityTwoComponent } from './lesson-activity-two/lesson-activity-two.component';
import { LessonActivityComponent } from './lesson-activity/lesson-activity.component';
import { LessonHomePageComponent } from './lesson-home-page/lesson-home-page.component';
import { LearnPageComponent } from './learn-page/learn-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'circuit-builder',
    component: CircuitBuilderComponent
  },
  {
    path: 'lessons',
    component: LessonHomePageComponent
  },
  {
    path: 'lesson-one',
    component: LessonActivityComponent
  },
  {
    path: 'lesson-two',
    component: LessonActivityTwoComponent
  },
  {
    path: 'learn',
    component: LearnPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
