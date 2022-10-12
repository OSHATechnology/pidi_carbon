// const { result } = require("lodash");as
// Data 
var emisiYearly = ['27741,33']
var time = ['00:00', '01:00', '02:00', '03:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
var date = ['2022-03-01', '2022-02-01', '2022-01-01', '2021-12-01', '2021-11-01', '2021-10-01', '2021-09-01', '2021-08-01', '2021-07-01',
  '2021-06-01', '2021-05-01', '2021-04-01']
var electric = ['7500', '9400']
var targetElectricHourly = 7800
var targetGasHourly = 1600
var targetFuelHourly = 4000
var targetElectricDaily = 7800 * 24
var targetGasDaily = 1600 * 24
var targetFuelDaily = 4000 * 24
var JenisEnergi = ['Electricity', 'LPG', 'Diesel Oil', 'Natural Gas']
var area = ['manufacturing', 'building', 'utility', 'digital']
var plant = ['Karawang1', 'Karawang2', 'Karawang3', 'Sunter1', 'Sunter2']
var productionYearly = [7709, 6975, 7709, 7203, 7546, 7788, 8158, 8485, 8516, 9196, 6048, 7659]
var dataDigital = [];
var dataUtility = [];
var dataBuilding = [];
var dataManufacturing = [];
let n = 7;
let presentaseMonth = (Math.random() * 100) / 100;

let dataTotalEmissionsPlant = dataEmissionsPerPlant(plant)

let datass = callRandomData();

// Interval Variable
var today = new Date()
var yesterday = new Date().getTime()-10800000
var lastMonth = new Date().getTime()-10800000-(86400000*30)
var lastYear = new Date().getTime()-10800000-(86400000*300)
var intervalHour = 3600000
var intervalDay = 86400000
var intervalMonth = Math.pow(2,31)-1
var usedInterval = 0
var minimalSeries
var maximalSeries
var interval

// Show Chart Time Function
function chartTime(time, timeChartId) {
  var date = new Date()
  time === 'daily' ? dateTime = date.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', day: 'numeric', month: 'long'})
  : time === 'monthly' ? dateTime = date.toLocaleDateString("en-US", { year: 'numeric', month: 'long'})
  : time === 'yearly' ? dateTime = date.toLocaleDateString("en-US", { year: 'numeric'})
  : ''

  $('#'+timeChartId).html('<small>'+dateTime+'</small>');
}

chartTime('daily', 'chart5Time')
chartTime('daily', 'chart3Time')

// Select Chart 6
var selectChart6 = $('#select-chart6').val()
chartTime(selectChart6, 'chart6Time')

$('#select-chart6').on('change', function () {
  var selectValue = $('#select-chart6').val()
  if (selectValue == 'monthly') {
    n = 30;
  } else if (selectValue == 'yearly') {
    n = 12;
  } else {
    n = 7;
  }
  // let dataRandom = callRandomData();
  $('#chart6').html('');
  initChart6(n);
  chartTime(selectValue, 'chart6Time')
})

// Select Chart 5
$('#select-chart5').on('change', function () {
  var selectValue = $(this).val();
  $('#chart5').html('');
  chart5(selectValue);
});

$('#select-chart5').html('');
plant.forEach((item, index) => {
  $('#select-chart5').append(`<option value="${index}">${item}</option>`)
});

// Function CallRandomData
function callRandomData() {
  dataDigital = randomData(n);
  dataUtility = randomData(n);
  dataBuilding = randomData(n);
  dataManufacturing = randomData(n);

  datas = {
    dataDigital: dataDigital,
    dataUtility: dataUtility,
    dataBuilding: dataBuilding,
    dataManufacturing: dataManufacturing
  }

  $('#chart6').html('');
  return datas
}

// Function Data Emission Per Plant
function dataEmissionsPerPlant(plants) {
  let data = [];
  let total_emissions, offset, target = 0;
  plants.forEach((item, index) => {
    total_emissions = Math.random() * emisiYearly.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    target = total_emissions * 0.9;
    offset = total_emissions - target;
    data.push({
      id: index,
      name: item,
      data: {
        total_emissions: Math.floor(total_emissions),
        offset: Math.floor(offset),
        target: Math.floor(target)
      }
    })
  })
  return data
}

// Function Random Data
function randomData(n = 30) {
  let average = productionYearly.reduce((a, b) => a + b, 0) / productionYearly.length;
  let maxValue = Math.max(...productionYearly);
  let minValue = Math.min(...productionYearly);
  let dataRandom = [];
  average = average.toFixed(2)

  for (let i = 0; i < n; i++) {
    dataRandom[i] = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }

  return dataRandom;
}

// CHART 6 init
const initChart6 = (n) => {
  let sumDigital, sumUtility, sumBuilding, sumManufacturing, total = 0;
  const presentase = (n = 4) => {
    let data = [];
    let tmpPresentase = 100;
    for (let i = 0; i < n; i++) {
      if (i == n - 1) {
        data[i] = tmpPresentase;
      } else {
        data[i] = Math.round(Math.random() * (tmpPresentase + i));
        tmpPresentase = tmpPresentase - data[i];
      }
    }
    return data;
  }

  let precentData = presentase();

  const CalculateData = (data, precentData) => {
    sumDigital = Math.round(data * precentData[0] / 100);
    sumUtility = Math.round(data * precentData[1] / 100);
    sumBuilding = Math.round(data * precentData[2] / 100);
    sumManufacturing = Math.round(data * precentData[3] / 100);
    return [sumDigital, sumUtility, sumBuilding, sumManufacturing];
  }

  if (n !== 12) {
    if (n === 30) {
      totalEmisi = emisiYearly.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) * presentaseMonth;
    } else {
      totalEmisi = emisiYearly.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) * presentaseMonth / 4; // 7 hari
    }
  } else {
    totalEmisi = emisiYearly.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
  }

  let result = CalculateData(totalEmisi, precentData);
  total = totalEmisi.toFixed(2);
  
  $('#totalChart6').html('<b>Total : ' + total + ' KgCO2</b>')

  var options = {
    series: [(result[0] / totalEmisi) * 100, (result[1] / totalEmisi) * 100, (result[2] / totalEmisi) * 100, (result[3] / totalEmisi) * 100],
    chart: {
      height: '80%',
      type: 'radialBar',
    },
    colors: ['#FFC107', '#3B99FF', '#FF9900', '#4CAF50'],
    plotOptions: {
      radialBar: {
        offsetY: 0,
        dataLabels: {
          value: {
            formatter: function (val) {
              let label = (val / 100) * total;
              return label.toFixed(2) + " KgCO2"
            }
          },
          total: {
            color: '#fbfbfb',
            show: true,
            label: 'Total',
            formatter: function (w) {
              return total + " KgCO2"
            }
          }
        }
      }
    },
    labels: ['manufacturing', 'building', 'utility', 'digital'],
    legend: {
      show: true,
      position: 'bottom',
      formatter: function(label, opts) {
        let data = (opts.w.globals.series[opts.seriesIndex] / 100) * total;
        return label + " : " + data.toFixed(2) + " KgCO2"
      }
    },
    responsive: [{
      breakpoint: 3840,
      options: {
        chart: {
          height: '75%'
        },
        legend: {
          position: 'left'
          
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '5%',
            },
            dataLabels: {
              name: {
                fontSize: '11px',
              },
              value: {
                color: '#fbfbfb',
                fontSize: '13px',
                formatter: function (val) {
                  let label = (val / 100) * total;
                  return label.toFixed(2) + " KgCO2"
                }
              },
              total: {
                color: '#fbfbfb',
                fontSize: '13px',
                show: false,
                label: 'Total',
                formatter: function (w) {
                  return total + " KgCO2"
                }
              },
            }
          }
        }
      }
    }]
  };

  var chart = new ApexCharts(document.querySelector("#chart6"), options);
  chart.render();
}

