// chart1
var options = {
  series: [{
  name: 'CO2 Emmisions',
  data: [44, 55, 41, 37, 22, 43, 21]
}, {
  name: 'CO2 Tax',
  data: [53, 32, 33, 52, 13, 43, 32]
}],
  chart: {
  type: 'bar',
  height: 350,
  stacked: true,
},
plotOptions: {
  bar: {
    horizontal: true,
  },
},
stroke: {
  width: 1,
  colors: ['#fff']
},
xaxis: {
  categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
  labels: {
    formatter: function (val) {
      return val + "K"
    }
  }
},
yaxis: [
],
tooltip: {
  y: {
    formatter: function (val) {
      return val + "K"
    }
  }
},
fill: {
  opacity: 1
},
legend: {
  position: 'top',
  horizontalAlign: 'center'
}
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

// chart2
var options = {
  series: [{
  name: 'PRODUCT A',
  data: [44, 55, 41, 67, 22, 43]
}, {
  name: 'PRODUCT B',
  data: [13, 23, 20, 8, 13, 27]
}, {
  name: 'PRODUCT C',
  data: [11, 17, 15, 15, 21, 14]
}, {
  name: 'PRODUCT D',
  data: [21, 7, 25, 13, 22, 8]
},
{
  name: 'PRODUCT E',
  data: [23, 7, 25, 13, 22, 8]
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
  }
},
legend: {
  position: 'top'
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
      position: 'bottom',
      offsetX: -10,
      offsetY: 0
    }
  }
}],
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

var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
  type: 'donut',
},
legend: {
  position: 'bottom'
},
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
  data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
    min: 10,
    max: 60
  })
}],
  chart: {
  id: 'fb',
  group: 'social',
  type: 'line',
  height: 160
},
colors: ['#008FFB']
};

var chart = new ApexCharts(document.querySelector("#chart-line"), options);
chart.render();

var optionsLine2 = {
  series: [{
  data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
    min: 10,
    max: 30
  })
}],
  chart: {
  id: 'tw',
  group: 'social',
  type: 'line',
  height: 160
},
colors: ['#546E7A']
};

var chartLine2 = new ApexCharts(document.querySelector("#chart-line2"), optionsLine2);
chartLine2.render();

var optionsArea = {
  series: [{
  data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
    min: 10,
    max: 60
  })
}],
  chart: {
  id: 'yt',
  group: 'social',
  type: 'area',
  height: 160
},
colors: ['#00E396']
};

var chartArea = new ApexCharts(document.querySelector("#chart-area"), optionsArea);
chartArea.render();

var optionsSmall = {
  series: [{
  data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
    min: 10,
    max: 60
  })
}],
  chart: {
  id: 'ig',
  group: 'social',
  type: 'area',
  height: 160,
  width: 300
},
colors: ['#008FFB']
};

var chartSmall = new ApexCharts(document.querySelector("#chart-small"), optionsSmall);
chartSmall.render();

var optionsSmall2 = {
  series: [{
  data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
    min: 10,
    max: 60
  })
}],
  chart: {
  id: 'li',
  group: 'social',
  type: 'area',
  height: 160,
  width: 300
},
colors: ['#546E7A']
};

var chartSmall2 = new ApexCharts(document.querySelector("#chart-small2"), optionsSmall2);
chartSmall2.render();

// Chart6
