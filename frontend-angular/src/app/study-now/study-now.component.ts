// Dans study-now.component.ts

import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-study-now',
  templateUrl: './study-now.component.html',
  styleUrls: ['./study-now.component.css']
})
export class StudyNowComponent implements OnInit {
  courses: any[] = [];
  selectedCourseId: string = '';
  packageDetails: any = null;

  constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
    this.databaseService.getCourseTitles().subscribe(
      data => {
        this.courses = data;
      },
      error => console.error('Error fetching course titles:', error)
    );
  }

  onCourseSelected() {
    if (this.selectedCourseId) {
      this.databaseService.getPackageDetailsById(this.selectedCourseId).subscribe(
        data => {
          this.packageDetails = data;
        },
        error => console.error('Error fetching package details:', error)
      );
    }
  }
}
