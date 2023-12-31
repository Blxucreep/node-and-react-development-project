import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImportLessonComponent } from './import-lesson/import-lesson.component';
import { ExploreLessonComponent } from './explore-lesson/explore-lesson.component';
import { ExportLessonComponent } from './export-lesson/export-lesson.component';

import { StudyNowComponent } from './study-now/study-now.component';

import { ProgressStatisticsComponent } from './progress-statistics/progress-statistics.component';

import { AchievementsComponent } from './achievements/achievements.component';

import { GlossaryComponent } from './glossary/glossary.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { SupportComponent } from './support/support.component';

import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { EditLessonComponent } from "./edit-lesson/edit-lesson.component";
import { EditFactComponent } from './edit-fact/edit-fact.component';

const routes: Routes = [
  { path: 'import-lesson', component: ImportLessonComponent },
  { path: 'explore-lesson', component: ExploreLessonComponent },
  { path: 'export-lesson', component: ExportLessonComponent },

  { path: 'study-now', component: StudyNowComponent },

  { path: 'progress-statistics', component: ProgressStatisticsComponent },

  { path: 'achievements', component: AchievementsComponent },

  { path: 'glossary', component: GlossaryComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'support', component: SupportComponent },

  { path: 'lesson-detail/:id', component: LessonDetailComponent },
  { path: 'lesson-detail/:id/edit-lesson', component: EditLessonComponent },
  { path: 'lesson-detail/:id/edit-fact/:factId', component: EditFactComponent },
  { path: 'lesson-detail/:id/add-fact', component: EditFactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }