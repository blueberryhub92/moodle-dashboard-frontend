import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { donutChartOptions } from './helpers/donutChartOptions';
import { areaChartOptions } from './helpers/areaChartOptions';
import { barChart } from './helpers/barChart';
import { oneLineBar } from './helpers/oneLineBar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chart = new Chart(donutChartOptions);
  areaSplineChart = new Chart(areaChartOptions);
  barChart = new Chart(barChart);
  oneLineBar = new Chart(oneLineBar);

  constructor() { }

  ngOnInit(): void {
  }

}

