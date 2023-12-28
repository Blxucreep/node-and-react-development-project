import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportlessonComponent } from './importlesson.component';

describe('ImportlessonComponent', () => {
  let component: ImportlessonComponent;
  let fixture: ComponentFixture<ImportlessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportlessonComponent]
    });
    fixture = TestBed.createComponent(ImportlessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
