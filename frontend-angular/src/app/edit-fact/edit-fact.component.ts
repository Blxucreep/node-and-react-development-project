import { Component } from '@angular/core';
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
  editMode = false;
  packageId: string;

  constructor(formBuilder: FormBuilder,
              private databaseService: DatabaseService,
              private route: ActivatedRoute,
              private router: Router) {
    this.factForm = formBuilder.group({
      title: ['', Validators.required],
      fact: ['', Validators.required],
      package_id: [''],
    });

    this.packageId = '';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const factId = params['factId'];
      this.packageId = params['id'];
      // see in the url if we are in edit mode or add mode
      if (factId !== undefined) {
        // we are in edit mode
        this.editMode = true;
        // fetch the fact from the database
        this.fetchFactById(factId);
      }
      else {
        // we are in add mode
        this.editMode = false;
      }
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
      
      // add the package_id to the form data
      formData.package_id = this.packageId;

      if (!this.editMode) {
        // create a new fact
        this.databaseService.createFact(formData).subscribe(
          (response) => {
            console.log('Fact created:', response);

            // redirect to the lesson-detail page
            this.router.navigate([`/lesson-detail/${this.packageId}`]);
          },
          (error) => {
            console.error('Error creating fact:', error);
          }
        );
      }
      else {
        this.databaseService.updateFactById(this.fact.fact_id, formData).subscribe(
          (response) => {
            console.log('Fact updated:', response);
  
            // redirect to the lesson-detail page
            this.router.navigate([`/lesson-detail/${this.packageId}`]);
          },
          (error) => {
            console.error('Error updating fact:', error);
          }
        );
      }
    }
  }
}