initChart6(n)

// function chart6(data) {
//     console.log(data, 'chart6', data.dataBuilding.reduce((a, b) => a + b, 0))
//     var sumBuilding = data.dataBuilding.reduce((a, b) => a + b, 0)
//     var sumManufacturing = data.dataManufacturing.reduce((a, b) => a + b, 0)
//     var sumDigital = data.dataDigital.reduce((a, b) => a + b, 0)
//     var sumUtility = data.dataUtility.reduce((a, b) => a + b, 0)
//     var total = sumBuilding + sumDigital + sumManufacturing + sumUtility;

//     var persentaeBuilding = (sumBuilding / total) * 100
//     var persentaeManufacturing = (sumManufacturing / total) * 100
//     var persentaeUtility = (sumUtility / total) * 100
//     var persentaeDigital = (sumDigital / total) * 100

//     //Chart 6
//     var options = {
//     series: [persentaeManufacturing.toFixed(2), persentaeBuilding.toFixed(2), persentaeUtility.toFixed(2), persentaeDigital.toFixed(2)],
//     chart: {
//       type: 'radialBar',
//     },
//     plotOptions: {
//       radialBar: {
//         dataLabels: {
//           name: {
//             // fontSize: '22px',
//           },
//           value: {
//             // color: '#fbfbfb',
//             // fontSize: '16px',
//             formatter: function(val){
//                 let label = (val/100)*total;
//               return label.toFixed(2) +" KgCO2"
//             }
//           },
//           total: {
//             // color: '#fbfbfb',
//             show: true,
//             label: 'Total',
//             formatter: function (w) {
//               return total +" KgCO2"
//             }
//           }
//         }
//       }
//     },
//     labels: ['manufacturing','building','utility','digital'],
//     responsive: [{
//       breakpoint: 3840,
//       options: {
//         plotOptions: {
//           radialBar: {
//             dataLabels: {
//               name: {
//                 fontSize: '13px',
//               },
//               value: {
//                 color: '#fbfbfb',
//                 fontSize: '13px',
//                 formatter: function(val){
//                     let label = (val/100)*total;
//                   return label.toFixed(2) +" KgCO2"
//                 }
//               },
//               total: {
//                 color: '#fbfbfb',
//                 fontSize: '13px',
//                 show: true,
//                 label: 'Total',
//                 formatter: function (w) {
//                   return total +" KgCO2"
//                 }
//               }
//             }
//           }
//         }
//       }
//     }]
//     };

