import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-study-now',
  templateUrl: './study-now.component.html',
  styleUrls: ['./study-now.component.css']
})
export class StudyNowComponent implements OnInit, OnDestroy {
  packages: any[] = [];
  timerValue: number = 0;
  intervalId: any;

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

  startTimer() {
    this.intervalId = setInterval(() => {
      this.timerValue++;
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
