import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';

import { ChipsModule } from 'primeng/chips';

import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';

import { ImportLessonComponent } from './import-lesson/import-lesson.component';
import { EditLessonComponent } from "./edit-lesson/edit-lesson.component";
import { ExploreLessonComponent } from './explore-lesson/explore-lesson.component';
import { ExportLessonComponent } from './export-lesson/export-lesson.component';

import { StudyNowComponent } from './study-now/study-now.component';

import { ProgressStatisticsComponent } from './progress-statistics/progress-statistics.component';

import { AchievementsComponent } from './achievements/achievements.component';

import { GlossaryComponent } from './glossary/glossary.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { SupportComponent } from './support/support.component';

import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from "./login/login.component";
import { SettingsComponent } from "./settings/settings.component";

import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';

@NgModule({
  declarations: [
    AppComponent,

    MenuNavBarComponent,

    ImportLessonComponent,
    EditLessonComponent,
    ExploreLessonComponent,
    ExportLessonComponent,

    StudyNowComponent,    

    ProgressStatisticsComponent,

    AchievementsComponent,

    GlossaryComponent,
    DocumentationComponent,
    SupportComponent,

    CreateAccountComponent,
    LoginComponent,
    SettingsComponent,

    LessonDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    NgbModule,

    FormsModule,
    ReactiveFormsModule, // <= for supports FormGroup/FormBuilder

    ChipsModule,

    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIconPacks(fas, far);
  }
}
