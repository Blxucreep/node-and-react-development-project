import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportLessonComponent } from './export-lesson.component';

describe('ExportLessonComponent', () => {
  let component: ExportLessonComponent;
  let fixture: ComponentFixture<ExportLessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportLessonComponent]
    });
    fixture = TestBed.createComponent(ExportLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
