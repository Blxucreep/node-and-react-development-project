// explore-lesson.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-lesson',
  templateUrl: './explore-lesson.component.html',
  styleUrls: ['./explore-lesson.component.css']
})
export class ExploreLessonComponent implements OnInit {
  lessons: any[] = [];

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {
    this.fetchLessons();
  }

  fetchLessons() {
    this.httpClient.get<any[]>('http://localhost:3000/api/package').subscribe(
      (response) => {
        this.lessons = response;
      },
      (error) => {
        console.error('Error fetching lessons:', error);
      }
    );
  }

  exploreLesson(lessonId: number) {
    this.router.navigate(['/lesson-detail', lessonId]);
  }
}
