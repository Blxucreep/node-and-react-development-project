import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-explore-lesson',
  templateUrl: './explore-lesson.component.html',
  styleUrls: ['./explore-lesson.component.css']
})
export class ExploreLessonComponent implements OnInit {
  packages: any[] = [];

  constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
    this.fetchPackages();
  }

  fetchPackages() {
    this.databaseService.getPackages().subscribe(
      (response) => {
        this.packages = response;
      },
      (error) => {
        console.error('Error fetching packages:', error);
      }
    );
  }
}