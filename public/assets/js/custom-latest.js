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
  categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
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
    name: 'Welding',
    data: [44, 55, 41, 67, 22, 43]
  }, {
    name: 'Painting',
    data: [13, 23, 20, 8, 13, 27]
  }, {
    name: 'Press',
    data: [11, 17, 15, 15, 21, 14]
  }, {
    name: 'Assy',
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
  labels: ['Plant 1', 'Plant 2', 'Plant 3', 'Plant 4', 'Plant 5'],
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

// Chart4
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

var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();

// Chart5
var options = {
  series: [{
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 10, {
      min: 10,
      max: 60
    })
  }],
  chart: {
    id: 'fb',
    group: 'social',
    type: 'line',
    height: 260
  },
  colors: ['#008FFB']
};

var chart = new ApexCharts(document.querySelector("#chart-line"), options);
chart.render();

var optionsLine2 = {
  series: [{
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 10, {
      min: 10,
      max: 60
    })
  }],
  chart: {
    id: 'tw',
    group: 'social',
    type: 'line',
    height: 260
  },
  colors: ['#546E7A']
};

var chartLine2 = new ApexCharts(document.querySelector("#chart-line2"), optionsLine2);
chartLine2.render();

var optionsArea = {
  series: [{
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 10, {
      min: 10,
      max: 60
    })
  }],
  chart: {
    id: 'yt',
    group: 'social',
    type: 'area',
    height: 260
  },
  colors: ['#00E396']
};

var chartArea = new ApexCharts(document.querySelector("#chart-area"), optionsArea);
chartArea.render();

var optionsSmall = {
  series: [{
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 10, {
      min: 10,
      max: 60
    })
  }],
  chart: {
    id: 'ig',
    group: 'social',
    type: 'area',
    height: 260,
  },
  colors: ['#008FFB']
};

var chartSmall = new ApexCharts(document.querySelector("#chart-small"), optionsSmall);
chartSmall.render();

var optionsSmall2 = {
  series: [{
  data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 10, {
    min: 10,
    max: 60
  })
}],
  chart: {
  id: 'li',
  group: 'social',
  type: 'area',
  height: 260,
},
colors: ['#546E7A']
};

var chartSmall2 = new ApexCharts(document.querySelector("#chart-small2"), optionsSmall2);
chartSmall2.render();

// Chart6


//Define a method to simulate data, this is the method of ApexCharts official website 
function  generateDayWiseTimeSeries ( baseval , count , yrange )  {  
  var i =  0 ; 
  var series =  [ ] ; 
  while  ( i < count )  { 
    var x = baseval ; 
    var y = Math.floor( Math.random()*(yrange.max-yrange.min+.1 ))+yrange.min;

    series.push([x,y]) ; 
    baseval +=  86400000 ; 
    i++ ; 
  } 
  return series ; 
}