import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component"; // Importez le composant de la page de connexion
import { LessonEditFormComponent } from "./lesson-edit-form/lesson-edit-form.component";
import { LessonListPageComponent } from "./lesson-list-page/lesson-list-page.component";
import { LessonDetailPageComponent } from "./lesson-detail-page/lesson-detail-page.component";
import { TestPage1Component } from "./test-page1/test-page1.component";
import { SettingsComponent } from "./settings/settings.component";
import { SupportComponent } from './support/support.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExportlessonComponent } from './exportlesson/exportlesson.component';
import { ImportlessonComponent } from './importlesson/importlesson.component';
import { ExplorelessonComponent } from './explorelesson/explorelesson.component';
import { StudynowComponent } from './studynow/studynow.component';
import { ProgressStatistiqueComponent } from './progress-statistique/progress-statistique.component';
import { AchievementComponent } from './achievement/achievement.component';
const routes: Routes = [
  { path:'lesson-edit-form', component: LessonEditFormComponent },
  { path:'lesson-list', component: LessonListPageComponent },
  { path:'lesson/:id', component: LessonDetailPageComponent },
  { path:'test-page1', component: TestPage1Component },
  { path: 'login', component: LoginComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'glossary', component: GlossaryComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'exportlesson', component: ExportlessonComponent },
  { path: 'importlesson', component: ImportlessonComponent },
  { path: 'explorelesson', component: ExplorelessonComponent },
  { path: 'studynow', component: StudynowComponent },
  { path: 'progress-statistique', component: ProgressStatistiqueComponent },
  { path: 'achievement', component: AchievementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }