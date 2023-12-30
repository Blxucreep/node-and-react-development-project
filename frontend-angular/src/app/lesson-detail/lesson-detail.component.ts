import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent {
  readonly initialId: number;
  id: number | undefined;

  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    this.initialId = +activatedRoute.snapshot.params['id'];
    console.log('initialId:', this.initialId);
    activatedRoute.params.subscribe(currParams => {
      this.id = +currParams['id'];
      console.log('id:', this.id);
    });
  }

  onClickGoNextPage(){
    const nextId = (this.id)? this.id + 1 : 1;
    this.router.navigate(['/lesson', nextId]);
   }   
}