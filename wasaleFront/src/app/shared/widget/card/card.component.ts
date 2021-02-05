import { Component, Input, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
@Component({
  selector: "app-widget-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  Highcharts = Highcharts;
  chartOptions = {};
  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: "area",
        backgroundColor: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        height: 60,
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },

      tooltip: {
        split: true,
        outsite: true,
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endTick: false,
        tickOptions: [],
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endTick: false,
        tickOptions: [],
      },
      plotOptions: {
        area: {
          stacking: "normal",
          lineColor: "#666666",
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: "#666666",
          },
        },
      },
      series: [{ data: [71, 78, 39, 60] }],
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
}
