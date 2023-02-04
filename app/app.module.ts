import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CircuitBuilderComponent } from './circuit-builder/circuit-builder.component';
import { ComponentToolboxComponent } from './component-toolbox/component-toolbox.component';
import { CircuitElementComponent } from './circuit-element/circuit-element.component';
import { LessonActivityComponent } from './lesson-activity/lesson-activity.component';
import { LessonHomePageComponent } from './lesson-home-page/lesson-home-page.component';
import { LessonActivityTwoComponent } from './lesson-activity-two/lesson-activity-two.component';
import { LessonProgressData } from './lesson-progress-data';
import { LearnPageComponent } from './learn-page/learn-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CircuitBuilderComponent,
    ComponentToolboxComponent,
    CircuitElementComponent,
    LessonActivityComponent,
    LessonHomePageComponent,
    LessonActivityTwoComponent,
    LearnPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [ LessonProgressData ],
  bootstrap: [AppComponent]
})
export class AppModule { }