//     var chart = new ApexCharts(document.querySelector("#chart6"), options);
//     chart.render();
// }

// function chart5(data) {
//   var sumBuilding = data.dataBuilding.reduce((a, b) => a + b, 0)
//   var sumManufacturing = data.dataManufacturing.reduce((a, b) => a + b, 0)
//   var sumDigital = data.dataDigital.reduce((a, b) => a + b, 0)
//   var sumUtility = data.dataUtility.reduce((a, b) => a + b, 0)
//   var total = sumBuilding + sumDigital + sumManufacturing + sumUtility;
//   var target = total * 0.98;
//   var result = total - target;
//   result = result

//   // Chart5
//   var options = {
//     series: [188, 32],
//     chart: {
//       type: 'pie',
//     },
//     legend: {
//       position: 'bottom',
//     },
//     labels: ['Total Emission', 'Offset'],
//     dataLabels: {
//       enabled: true,
//       formatter: function (val, series) {
//         // console.log(val, "value")
//         // console.log(series.w.config.series[0], 'series')
//         var data = series.w.config.series;
//         // for (let i = 0; i < data.length; i++) {
//         // console.log(data[i], "ini datanya");
//         // return data[i] + " KgCO2";
//         // }
//       }
//     },
//   };

//   var chart = new ApexCharts(document.querySelector("#chart5"), options);
//   chart.render();

//   // Chart5
//   // var options = {
//   //     series: [total, result],
//   //     chart: {
//   //       width: 380,
//   //       height: 450,
//   //       type: 'pie',
//   //     },
//   //     legend: {
//   //       position: 'bottom',
//   //     },
//   //     labels: ['Total Emission', 'Offset'],
//   //     responsive: [{
//   //       breakpoint: 480,
//   //       options: {
//   //         chart: {
//   //           width: 200,
//   //           height: 450,
//   //         },
//   //         legend: {
//   //           position: 'bottom'
//   //         }
//   //       }
//   //     }]
//   //   };

//   //   var chart = new ApexCharts(document.querySelector("#chart5"), options);
//   //   chart.render();

// }

// CHART 5
function chart5(data = 0) {
  totalEmission = dataTotalEmissionsPlant[data].data.total_emissions
  totalOffset = dataTotalEmissionsPlant[data].data.offset
  console.log(totalEmission, 'totalEmission')
  var options = {
    series: [totalEmission, totalOffset],
    chart: {
      type: 'pie',
    },
    colors: ['#FFC107', '#FF9900'],
    legend: {
      position: 'bottom',
      formatter: function(label, opts) {
        return label + ' : ' + opts.w.globals.series[opts.seriesIndex] + ' KgCO2'
      }
    },
    labels: ['Total Emission', 'Offset'],
    dataLabels: {
      enabled: false,
    },
  };
  var chart = new ApexCharts(document.querySelector("#chart5"), options);
  chart.render();
}

chart5()

// Catatan KRW1
// JenisEnergi yg ada Natgas, Electric dan Diesel Oil 
// Area Manufacturing

//Chart 6
// var options = {
//   series: [44, 55, 67, 83],
//   chart: {
//     type: 'radialBar',
//   },
//   plotOptions: {
//     radialBar: {
//       dataLabels: {
//         name: {
//           fontSize: '22px',
//         },
//         value: {
//           color: '#fbfbfb',
//           fontSize: '16px',
//           formatter: function(val){
//             return val +" KgCO2"
//           }
//         },
//         total: {
//           color: '#fbfbfb',
//           show: true,
//           label: 'Total',
//           formatter: function (w) {
//             return 249 +" KgCO2"
//           }
//         }
//       }
//     }
//   },
//   labels: ['manufacturing','building','utility','digital'],
// };

// chart1 Total Emission

// function filterDataChart1(filter) {
//   var filteredDataChart = []

//   var filteredData = dataChart1.filter(function(data){ return data.time == filter });

