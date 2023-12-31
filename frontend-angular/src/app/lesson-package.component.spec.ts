import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPackageComponent } from './lesson-package.component';

describe('LessonPackageComponent', () => {
  let component: LessonPackageComponent;
  let fixture: ComponentFixture<LessonPackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessonPackageComponent]
    });
    fixture = TestBed.createComponent(LessonPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
