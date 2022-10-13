import { Component, OnInit } from '@angular/core';
import Chart from "chart.js/auto";

@Component({
  selector: 'app-performance-monitor',
  templateUrl: './performance-monitor.component.html',
  styleUrls: ['./performance-monitor.component.scss']
})
export class PerformanceMonitorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var ctx = document.getElementById("myChart");
    var chart = new Chart("myChart", {
      type: "bar",
      data: {
        labels: ["Cab", "Convertible", "Coupe", "Hatchback", "Sedan", "Super", "Wagon",],
        datasets: [
          {
            type: "bar",
            backgroundColor: "#3e81c3",
            borderColor: "#3e81c3",
            borderWidth: 1,
            label: "Actual",
            data: [60, 49, 72, 90, 100, 60,80]
          },
          {
            type: "line",
            label: "Plan",
            data: [0,25, 13, 30, 35, 25, 120],
            borderColor: '#ff0000',
            
            fill: true 
          }
        ],

        
      },
      options: {
        
         responsive: true,
         maintainAspectRatio: false,
         
       },
      
    });

  }

}
