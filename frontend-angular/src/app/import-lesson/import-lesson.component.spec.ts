import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLessonComponent } from './import-lesson.component';

describe('ImportLessonComponent', () => {
  let component: ImportLessonComponent;
  let fixture: ComponentFixture<ImportLessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportLessonComponent]
    });
    fixture = TestBed.createComponent(ImportLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
