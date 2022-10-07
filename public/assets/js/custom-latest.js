// Data 
var emisiYearly =['27741,33']
var time =['00:00','01:00','02:00','03:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00',
'13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']
var date =['2022-03-01','2022-02-01','2022-01-01','2021-12-01','2021-11-01','2021-10-01','2021-09-01','2021-08-01','2021-07-01',
'2021-06-01','2021-05-01','2021-04-01']
var electric =['7500','9400']
var targetElectricHourly = 7800
var targetGasHourly = 1600
var targetFuelHourly = 4000
var targetElectricDaily = 7800*24
var targetGasDaily = 1600*24
var targetFuelDaily = 4000*24
var JenisEnergi = ['Electricity','LPG','Diesel Oil','Natural Gas']
var area = ['manufacturing','building','utility','digital']
var plant = ['Karawang1','Karawang2','Karawang3','Sunter1','Sunter2']
var productionYearly = ['7709','6975','7709','7203','7546','7788','8158','8485','8516','9196','6048','7659']

// Catatan KRW1
// JenisEnergi yg ada Natgas, Electric dan Diesel Oil 
// Area Manufacturing

//Chart 6
var options = {
  series: [44, 55, 67, 83],
  chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
          formatter: function(val){
            return val +" TonCO2"
          }
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (w) {
            return 249 +" TonCO2"
          }
        }
      }
    }
  },
  labels: ['manufacturing','building','utility','digital'],
};

var chart = new ApexCharts(document.querySelector("#chart6"), options);
chart.render();

// chart1
var options = {
  series: [{
    name: 'emission',
    data: [31, 40, 28, 51, 42, 109, 100]
  }],
  chart: {
    type: 'area',
    height: 350,
    zoom: {
      enabled: false
    }
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  yaxis: {
    opposite: true
  },
  legend: {
    horizontalAlign: 'left'
  }
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

// chart2
var options = {
  series: [{
    name: 'manufacturing',
    data: [44, 55, 41, 67, 22, 43]
  }, {
    name: 'building',
    data: [13, 23, 20, 8, 13, 27]
  }, {
    name: 'utility',
    data: [11, 17, 15, 15, 21, 14]
  }, {
    name: 'digital',
    data: [21, 7, 25, 13, 22, 8]
  }],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    },
    toolbar: {
      show: false,
    }
  },
  legend: {
    position: 'top'
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10
    },
  },
  xaxis: {
    type: 'datetime',
    categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
      '01/05/2011 GMT', '01/06/2011 GMT'
    ],
  },
  fill: {
    opacity: 1
  }
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();

// chart3
var options = {
  series: [44, 55, 41, 17],
  labels: ['manufacturing','building','utility','digital'],
  chart: {
    type: 'donut',
  },
  legend: {
    position: 'bottom',
    itemMargin: {
      horizontal: 10,
      vertical: 5
    } 
  },
  dataLabels: {
    enabled: true,
    formatter: function(val){
      return val +" TonCO2"
    }
  },
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();

// Chart5
var options = {
  series: [188, 32],
  chart: {
    width: 380,
    height: 450,
    type: 'pie',
  },
  legend: {
    position: 'bottom',
  },
  labels: ['Total Emission', 'Offset'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200,
        height: 450,
      },
      legend: {
        position: 'bottom'
      }
    }
  }],
  dataLabels: {
    enabled: true,
    formatter: function(val, series){
      console.log(val, "value")
      // console.log(series.w.config.series[0], 'series')
      var data = series.w.config.series;
      for(let i=0;i<data.length;i++){
        console.log(data[i],"ini datanya");
        // return data[i] + " TonCO2";
      }
    }
  },
};

var chart = new ApexCharts(document.querySelector("#chart5"), options);
chart.render();


//Define a method to simulate data, this is the method of ApexCharts official website 
function  generateDayWiseTimeSeries ( baseval , count , yrange )  {  
  var i =  0 ; 
  var series =  [ ] ; 
  while  ( i < count )  { 
    var x = baseval ; 
    var y = Math.floor( Math.random()*(yrange.max-yrange.min+.1 ))+yrange.min;

    series.push([x,y]) ; 
    baseval +=  12 ; 
    i++ ; 
  } 
  return series ; 
}

// Chart4
var options = {
  series: [{
    name: 'Emission',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'car production',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
  chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();

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