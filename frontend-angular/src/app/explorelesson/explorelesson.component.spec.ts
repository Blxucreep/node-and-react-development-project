import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorelessonComponent } from './explorelesson.component';

describe('ExplorelessonComponent', () => {
  let component: ExplorelessonComponent;
  let fixture: ComponentFixture<ExplorelessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExplorelessonComponent]
    });
    fixture = TestBed.createComponent(ExplorelessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
