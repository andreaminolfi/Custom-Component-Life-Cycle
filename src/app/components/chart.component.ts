import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  template: `
    <div #host></div>
  `,
})
export class ChartComponent implements OnChanges {
  @ViewChild('host', { static: true }) host: ElementRef<HTMLDivElement>;
  @Input() type: any;
  @Input() title: string = '';
  @Input() seriesName: string = '';
  @Input() data: number[] = [];

  ngOnChanges() {
    const options: Highcharts.Options = {
      title: {
        text: this.title,
      },

      legend: {
        enabled: false,
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: {
        title: {
          text: this.seriesName,
        },
      },

      series: [
        {
          type: this.type,
          data: this.data,
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },
    };

    Highcharts.chart(this.host.nativeElement, options);
  }
}
