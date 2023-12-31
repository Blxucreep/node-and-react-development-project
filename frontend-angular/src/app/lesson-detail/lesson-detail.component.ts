import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {
  package: any = {};
  facts: any = [];

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
  ) { };

  ngOnInit() {
    this.route.params.subscribe(params => {
      const packageId = params['id'];
      this.fetchPackageById(packageId);
      this.fetchFactsByPackageId(packageId);
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

  fetchFactsByPackageId(packageId: string) {
    this.databaseService.getFactsByPackageId(packageId).subscribe(
      (response) => {
        this.facts = response;
      },
      (error) => {
        console.error('Error fetching facts:', error);
      }
    );
  }

  onClickDeleteFact(factId: string) {
    this.databaseService.deleteFactById(factId).subscribe(
      (response) => {
        console.log('Fact deleted:', response);
        
        // refresh facts
        this.fetchFactsByPackageId(this.package.package_id);
      },
      (error) => {
        console.error('Error deleting fact:', error);
      }
    );
  }
}