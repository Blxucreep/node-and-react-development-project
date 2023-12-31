import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFactComponent } from './edit-fact.component';

describe('EditFactComponent', () => {
  let component: EditFactComponent;
  let fixture: ComponentFixture<EditFactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFactComponent]
    });
    fixture = TestBed.createComponent(EditFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
