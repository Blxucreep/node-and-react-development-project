// explore-lesson.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-explore-lesson',
  templateUrl: './explore-lesson.component.html',
  styleUrls: ['./explore-lesson.component.css']
})
export class ExploreLessonComponent implements OnInit {
  lessons: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.fetchLessons();
  }

  fetchLessons() {
    this.httpClient.get<any[]>('localhost:3000/api/package').subscribe(
      (response) => {
        this.lessons = response;
      },
      (error) => {
        console.error('Error fetching lessons:', error);
      }
    );
  }
}