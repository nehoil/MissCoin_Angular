import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexChart,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexMarkers,
  ApexAnnotations,
  ApexStroke,
} from 'ng-apexcharts';
import { data } from './series-data';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  annotations: ApexAnnotations;
  colors: any;
  toolbar: any;
  grid: any;
};

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartCmp implements OnInit {
  @ViewChild('chart', { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public activeOptionButton = 'all';
  public updateOptionsData = {
    '1m': {
      xaxis: {
        min: new Date('28 Jan 2013').getTime(),
        max: new Date('27 Feb 2013').getTime(),
      },
    },
    '6m': {
      xaxis: {
        min: new Date('27 Sep 2012').getTime(),
        max: new Date('27 Feb 2013').getTime(),
      },
    },
    '1y': {
      xaxis: {
        min: new Date('27 Feb 2012').getTime(),
        max: new Date('27 Feb 2013').getTime(),
      },
    },
    '1yd': {
      xaxis: {
        min: new Date('01 Jan 2013').getTime(),
        max: new Date('27 Feb 2013').getTime(),
      },
    },
    all: {
      xaxis: {
        min: undefined,
        max: undefined,
      },
    },
  };
  @Input() data: any;
  @Input() colors: any;
  @Input() chartTitle: string;
  @Input() chartWidth: number;
  @Input() chartSubTitle: string;
  @Input() chartNum: string;
  constructor() {
    this.initChart();
  }
  initChart(): void {
    this.chartOptions = {
      grid: {
        show: false
      },
      series: [
        {
          data: this.data,
        },
      ],
      chart: {
        id: 'area-datetime',
        type: 'area',
        width: 600,
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
        toolbar: {
          tools: {
            download: false,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            customIcons: [],
          },
        }
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        type: 'datetime',
        tooltip: {
          enabled: false,
        },
        tickAmount: 4,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy',
        },
      },
      colors: ['#ff9b22', '#ffc175'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
    };
  }
  loadChartWidth(){
    this.chartOptions.chart.width = this.chartWidth ? this.chartWidth : 400
  }
  convertDataToChart() {
    const data = [];
    this.data.forEach((currData) => {
      currData.x *= 1000;
      currData.y = currData.y.toFixed(2);
      data.push([currData.x, +currData.y]);
    });
    const series = [{ data }];
    this.chartOptions.series = series;
  }
  ngOnInit(): void {
    this.chartOptions.series[0].data = this.data;
    this.chartOptions.colors = this.colors;
    this.convertDataToChart();
    this.loadChartWidth();
  }
  public updateOptions(option: any): void {
    this.activeOptionButton = option;
    this.chart.updateOptions(this.updateOptionsData[option], false, true, true);
  }
}
