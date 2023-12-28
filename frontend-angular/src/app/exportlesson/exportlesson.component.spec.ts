import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportlessonComponent } from './exportlesson.component';

describe('ExportlessonComponent', () => {
  let component: ExportlessonComponent;
  let fixture: ComponentFixture<ExportlessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportlessonComponent]
    });
    fixture = TestBed.createComponent(ExportlessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
