import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressStatistiqueComponent } from './progress-statistique.component';

describe('ProgressStatistiqueComponent', () => {
  let component: ProgressStatistiqueComponent;
  let fixture: ComponentFixture<ProgressStatistiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressStatistiqueComponent]
    });
    fixture = TestBed.createComponent(ProgressStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
