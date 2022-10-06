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
    name: 'vehicles',
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

// Chart5
var options = {
  series: [88, 32],
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Total Emission', 'Target'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
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