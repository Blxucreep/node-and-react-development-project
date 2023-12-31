import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DatabaseService } from '../database.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent {
  package: any = {};
  lessonForm: FormGroup;

  constructor(formBuilder: FormBuilder,
              private databaseService: DatabaseService,
              private route: ActivatedRoute,
              private router: Router) {
    this.lessonForm = formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: [''],
      level: [''],
      prerequisite: [''],
      tags: [''],
      license: ['']
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const packageId = params['id'];
      this.fetchPackageById(packageId);
    });
  }

  fetchPackageById(packageId: string) {
    this.databaseService.getPackageById(packageId).subscribe(
      (response) => {
        this.package = response;
      },
      (error) => {
        console.error('Error fetching package:', error);
      }
    );
  }
  
  onClickSubmit() {
    if (this.lessonForm.valid) {
      const formData = this.lessonForm.value;
      this.databaseService.updatePackageById(this.package.package_id, formData).subscribe(
        (response) => {
          console.log('Package updated:', response);

          // redirect to the lesson-detail page
          this.router.navigate([`/lesson-detail/${this.package.package_id}`]);
        },
        (error) => {
          console.error('Error updating package:', error);
        }
      );
    }
    else {
      console.log('Form is invalid. Please check the required fields.');
    }
  }
}