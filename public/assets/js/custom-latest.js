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
var productionYearly = [7709,6975,7709,7203,7546,7788,8158,8485,8516,9196,6048,7659]
var dataDigital = [];
var dataUtility = [];
var dataBuilding = [];
var dataManufacturing = [];
let n = 7;

let datass = callRandomData();
$('#select-chart6').on('change', function() {
    var selectValue = $('#select-chart6').val()
    if(selectValue == 'monthly') {
        n = 30;
    } else if(selectValue == 'yearly') {
        n = 12;
    } else {
        n = 7;
    }
    let dataRandom = callRandomData();
})

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
    chart6(datas);
    chart5(datas);
    return datas
}

function randomData(n = 30) {
    let average = productionYearly.reduce((a, b) => a + b, 0) / productionYearly.length;
    let maxValue = Math.max(...productionYearly);
    let minValue = Math.min(...productionYearly);
    let dataRandom = [];
    average = average.toFixed(2)

    for(let i = 0; i < n; i++) {
        dataRandom[i] = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }

    return dataRandom;
}

function chart6(data) {
    console.log(data, 'chart6', data.dataBuilding.reduce((a, b) => a + b, 0))
    var sumBuilding = data.dataBuilding.reduce((a, b) => a + b, 0)
    var sumManufacturing = data.dataManufacturing.reduce((a, b) => a + b, 0)
    var sumDigital = data.dataDigital.reduce((a, b) => a + b, 0)
    var sumUtility = data.dataUtility.reduce((a, b) => a + b, 0)
    var total = sumBuilding + sumDigital + sumManufacturing + sumUtility;

    var persentaeBuilding = (sumBuilding / total) * 100
    var persentaeManufacturing = (sumManufacturing / total) * 100
    var persentaeUtility = (sumUtility / total) * 100
    var persentaeDigital = (sumDigital / total) * 100

    //Chart 6
    var options = {
        series: [persentaeManufacturing.toFixed(2), persentaeBuilding.toFixed(2), persentaeUtility.toFixed(2), persentaeDigital.toFixed(2)],
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
                  let label = (val/100)*total;
                return label.toFixed(2) +" TonCO2"
              }
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                return total +" TonCO2"
              }
            }
          }
        }
      },
    labels: ['manufacturing','building','utility','digital'],
    };
    
    var chart = new ApexCharts(document.querySelector("#chart6"), options);
    chart.render();
}

function chart5(data) {
    var sumBuilding = data.dataBuilding.reduce((a, b) => a + b, 0)
    var sumManufacturing = data.dataManufacturing.reduce((a, b) => a + b, 0)
    var sumDigital = data.dataDigital.reduce((a, b) => a + b, 0)
    var sumUtility = data.dataUtility.reduce((a, b) => a + b, 0)
    var total = sumBuilding + sumDigital + sumManufacturing + sumUtility;
    var target = total*0.98;
    var result = total - target;
    result = result
    // Chart5
var options = {
    series: [total, result],
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
    }]
  };
  
  var chart = new ApexCharts(document.querySelector("#chart5"), options);
  chart.render();
}

// Catatan KRW1
// JenisEnergi yg ada Natgas, Electric dan Diesel Oil 
// Area Manufacturing

// Chart 7 
// var options = {
//   series: [{
//     name: 'Bubble1',
//     data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
//       min: 10,
//       max: 60
//     })
//   },
//   {
//     name: 'Bubble2',
//     data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
//       min: 10,
//       max: 60
//     })
//   },
//   {
//     name: 'Bubble3',
//     data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
//       min: 10,
//       max: 60
//     })
//   },
//   {
//     name: 'Bubble4',
//     data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
//       min: 10,
//       max: 60
//     })
//   }],
//     chart: {
//       height: 350,
//       type: 'bubble',
//   },
//   dataLabels: {
//       enabled: false
//   },
//   fill: {
//       opacity: 0.8
//   },
//   title: {
//       text: 'Simple Bubble Chart'
//   },
//   xaxis: {
//       tickAmount: 12,
//       type: 'category',
//   },
//   yaxis: {
//       max: 70
//   }
// };

// var chart = new ApexCharts(document.querySelector("#chart7"), options);
// chart.render();



// chart1
var options = {
  series: [{
  name: 'CO2 Emission',
  type: 'column',
  data: [10, 22, 25, 15, 25, 28, 38, 46]
}, {
  name: 'Tax',
  type: 'line',
  data: [20, 29, 37, 36, 44, 45, 50, 58]
}],
chart: {
  height: 350,
  type: 'line',
  stacked: false,
  toolbar: false
},
dataLabels: {
  enabled: false
},
stroke: {
  width: [1, 1, 4]
},
xaxis: {
  categories: ['apr','may','june','july','august','sept','oct','nov'],
},
yaxis: [
  {
    axisTicks: {
      show: true,
    },
    axisBorder: {
      show: true,
      color: '#008FFB'
    },
    labels: {
      style: {
        colors: '#008FFB',
      }
    },
    title: {
      text: "CO2 Emission/TON",
      style: {
        color: '#008FFB',
      }
    },
    tooltip: {
      enabled: true
    }
  },
  {
    seriesName: 'tax',
    opposite: true,
    axisTicks: {
      show: true,
    },
    axisBorder: {
      show: true,
      color: '#FEB019'
    },
    labels: {
      style: {
        colors: '#FEB019',
      },
    },
    title: {
      text: "Tax Rp. (Juta)",
      style: {
        color: '#FEB019',
      }
    }
  },
],
tooltip: {
  fixed: {
    enabled: true,
    position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
    offsetY: 30,
    offsetX: 60
  },
},
colors: ['#008FFB','#FEB019']
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
  series: [44, 55, 41, 17, 15],
  labels: ['manufacturing','building','utility','vehicles'],
  chart: {
    type: 'donut',
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'bottom',
    itemMargin: {
      horizontal: 10,
      vertical: 5
    } 
  }
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
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
function getNewSeries(baseval, yrange) {
  var newDate = baseval + 86400000;
  lastDate = newDate;
  data1.push({
    x: newDate,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  });
  data2.push({
    x: newDate,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  });
}

var options = {
  series: [{
    data: data.slice()
  }],
  chart: {
    id: 'realtime',
    height: 350,
    type: 'line',
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
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Dynamic Updating Chart',
    align: 'left'
  },
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime',
    // range: XAXISRANGE,
  },
  yaxis: {
    max: 100
  },
  legend: {
    show: false
  },
};

var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();

window.setInterval(function () {
  getNewSeries(lastDate, {
    min: 10,
    max: 90
  })
  
  chart.updateSeries([{
    data: data
  }])
}, 1000)

