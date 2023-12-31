import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-study-now',
  templateUrl: './study-now.component.html',
  styleUrls: ['./study-now.component.css']
})
export class StudyNowComponent implements OnInit {
  packages: any[] = [];
  facts: any[] = [];
  package_id: string = '';
  timer: number = 0;
  timerInterval: any;

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

  fetchFactsByPackageId(packageId: string) {
    this.databaseService.getFactsByPackageId(packageId).subscribe(
      (response) => {
        this.facts = response;
        console.log('Facts:', this.facts);
      },
      (error) => {
        console.error('Error fetching facts:', error);
      }
    );
  }

  onCourseSelected() {
    console.log('Selected course:', this.package_id);
    this.fetchFactsByPackageId(this.package_id);

    // launch timer
    this.timer = 0;

    // launch interval
    this.timerInterval = setInterval(() => {
      this.timer++;
    }, 60000); // 1 minute
  }

  onClickRewiewed(factId: string) {
    console.log('Reviewed fact:', factId);
    this.databaseService.getFactById(factId).subscribe(
      (response) => {
        const fact = response;

        // get the userlearningfact for this user and fact
        this.databaseService.getUserLearningFactById(factId).subscribe(
          (response) => {
            const userLearningFact = response;

            // if it exists, update the timesReviewed
            this.databaseService.updateUserLearningFactById(fact.fact_id, userLearningFact.timesReviewed + 1).subscribe(
              (response) => {
                console.log('Updated userlearningfact:', response);
              },
              (error) => {
                console.error('Error updating userlearningfact:', error);
              }
            );
          },
          (error) => {
            console.error('Error fetching userlearningfact:', error);

            // if not, create a new userlearningfact
            const userLearningFact = {
              fact_id: fact.fact_id,
              package_id: fact.package_id,
              user_id: 1,
              timesReviewed: 1,
            };
            this.databaseService.createUserLearningFact(userLearningFact).subscribe(
              (response) => {
                console.log('Created userlearningfact:', response);
              },
              (error) => {
                console.error('Error creating userlearningfact:', error);
              }
            );
          }
        );
      },
      (error) => {
        console.error('Error fetching fact:', error);
      }
    );
  }

  onClickFinish() {
    console.log('Finished course:', this.package_id);
    
    // stop the timer
    const timeSpent = this.timer;

    // update userlearningpackage
    // get the userlearningpackage for this user and package
    this.databaseService.getUserLearningPackageById(this.package_id).subscribe(
      (response) => {
        const userLearningPackage = response;

        // if it exists, update the timesReviewed
        this.databaseService.updateUserLearningPackageById(this.package_id, userLearningPackage.minutes + timeSpent).subscribe(
          (response) => {
            console.log('Updated userlearningpackage:', response);

            // stop the interval
            clearInterval(this.timerInterval);

            // re-initialize the select
            this.package_id = '';
            this.facts = [];
          },
          (error) => {
            console.error('Error updating userlearningpackage:', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching userlearningpackage:', error);
      }
    );
  }
}