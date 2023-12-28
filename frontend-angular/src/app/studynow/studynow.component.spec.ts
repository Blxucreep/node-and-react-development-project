import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudynowComponent } from './studynow.component';

describe('StudynowComponent', () => {
  let component: StudynowComponent;
  let fixture: ComponentFixture<StudynowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudynowComponent]
    });
    fixture = TestBed.createComponent(StudynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