//   filteredData[0].carbon.forEach( data => {
//     filteredDataChart.push(data.value)
//   });

//   console.log(filteredDataChart)

//   ApexCharts.exec("data-chart1", 'updateSeries',
//     filteredDataChart
//   )
// }
// console.log(filterDataChart1(value),'tes chart1')

// Generate Data Production Monthly and Daily
var productionMonthly = [] 
var productionDaily = [] 

// Random Between
function getRandomNumberBetweenIncluding(min, max) {
  return Number((Math.floor(Math.random() * (max - min + 1)) + min).toFixed(0));
}

// Random With Fixed Sum
function randomNumbersWithFixedSum(quantity, sum, fix) {
  // only a single number required; return the passed sum.
  if (quantity === 1) {
      return [sum];
  }

  // Create one random number and return an array containing that number
  // as first item. Then use the spread operator and recursively execute
  // the function again with a decremented quantity and the updated  
  // maximum possible sum.

  var average = getRandomNumberBetweenIncluding((fix/quantity)/2, fix/quantity) 

  const randomNum = getRandomNumberBetweenIncluding(average, sum/quantity);
  return [
      randomNum,
      ...randomNumbersWithFixedSum(quantity - 1, sum - randomNum, sum),
  ];
}

// CHART 1
// Generate Data for Chart 1
function generateDataChart1Car () {
  productionMonthly = []
  productionDaily = []
  var productionMonthlyYear = []
  var productionDailyYear = [] 
  
  productionYearly.forEach((data) => {
    for(i=0;i<30;i++) {
      productionMonthlyYear.push([randomNumbersWithFixedSum(30, data, data)])
    }
    
    var monthly = data/30
    
    for(i=0;i<24;i++) {
      productionDailyYear.push([randomNumbersWithFixedSum(24, monthly, monthly)])
    }
  })
  
  productionMonthlyYear[9][0][productionMonthlyYear[9][0].length - 1] = Number(productionMonthlyYear[9][0][productionMonthlyYear[9][0].length - 1].toFixed(2)) 
  productionDailyYear[9][0][productionDailyYear[9][0].length - 1] = Number(productionDailyYear[9][0][productionDailyYear[9][0].length - 1].toFixed(2)) 

  productionMonthly = productionMonthlyYear[9][0]
  productionDaily = productionDailyYear[9][0]

  console.log("monthly",productionMonthly.slice(0,10))
  console.log("daily",productionDaily)
}

generateDataChart1Car()

// Data Chart 1
var dataChart1 = [
  // yearly
  {
    "time": "yearly",
    "label": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    "target": [2311, 2310, 2309, 2308, 2307, 2306, 2305, 2304, 2303, 2302],
    "emisi": [2311.75, 2301.75, 2307.75, 2290.75, 2299.75, 2304.75, 2304.75, 2311.75, 2303.75, 2301.75],
    "produksi": productionYearly.slice(0,10)
  },
  // monthly
  {
    "time": "monthly",
    "label": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "target": [77.14, 77.13, 77.12, 77.11, 77.1, 77.09, 77.08, 77.07, 77.06, 77.05],
    "emisi": [77.05, 77.04, 77.06, 77.03, 77.02, 77.07, 77.08, 77.01, 77.00, 77.09],
    "produksi": productionMonthly.slice(0,10)
  },
  // daily
  {
    "time": "daily",
    "label": ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "08:00", "10:00",
      "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    "target": [3.21, 3.21, 3.21, 3.21, 3.21, 3.21, 3.21, 3.21, 3.21, 3.21, 3.21, 3.21, 3.21, 3.21, 3.21, 3.21, 3.21,
      3.21, 3.21, 3.21, 3.21, 3.21, 3.21, 3.21],
    "emisi": [3.20, 3.21, 3.22, 3.23, 3.19, 3.18, 3.17, 3.16, 3.15, 3.14, 3.24, 3.25, 3.26, 3.27, 3.28, 3.29, 3.13,
      3.12, 3.11, 3.10, 3.21, 3.20, 3.19, 3.18],
    "produksi": productionDaily
  },
]

// CHART 1
$('#select-chart1').on('change', function () {
  var value = $('#select-chart1').val()

  chart1(value)
  chartTime(value, 'chart1Time')
})

// YAxis Custom if Normal
var yaxisChart1Normal = [
  {
    title: {
      text: "Emission",
      style: {
        fontSize: '10px',
      },
      offsetX: 10,
    },
    labels: {
      maxWidth: 60,
      formatter: function(val, chart) {
        if( val >= 1000) {
          val = (val / 1000).toFixed(0) + 'K'
        }
        
        return val + " KgCO2"
      }
    },
  },
  {
    opposite: false,
    title: {
      text: "Car Production",
      style: {
        fontSize: '10px',
      },
      offsetX: 10,
    },
    labels: {
      maxWidth: 60,
      formatter: function(val, chart) {
        if( val >= 1000) {
          val = (val / 1000).toFixed(0) + 'K'
        }
        
        return val
      },
      offsetX: 20,
    },
  }
]

