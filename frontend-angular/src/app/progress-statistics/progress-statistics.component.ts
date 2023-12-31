import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';  // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-progress-statistics',
  templateUrl: './progress-statistics.component.html',
  styleUrls: ['./progress-statistics.component.css']
})
export class ProgressStatisticsComponent {
  data: any;
  selectedChartType: string = 'timesReviewed';

  constructor(private databaseService: DatabaseService) {
    // initialize data
    this.data = [];
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    if (this.selectedChartType === 'timesReviewed') {
      this.databaseService.getUserLearningFacts().subscribe((facts) => {
        this.data = {
          labels: facts.map(fact => `Fact ${fact.fact_id}`),
          datasets: [
            {
              label: 'Times Reviewed',
              data: facts.map(fact => fact.timesReviewed),
              backgroundColor: 'rgba(0, 123, 255, 0.5)',
              borderColor: 'rgba(0, 123, 255, 1)',
              borderWidth: 1
            }
          ]
        };
      });
    } else if (this.selectedChartType === 'minutes') {
      this.databaseService.getUserLearningPackages().subscribe((packages) => {
        this.data = {
          labels: packages.map(pkg => `Lesson ${pkg.package_id}`),
          datasets: [
            {
              label: 'Minutes On',
              data: packages.map(pkg => pkg.minutes),
              backgroundColor: 'rgba(0, 123, 255, 0.5)',
              borderColor: 'rgba(0, 123, 255, 1)',
              borderWidth: 1
            }
          ]
        };
      });
    }
  }

  onChartTypeChange() {
    this.loadData();
  }
}