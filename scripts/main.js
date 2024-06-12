// var options = {
//     series: [{
//     data: [44, 55, 41, 64, 22, 43, 21]
//   }, {
//     data: [53, 32, 33, 52, 13, 44, 32]
//   }],
//     chart: {
//     type: 'bar',
//     height: 430
//   },
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       dataLabels: {
//         position: 'top',
//       },
//     }
//   },
//   dataLabels: {
//     enabled: true,
//     offsetX: -6,
//     style: {
//       fontSize: '12px',
//       colors: ['#fff']
//     }
//   },
//   stroke: {
//     show: true,
//     width: 1,
//     colors: ['#fff']
//   },
//   tooltip: {
//     shared: true,
//     intersect: false
//   },
//   xaxis: {
//     categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
//     labels: {
//         style: {
//           fontSize: '25px',
//           fontFamily: 'Bootstrap-icons'
//         }
//       }
//   },
//   };

//   var chart = new ApexCharts(document.querySelector("#chart"), options);
//   chart.render();

// Highcharts.chart('container', {
//     chart: {
//         type: 'column'
//     },
//     title: {
//         text: 'Corn vs wheat estimated production for 2020',
//         align: 'center'
//     },
//     subtitle: {
//         text:
//             'Source: <a target="_blank" ' +
//             'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
//         align: 'left'
//     },
//     xAxis: {
//         categories: [`<img width="20px" height="20px" src="../scripts/up-arrow-icon.png" />`, 'China', 'Brazil', 'EU', 'India', 'Russia'],
//         crosshair: true,
//         accessibility: {
//             description: 'Countries'
//         },
//         labels: {
//             formatter: function() {	
//                 console.log(this);
//                 if (this.isFirst)		
//                 return `<div style="display: flex; flex-direction: column; align-items: center;">
//                 <img width="20px" height="20px" src="../scripts/up-arrow-icon.png" />
//                 <span>Owowf</span>
//             </div>`;
//             },
//             useHTML: true
//         }
//     },
//     yAxis: {
//         min: 0,
//         title: {
//             text: '1000 metric tons (MT)'
//         }
//     },
//     tooltip: {
//         valueSuffix: ' (1000 MT)'
//     },
//     plotOptions: {
//         column: {
//             pointPadding: 0.2,
//             borderWidth: 0
//         }
//     },
//     series: [
//         {
//             name: 'Corn',
//             data: [406292, 260000, 107000, 68300, 27500, 14500]
//         },
//         {
//             name: 'Wheat',
//             data: [51086, 136000, 5500, 141000, 107180, 77000]
//         }
//     ]
// });


function round(number){

    if(number < 1000) return `${number}`;
  
    if(number < 1000000) return `${Math.round(number / 1000)}K`;
  
    if(number < 1000000000) return `${Math.round(number / 1000000)}M`;
  
    if(number < 1000000000000) return `${Math.round(number / 1000000000)}T`;
  
    return number;
  
  }


  var ans = round(900000);

  console.log(ans);