// YAxis Custom if Large
var yaxisChart1Large = [
  {
    title: {
      text: "Emission",
      style: {
        fontSize: '30px'
      }
    },
    labels: {
      fontSize: '30px',
      minWidth: 165,
      maxWidth: 165,
      formatter: function(val, chart) {
        if( val >= 1000) {
          val = (val / 1000).toFixed(0) + 'K'
        }
        
        return val + " KgCO2"
      }
    }
  },
  {
    opposite: false,
    title: {
      text: "Car Production",
      style: {
        fontSize: '30px'
      }
    },
    labels: {
      fontSize: '30px',
      minWidth: 150,
      maxWidth: 150,
      formatter: function(val, chart) {
        if( val >= 1000) {
          val = (val / 1000).toFixed(0) + 'K'
        }
        
        return val
      }
    }
  }
]

// CHART 1

// interval chart 1
var interval3
var usedInterval3

// CHART 1
function chart1(time='daily') {
  $('#chart1').html('')

  var minimalSeries
  var maximalSeries
  var dateTo
  var dateRange
  var xAxisRange
  var updateInterval

  if (time === 'daily') {
    minimalSeries = 10
    maximalSeries = 50
    dateTo = new Date().getTime()-(3600000*2)
    dateRange = 10
    xAxisRange = 777600000/24
    TICKINTERVAL3 = 86400000/24
    updateInterval = intervalHour
  } else if (time === 'monthly') {
    minimalSeries = 100
    maximalSeries = 200
    dateTo = new Date().getTime()-(3600000*2)-(86400000*30)
    dateRange = 31
    xAxisRange = 777600000
    TICKINTERVAL3 = 86400000 
    updateInterval = intervalDay
  } else if (time === 'yearly') {
    minimalSeries = 1000
    maximalSeries = 3000
    dateTo =  new Date().getTime()-(3600000*2)-(86400000*300)
    dateRange = 11
    xAxisRange = 777600000*30
    TICKINTERVAL3 = 86400000*30
    updateInterval = intervalMonth
  }     
  
  var yaxisConfig
  breakpoint === 'large' ? yaxisConfig = yaxisChart1Large : yaxisConfig = yaxisChart1Normal 

  var legendClicked = false

  var options = {
    series: [{
      name: 'emission',
      data: generateSecondWiseTimeSeries(dateTo, dateRange, {
        min: minimalSeries,
        max: maximalSeries
      }),
    },
    {
      name: 'car production',
      data: generateSecondWiseTimeSeries(dateTo, dateRange, {
        min: minimalSeries,
        max: maximalSeries
      })
    }],
    chart: {
      type: 'area',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    xaxis: {
      type: 'datetime',
      range: xAxisRange,
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        showDuplicates: false,
      }
    },
    yaxis: yaxisConfig,
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function (y) {
          if(typeof y !== "undefined") {
            return  y.toFixed(2) + " KgCO2";
          }
          return y;
          
        }
      }, {
        formatter: function (y) {
          if(typeof y !== "undefined") {
            return  y.toFixed(0) + " products";
          }
          return y;
          
        }
      }]
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center'
    },
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 3840,
      options: {
        chart: {
          height: '80%',
          events: {
            legendClick: function(chartContext, seriesIndex, config) {
              if(!legendClicked) {
                var offsetNumberTitle=0
                var offsetNumber=0
    
                legendClicked = true
              } else {
                var offsetNumberTitle=10
                var offsetNumber=20
    
                legendClicked = false
              }
              chartContext.updateOptions({
                yaxis: [
                  {
                    title: {
                      text: "Emission",
                      style: {
                        fontSize: '10px',
                      },
                      offsetX: offsetNumberTitle,
                    },
                    labels: {
                      maxWidth: 60,
                      formatter: function(val, chart) {
                        if( val >= 1000) {
                          val = (val / 1000).toFixed(0) + 'K'
                        }
                        
                        return val + " KgCO2"
                      }
                    },
                  },
                  {
                    opposite: false,
                    title: {
                      text: "Car Production",
                      style: {
                        fontSize: '10px',
                      },
                      offsetX: offsetNumberTitle,
                    },
                    labels: {
                      maxWidth: 60,
                      formatter: function(val, chart) {
                        if( val >= 1000) {
                          val = (val / 1000).toFixed(0) + 'K'
                        }
                        
                        return val
                      },
                      offsetX: offsetNumber,
                    },
                  }
                ]
              })
            }
          }
        }
      }
    }]
  };

  var chart1 = new ApexCharts(document.querySelector("#chart1"), options);
  chart1.render();

  clearInterval(interval3)
  // Set New Interval
  theInterval3(time);
  console.log(usedInterval3)

  interval3 = window.setInterval(function () {
    chart1.updateSeries([
      {
        data: [...chart1.w.config.series[0].data,
          [
            chart1.w.globals.maxX + updateInterval,
            getRandom(minimalSeries, maximalSeries)
          ]
        ]
      }, {
        data: [...chart1.w.config.series[1].data,
          [
            chart1.w.globals.maxX + updateInterval,
            getRandom(minimalSeries, maximalSeries)
          ]
        ]
      }
    ])
  
  }, usedInterval3);
}

