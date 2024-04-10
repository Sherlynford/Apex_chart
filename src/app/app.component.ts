import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle } from 'ng-apexcharts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chartSeries = [        {
    name: "My-series",
    data: [10, 41, 35, 51, 49, 62]
  }, {
    name: "My-series2",
    data: [5, 20, 17, 25, 24, 31]
  }];
  
  chartDetail: ApexChart = {type:'radar',height:350,toolbar:{show:true}};

  chartTitle = {
    text: "My First Angular Chart"
  };
  chartXaxis = {
    categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun"]
  };
}
