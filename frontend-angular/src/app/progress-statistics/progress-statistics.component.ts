import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-progress-statistics',
  templateUrl: './progress-statistics.component.html',
  styleUrls: ['./progress-statistics.component.css']
})
export class ProgressStatisticsComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDataForChart();
  }

  getDataForChart(): void {
    this.http.get<any>('/api/your-endpoint').subscribe(data => {
      // Mettez à jour barChartLabels et barChartData avec les données obtenues
    });
  }
}