// Get Interval Based on Selected Time 
function theInterval3 (time) {
  if (time === 'daily') {
    usedInterval3 = intervalHour
  } else if (time === 'monthly') {
    usedInterval3 = intervalDay
  } else if (time === 'yearly') {
    usedInterval3 = intervalMonth
  }
} 

// Initial Chart 1
var value = $('#select-chart1').val()
var results = []
chart1(value)
chartTime(value, 'chart1Time')

// CHART 2

// interval chart 2
var interval2
var usedInterval2

// filter data function
function filterDataForChart2(plant='karawang1', time='daily', area='all') {
  $('#chart2').html('')
  var minimalSeries
  var maximalSeries
  var dateTo
  var dateRange
  var xAxisRange
  var updateInterval

  if (time === 'daily') {
    minimalSeries = 10
    maximalSeries = 50
    dateTo = new Date().getTime()-(3600000*2)-1500000
    dateRange = 10
    xAxisRange = 777600000/24
    TICKINTERVAL2 = 86400000/24
    updateInterval = intervalHour
  } else if (time === 'monthly') {
    minimalSeries = 100
    maximalSeries = 200
    dateTo = new Date().getTime()-(3600000*2)-(86400000*30)
    dateRange = 31
    xAxisRange = 777600000
    TICKINTERVAL2 = 86400000 
    updateInterval = intervalDay
  } else if (time === 'yearly') {
    minimalSeries = 1000
    maximalSeries = 3000
    dateTo =  new Date().getTime()-(3600000*2)-(86400000*300)
    dateRange = 11
    xAxisRange = 777600000*30
    TICKINTERVAL2 = 86400000*30
    updateInterval = intervalMonth
  }  

  var options = {
    series: [
    {
      name: '',
      data: generateMinuteWiseTimeSeries(dateTo, dateRange, {
        min: 0,
        max: 0
      })
    },{
      name: 'Manufacturing',
      data: generateMinuteWiseTimeSeries(dateTo, dateRange, {
        min: minimalSeries,
        max: maximalSeries
      })
    }, {
      name: 'Building',
      data:  generateMinuteWiseTimeSeries(dateTo, dateRange, {
        min: minimalSeries,
        max: maximalSeries
      })
    }, {
      name: 'Utility',
      data:  generateMinuteWiseTimeSeries(dateTo, dateRange, {
        min: minimalSeries,
        max: maximalSeries
      })
    }, {
      name: 'Digital',
      data:  generateMinuteWiseTimeSeries(dateTo, dateRange, {
        min: minimalSeries,
        max: maximalSeries
      })
    }],
    chart: {
      id: 'chart2',
      type: 'bar',
      stacked: true,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['#4CAF50','#FFC107', '#3B99FF', '#FF9900', '#4CAF50'],
    legend: {
      position: 'top'
    },
    xaxis: {
      type: 'datetime',
      range: xAxisRange,
    },
    fill: {
      opacity: 1
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [{
      breakpoint: 3840,
      options: {
        chart: {
          height: '80%'
        },
        yaxis: {
          tickAmount: 4,
        }
      }
    }]
  };
  
  var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
  chart2.render();

  if (area === 'manufacturing') {
    chart2.showSeries('Manufacturing')
    chart2.hideSeries('Building')
    chart2.hideSeries('Utility')
    chart2.hideSeries('Digital')
  } else if (area === 'building') {
    chart2.showSeries('Building')
    chart2.hideSeries('Manufacturing')
    chart2.hideSeries('Utility')
    chart2.hideSeries('Digital')
  } else if (area === 'utility') {
    chart2.showSeries('Utility')
    chart2.hideSeries('Building')
    chart2.hideSeries('Manufacturing')
    chart2.hideSeries('Digital')
  } else if (area === 'digital') {
    chart2.showSeries('Digital')
    chart2.hideSeries('Building')
    chart2.hideSeries('Utility')
    chart2.hideSeries('Manufacturing')
  } else {  
    chart2.showSeries('Digital')
    chart2.showSeries('Building')
    chart2.showSeries('Utility')
    chart2.showSeries('Manufacturing')
  }

  $('#chart2 .apexcharts-legend-series[seriesname=""]').css('display','none')

  clearInterval(interval2)
  // Set New Interval
  theInterval2(time);
  console.log(usedInterval2)

  interval2 = window.setInterval(function () {
    chart2.updateSeries([
      {
        data: [...chart2.w.config.series[0].data,
          [
            chart2.w.globals.maxX + updateInterval,
            getRandom(minimalSeries, maximalSeries)
          ]
        ]
      }, {
        data: [...chart2.w.config.series[1].data,
          [
            chart2.w.globals.maxX + updateInterval,
            getRandom(minimalSeries, maximalSeries)
          ]
        ]
      }, {
        data: [...chart2.w.config.series[2].data,
          [
            chart2.w.globals.maxX + updateInterval,
            getRandom(minimalSeries, maximalSeries)
          ]
        ]
      }, {
        data: [...chart2.w.config.series[3].data,
          [
            chart2.w.globals.maxX + updateInterval,
            getRandom(minimalSeries, maximalSeries)
          ]
        ]
      }
    ])
  
  }, usedInterval2);
}

// Get Interval Based on Selected Time 
function theInterval2 (time) {
  if (time === 'daily') {
    usedInterval2 = intervalHour
  } else if (time === 'monthly') {
    usedInterval2 = intervalDay
  } else if (time === 'yearly') {
    usedInterval2 = intervalMonth
  }
} 

var plantChart2 = $('#select-plant-chart2').val()
var timeChart2 = $('#select-time-chart2').val()
var areaChart2 = $('#select-area-chart2').val()

chartTime(timeChart2, 'chart2Time')

// chart 2 on select
$('#select-plant-chart2').on('change', function () {
  var plant = $('#select-plant-chart2').val()
  var time = $('#select-time-chart2').val()
  var area = $('#select-area-chart2').val()
  filterDataForChart2(plant, time, area)
})

$('#select-time-chart2').on('change', function () {
  var plant = $('#select-plant-chart2').val()
  var time = $('#select-time-chart2').val()
  var area = $('#select-area-chart2').val()
  filterDataForChart2(plant, time, area)
  chartTime(time, 'chart2Time')
})

$('#select-area-chart2').on('change', function () {
  var plant = $('#select-plant-chart2').val()
  var time = $('#select-time-chart2').val()
  var area = $('#select-area-chart2').val()
  filterDataForChart2(plant, time, area)
})

filterDataForChart2(plantChart2, timeChart2, areaChart2)

// CHART 3
// filter data function
function filterDataForChart3(filter) {
  var filteredDataChart = []

  var filteredData = dataChart3.filter(function (data) { return data.plant == filter });

  filteredData[0].carbon.forEach(data => {
    filteredDataChart.push(data.value)
  });

  console.log(filteredDataChart)

  var chart3 = new ApexCharts(document.querySelector("#chart3"),
    {
      series: filteredDataChart,
      labels: ['manufacturing', 'building', 'utility', 'digital'],
      chart: {
        id: 'my-donut',
        type: 'donut',
      },
      colors: ['#FFC107', '#3B99FF', '#FF9900', '#4CAF50'],
      legend: {
        position: 'bottom',
        formatter: function(label, opts) {
          return label + " : " + opts.w.globals.series[opts.seriesIndex] + " KgCO2"
        }
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        labels: {
          rotate: 0
        }
      }, 
      responsive: [{
        breakpoint: 3840,
        options: {
          chart: {
            height: '75%'
          },
          legend:{
            position: 'left'
          }
        }
      }]
    }
  );
  chart3.render();

  ApexCharts.exec("my-donut", 'updateSeries',
    filteredDataChart
  )
}

// chart 3 on select
$('#select-chart3').on('change', function () {
  var value = $('#select-chart3').val()
  filterDataForChart3(value)
})

var plantChart3 = $('#select-chart3').val()
filterDataForChart3(plantChart3)

// CHART 4
var options = {
  series: [{
    data: data.slice()
  }],
  chart: {
    id: 'realtime',
    type: 'area',
    height: '90%',
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000
      }
    },
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  colors: ['#84C294'],
  zoom: {
    enabled: false
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime',
    range: XAXISRANGE,
  },
  yaxis: {
    max: 10000
  },
  legend: {
    show: false
  },
};

var chart4 = new ApexCharts(document.querySelector("#chart4"), options);
chart4.render();


// Chart 4 Filter Function
function chart4Filter(time) {
  if (time === 'daily') {
    TICKINTERVAL = 86400000/24
    XAXISRANGE = 777600000/24
    usedInterval = 1000

    minimalSeries = 10
    maximalSeries = 90

    getDayWiseTimeSeries(yesterday, 10, {
      min: minimalSeries,
      max: maximalSeries
    })
  } else if (time === 'monthly') {
    TICKINTERVAL = 86400000
    XAXISRANGE = 777600000
    usedInterval = 10000

    minimalSeries = 100
    maximalSeries = 500

    getDayWiseTimeSeries(lastMonth, 30, {
      min: minimalSeries,
      max: maximalSeries
    })
  } else if (time === 'yearly') {
    TICKINTERVAL = 86400000*30
    XAXISRANGE = 777600000*30
    usedInterval = 30000

    minimalSeries = 3000
    maximalSeries = 9000

    getDayWiseTimeSeries(lastYear, 10, {
      min: minimalSeries,
      max: maximalSeries
    })
  }

  getNewSeries(lastDate, {
    min: minimalSeries,
    max: maximalSeries
  })

  chart4.updateSeries([{
    data: data
  }])

  chart4.updateOptions({
    xaxis: {
      type: 'datetime',
      range: XAXISRANGE,
    },
    yaxis: {
      max: maximalSeries
    }
  })
}

// Get Interval Based on Selected Time 
function theInterval (time) {
  if (time === 'daily') {
    usedInterval = intervalHour
  } else if (time === 'monthly') {
    usedInterval = intervalDay
  } else if (time === 'yearly') {
    usedInterval = intervalMonth
  }
} 

// Update Chart 4 Interval
function updateChart4Interval(time) {
  // Clears the previous setInterval timer
  clearInterval(interval)
  // Set New Interval
  theInterval(time);
  console.log(usedInterval)
  // Set Min Max Series Based on Selected Time
  var minimalSeries
  var maximalSeries
  if (time === 'daily') {
    minimalSeries = 10
    maximalSeries = 90
  } else if (time === 'monthly') {
    minimalSeries = 100
    maximalSeries = 500
  } else if (time === 'yearly') {
    minimalSeries = 1000
    maximalSeries = 5000
  }

  interval = window.setInterval(function () {
    getNewSeries(lastDate, {
      min: minimalSeries,
      max: maximalSeries
    })
  
    chart4.updateSeries([{
      data: data
    }])
  }, usedInterval)
}

// Get Interval Based on Selected Time 
function theInterval (time) {
  if (time === 'daily') {
    usedInterval = intervalHour
  } else if (time === 'monthly') {
    usedInterval = intervalDay
  } else if (time === 'yearly') {
    usedInterval = intervalMonth
  }
} 

// Update Chart 4 Interval
function updateChart4Interval(time) {
  // Clears the previous setInterval timer
  clearInterval(interval)
  // Set New Interval
  theInterval(time);
  console.log(usedInterval)
  // Set Min Max Series Based on Selected Time
  var minimalSeries
  var maximalSeries
  if (time === 'daily') {
    minimalSeries = 10
    maximalSeries = 90
  } else if (time === 'monthly') {
    minimalSeries = 100
    maximalSeries = 500
  } else if (time === 'yearly') {
    minimalSeries = 1000
    maximalSeries = 5000
  }

  interval = window.setInterval(function () {
    getNewSeries(lastDate, {
      min: minimalSeries,
      max: maximalSeries
    })
  
    chart4.updateSeries([{
      data: data
    }])
  }, usedInterval)
}

var selectTimeChart4 = $('#select-time-chart4').val()
chart4Filter(selectTimeChart4)
chartTime(selectTimeChart4, 'chart4Time')
updateChart4Interval(selectTimeChart4)

// chart 4 on select
$('#select-plant-chart4').on('change', function () {
  var value = $('#select-time-chart4').val()

  chart4Filter(value)
  updateChart4Interval(value)
})

$('#select-time-chart4').on('change', function () {
  var value = $('#select-time-chart4').val()

  chart4Filter(value)
  updateChart4Interval(value)
  chartTime(value, 'chart4Time')
})
// var options = {
//   series: [{
//     name: 'Emission',
//     data: [31, 40, 28, 51, 42, 109, 100]
//   }, {
//     name: 'car production',
//     data: [11, 32, 45, 32, 34, 52, 41]
//   }],
//   chart: {
//     type: 'area'
//   },
//   dataLabels: {
//     enabled: false
//   },
//   stroke: {
//     curve: 'smooth'
//   },
//   xaxis: {
//     type: 'datetime',
//     categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
//   },
//   tooltip: {
//     x: {
//       format: 'dd/MM/yy HH:mm'
//     },
//   },
// };

// var chart = new ApexCharts(document.querySelector("#chart4"), options);
// chart.render();

// function getNewSeries(baseval, yrange) {
//   var newDate = baseval + 86400000;
//   lastDate = newDate;
//   data1.push({
//     x: newDate,
//     y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
//   });
//   data2.push({
//     x: newDate,
//     y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
//   });
// }