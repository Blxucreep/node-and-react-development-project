import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DatabaseService } from '../database.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-fact',
  templateUrl: './edit-fact.component.html',
  styleUrls: ['./edit-fact.component.css']
})
export class EditFactComponent {
  fact: any = {};
  factForm: FormGroup;

  constructor(formBuilder: FormBuilder,
              private databaseService: DatabaseService,
              private route: ActivatedRoute,
              private router: Router) {
    this.factForm = formBuilder.group({
      title: ['', Validators.required],
      fact: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const factId = params['id'];
      this.fetchFactById(factId);
    });
  }

  fetchFactById(factId: string) {
    this.databaseService.getFactById(factId).subscribe(
      (response) => {
        this.fact = response;
      },
      (error) => {
        console.error('Error fetching fact:', error);
      }
    );
  }

  onClickSubmit() {
    if (this.factForm.valid) {
      const formData = this.factForm.value;
      this.databaseService.updateFactById(this.fact.fact_id, formData).subscribe(
        (response) => {
          console.log('Fact updated:', response);

          // redirect to the lesson-detail page
          this.router.navigate([`/lesson-detail/${this.fact.package_id}`]);
        },
        (error) => {
          console.error('Error updating fact:', error);
        }
      );
    }
  }
}