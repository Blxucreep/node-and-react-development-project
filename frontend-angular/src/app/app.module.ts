import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChipsModule } from 'primeng/chips';

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component';
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';
import { LessonListPageComponent } from './lesson-list-page/lesson-list-page.component';
import { LessonDetailPageComponent } from './lesson-detail-page/lesson-detail-page.component';
import { TestPage1Component } from './test-page1/test-page1.component';

import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { NumberDisplayComponent } from './number-display/number-display.component';
import { NumberStepsComponent } from './number-steps/number-steps.component';
import { NumberEditComponent } from './number-edit/number-edit.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LessonEditFormComponent,
    LessonSearchPageComponent,
    MenuNavBarComponent,
    LessonListPageComponent,
    LessonDetailPageComponent,
    TestPage1Component,
    NumberDisplayComponent,
    NumberStepsComponent,
    NumberEditComponent,
    LoginComponent,
    SettingsComponent,
    SupportComponent,
    CreateAccountComponent,
    GlossaryComponent,
    DocumentationComponent,
    ExportlessonComponent,
    ImportlessonComponent,
    ExplorelessonComponent,
    StudynowComponent,
    ProgressStatistiqueComponent,
    AchievementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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