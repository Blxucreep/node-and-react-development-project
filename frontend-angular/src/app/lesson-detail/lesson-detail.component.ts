import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Importer le module HttpClient

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {
  lesson: any;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const lessonId = +params['id']; // Convertir l'ID en nombre

      if (!isNaN(lessonId)) {
        this.httpClient.get<any>(`localhost:3000/api/package/${lessonId}`).subscribe(
          (lesson) => {
            this.lesson = lesson;
          },
          (error) => {
            console.error('Error fetching lesson details:', error);
          }
        );
      } else {
        console.error('Invalid lesson ID');
      }
    });
  }
}
