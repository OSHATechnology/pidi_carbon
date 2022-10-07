// Global
window.Apex = {
  chart: {
    foreColor: '#ebebeb',
  },
  // Legend
  legend: {
    fontSize: '35px',
    markers: {
      width: 20,
      height: 20
    },
    itemMargin: {
      horizontal: 30,
      vertical: 0
    },
  },

  // DataLabels
  dataLabels: {
    style: {
      fontSize: '40px'
    }
  },

  // XAxis
  xaxis: {
    labels: {
      style: {
        fontSize: '35px', 
      },
      offsetX: 0,
      offsetY: 10,
    }
  },

  // YAxis
  yaxis: {
    labels: {
      style: {
        fontSize: '35px', 
      },
      offsetX: 0,
      offsetY: 10,
    }
  },

  // Tooltip
  tooltip: {
    style: {
      fontSize: '40px'
    }
  },

  // Responsive 0-3840
  responsive: [{
    breakpoint: 3840,
      options: {
        // Legend
        legend: {
          fontSize: '13px',
          markers: {
            width: 10,
            height: 10
          },
          itemMargin: {
            horizontal: 5 ,
            vertical: 5 
          }
        },

        // DataLabels
        dataLabels: {
          style: {
            fontSize: '13px'
          }
        },

        // XAxis
        xaxis: {
          labels: {
            style: {
              fontSize: '10px', 
            },
            offsetX: 0,
            offsetY: 0,
          }
        },

        // YAxis
        yaxis: {
          labels: {
            style: {
              fontSize: '10px', 
            },
            offsetX: 0,
            offsetY: 0,
          }
        },

        // Tooltip
        tooltip: {
          style: {
            fontSize: '13px'
          }
        }
      }
  }]
}

// chart2
var options = {
  // series
  series: [{
    name: 'Manufacturing',
    data: [44, 55, 41, 67, 22, 43]
  }, {
    name: 'Building',
    data: [13, 23, 20, 8, 13, 27]
  }, {
    name: 'Utility',
    data: [11, 17, 15, 15, 21, 14]
  }, {
    name: 'Vehicles',
    data: [21, 7, 25, 13, 22, 8]
  }],

  // chart
  chart: {
    type: 'bar',
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },

  // legend
  legend: {
    position: 'top'
  },

  // plotoptions
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 15
    },
  },

  // xaxis
  xaxis: {
    type: 'datetime',
    categories: ['01/01/2022 GMT', '01/02/2022 GMT', '01/03/2022 GMT', '01/04/2022 GMT',
      '01/05/2022 GMT', '01/06/2022 GMT', 
    ],
  },

  // fill
  fill: {
    opacity: 1
  }
};

var chartCustom = new ApexCharts(document.querySelector("#chart2"), options);
chartCustom .render();

// chart3
var options = {
  series: [44, 55, 41, 17],
  labels: ['Manufacturing','Building','Utility','Vehicles'],
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

var chartCustomLegend1 = new ApexCharts(document.querySelector("#chart3"), options);
chartCustomLegend1.render();

checkLegends1()

function checkLegends1() {
  var allLegends = document.querySelectorAll(".custom-legend-1 input[type='checkbox']")

  for(var i = 0; i < allLegends.length; i++) {
    if(!allLegends[i].checked) {
      chart.toggleSeries(allLegends[i].value)
    }
  }
}

// chart6
var options = {
  // series
  series: [{
    name: 'CO2 Emission',
    type: 'column',
    data: [10, 22, 25, 15, 25, 28, 38, 46]
  }, {
    name: 'Tax',
    type: 'line',
    data: [20, 29, 37, 36, 44, 45, 50, 58]
  }],

  // chart
  chart: {
    type: 'line',
    stacked: false,
    toolbar: false,
    height: '150%'
  },

  // datalabels
  dataLabels: {
    enabled: false
  },

  // stroke
  stroke: {
    width: [1, 3]
  },

  // xaxis
  xaxis: {
    categories: ['apr','may','jun','jul','aug','sep','oct','nov'],
    labels: {
      style: {
        colors: '#ebebeb'
      }
    }
  },

  // yaxis
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
          colors: '#008FFB'
        }
      },
      title: {
        text: "CO2 Emission/TON",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: '#008FFB'
        }
      },
      tooltip: {
        enabled: true
      }
    },
    // multi yaxis
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
          colors: '#FEB019'
        },
      },
      title: {
        text: "Tax Rp. (Juta)",
        style: {
          color: '#FEB019'
        }
      }
    },
  ],
  tooltip: {
    fixed: {
      enabled: true,
      position: 'topLeft',
      offsetY: 30,
      offsetX: 60
    },
  },
  colors: ['#008FFB','#FEB019'],
};

var chart = new ApexCharts(document.querySelector("#chart6"), options);
chart.render();

// Chart5
var options = {
  series: [88, 32],
  chart: {
    width:'100%',
    type: 'pie',
  },
  labels: ['Total Emission', 'Target'],
  legend: {
    position: 'bottom'
  }
};

var chart = new ApexCharts(document.querySelector("#chart5"), options);
chart.render();

// Chart4
var options = {
  series: [{
    data: data.slice()
  }],
  chart: {
    id: 'realtime',
    height: '80%',
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
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime',
    range: XAXISRANGE,
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