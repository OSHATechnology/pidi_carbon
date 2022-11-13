// Chart1
var options = {
  series: [76],
  chart: {
    type: 'radialBar',
    offsetY: -20,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#e7e7e7",
        strokeWidth: '97%',
        margin: 5, // margin is in pixels
        dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2
        }
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          offsetY: -2,
          fontSize: '22px'
        }
      }
    }
  },
  grid: {
    padding: {
      top: -10
    }
  },
  fill: {
    colors: '#479e35',
    opacity: 0.9,
    type: 'solid',
  },
  labels: ['Average Results'],
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

// OPTION 2
// window.feed = function(callback) {
// var tick = {};
// tick.plot0 = Math.ceil(350 + (Math.random() * 500));
// callback(JSON.stringify(tick));
// };

// var myConfig = {
// type: "gauge",
// globals: {
//     fontSize: 25
// },
// plotarea: {
//     marginTop: 80
// },
// plot: {
//     size: '100%',
//     valueBox: {
//     placement: 'center',
//     text: '%v', //default
//     fontSize: 35,
//     rules: [{
//         rule: '%v >= 700',
//         text: '%v<br>EXCELLENT'
//         },
//         {
//         rule: '%v < 700 && %v > 640',
//         text: '%v<br>Good'
//         },
//         {
//         rule: '%v < 640 && %v > 580',
//         text: '%v<br>Fair'
//         },
//         {
//         rule: '%v <  580',
//         text: '%v<br>Bad'
//         }
//     ]
//     }
// },
// tooltip: {
//     borderRadius: 5
// },
// scaleR: {
//     aperture: 180,
//     minValue: 300,
//     maxValue: 850,
//     step: 50,
//     center: {
//         visible: false
//     },
//     tick: {
//         visible: false
//     },
//     item: {
//         offsetR: 0,
//         rules: [{
//             rule: '%i == 9',
//             offsetX: 15
//         }]
//     },
//     labels: ['300', '', '', '', '', '', '580', '640', '700', '750', '', '850'],
//         ring: {
//             size: 50,
//             rules: [{
//                 rule: '%v <= 580',
//                 backgroundColor: '#E53935'
//                 },
//                 {
//                 rule: '%v > 580 && %v < 640',
//                 backgroundColor: '#EF5350'
//                 },
//                 {
//                 rule: '%v >= 640 && %v < 700',
//                 backgroundColor: '#FFA726'
//                 },
//                 {
//                 rule: '%v >= 700',
//                 backgroundColor: '#29B6F6'
//                 }
//             ]
//         }
//     },
//     refresh: {
//         type: "feed",
//         transport: "js",
//         url: "feed()",
//         interval: 1500,
//         resetTimeout: 1000
//     },
//     series: [{
//         values: [755], // starting value
//         backgroundColor: 'black',
//         indicator: [10, 10, 10, 10, 0.75],
//         animation: {
//             effect: 2,
//             method: 1,
//             sequence: 4,
//             speed: 900
//         },
//     }]
// };

// zingchart.render({
//     id: 'chart1',
//     data: myConfig,
//     width: '100%'
// });

// OPTION 3
// var data = [
// {

//     type: "indicator",

//     mode: "gauge+number+delta",

//     value: 420,

//     title: { text: "Speed", font: { size: 24 } },

//     delta: { reference: 400, increasing: { color: "RebeccaPurple" } },

//     gauge: {

//     axis: { range: [null, 500], tickwidth: 1, tickcolor: "darkblue" },

//     bar: { color: "darkblue" },

//     bgcolor: "white",

//     borderwidth: 2,

//     bordercolor: "gray",

//     steps: [

//         { range: [0, 250], color: "cyan" },

//         { range: [250, 400], color: "royalblue" }

//     ],

//     threshold: {

//         line: { color: "red", width: 4 },

//         thickness: 0.75,

//         value: 490

//     }

//     }

// }

// ];

// var layout = {

// height: 400,

// margin: { t: 25, r: 25, l: 25, b: 25 },

// paper_bgcolor: "lavender",

// font: { color: "darkblue", family: "Arial" }

// };
  
// Plotly.newPlot('chart1', data, layout);

// USED OPTION
// chart2
var options = {
  series: [76],
  chart: {
  type: 'radialBar',
  offsetY: -20,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#e7e7e7",
        strokeWidth: '97%',
        margin: 5, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          color: '#999',
          opacity: 1,
          blur: 2
        }
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          offsetY: -2,
          fontSize: '22px'
        }
      }
    }
  },
  grid: {
    padding: {
      top: -10
    }
  },
  fill: {
    colors: '#479e35',
    opacity: 0.9,
    type: 'solid',
  },
  labels: ['Average Results'],
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();

// chart3
var options = {
series: [66],
chart: {
type: 'radialBar',
offsetY: -20,
sparkline: {
    enabled: true
}
},
plotOptions: {
radialBar: {
    startAngle: -90,
    endAngle: 90,
    track: {
    background: "#e7e7e7",
    strokeWidth: '97%',
    margin: 5, // margin is in pixels
    dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        color: '#999',
        opacity: 1,
        blur: 2
    }
    },
    dataLabels: {
    name: {
        show: false
    },
    value: {
        offsetY: -2,
        fontSize: '22px'
    }
    }
}
},
grid: {
padding: {
    top: -10
}
},
fill: {
    colors: '#479e35',
    opacity: 0.9,
    type: 'solid',
},
labels: ['Average Results'],
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();

// chart4
var options = {
series: [61],
chart: {
type: 'radialBar',
offsetY: -20,
sparkline: {
    enabled: true
}
},
plotOptions: {
radialBar: {
    startAngle: -90,
    endAngle: 90,
    track: {
    background: "#e7e7e7",
    strokeWidth: '97%',
    margin: 5, // margin is in pixels
    dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        color: '#999',
        opacity: 1,
        blur: 2
    }
    },
    dataLabels: {
    name: {
        show: false
    },
    value: {
        offsetY: -2,
        fontSize: '22px'
    }
    }
}
},
grid: {
padding: {
    top: -10
}
},
fill: {
    colors: '#479e35',
    opacity: 0.9,
    type: 'solid',
},
labels: ['Average Results'],
};

var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();

// chart5
var options = {
series: [82],
chart: {
type: 'radialBar',
offsetY: -20,
sparkline: {
    enabled: true
}
},
plotOptions: {
radialBar: {
    startAngle: -90,
    endAngle: 90,
    track: {
    background: "#e7e7e7",
    strokeWidth: '97%',
    margin: 5, // margin is in pixels
    dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        color: '#999',
        opacity: 1,
        blur: 2
    }
    },
    dataLabels: {
    name: {
        show: false
    },
    value: {
        offsetY: -2,
        fontSize: '22px'
    }
    }
}
},
grid: {
padding: {
    top: -10
}
},
fill: {
    colors: '#479e35',
    opacity: 0.9,
    type: 'solid',
},
labels: ['Average Results'],
};

var chart = new ApexCharts(document.querySelector("#chart5"), options);
chart.render();

// chart6
var options = {
  series: [{
    name: 'Fuel',
    data: [0, 55, 0, 37]
  }, {
    name: 'Gas',
    data: [53, 0, 33, 52]
  }, {
    name: 'Electricity',
    data: [12, 80, 64, 80]
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
    categories: ['PAINTING', 'WELDING', 'PRESS', 'ASSY'],
    labels: {
      formatter: function (val) {
      return val + "K"
      }
    }
  },
  yaxis: {
    title: {
      text: undefined
    },
  },
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
    position: 'bottom',
    horizontalAlign: 'center',
  },
  colors: ['#56A546','#46A666','#A1B300']
};

var chart = new ApexCharts(document.querySelector("#chart6"), options);
chart.render();

// chart7
var options = {
  series: [44, 55, 41],
  chart: {
    height: 300,
    type: 'donut',
  },
  legend: {
    position: 'bottom',
  },
  colors: ['#56A546','#46A666','#A1B300'],
  labels: ['Fuel', 'Gas', 'Electricity'],
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

var chart = new ApexCharts(document.querySelector("#chart7"), options);
chart.render();


// chart 8
var options = {
  series: [
    {
      name: "Welding",
      data: [98, 96, 94, 92, 90, 88, 86, 84, 82, 80, 78, 76]
    },
    // {
    //   name: "Painting",
    //   data: [88, 86, 84, 82, 80, 78, 76, 74, 72, 70, 68, 66]
    // },
    // {
    //   name: "Press",
    //   data: [78, 76, 74, 72, 70, 68, 66, 64, 62, 60, 58, 56]
    // },
    // {
    //   name: "Assy",
    //   data: [68, 66, 64, 62, 60, 58, 56, 54, 52, 50, 48, 46]
    // }
  ],
  chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#56A546', '#46A666', '#A1B300', '#2B5323'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Average Emission',
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    title: {
      text: 'Years'
    }
  },
  yaxis: {
    title: {
      text: 'Percentage'
    },
    min: 10,
    max: 100
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
};

var chart = new ApexCharts(document.querySelector("#chart8"), options);
chart.render();

// chart 9
var options = {
  series: [
    {
      name: "Painting",
      data: [35641, 29283, 38492, 48271, 47361, 99990, 48292, 72637, 56351, 32736, 72634, 55555, 44444, 33333, 22222, 43234, 45321, 56432, 34312, 73643, 74627, 64536, 25352, 86452, 57632, 63535, 33444, 22334, 44444, 55555]
    },
    // {
    //   name: "Welding",
    //   data: [55641, 79283, 68492, 78271, 97361, 39990, 58292, 22637, 46351, 22736, 92634, 65555, 44444, 33333, 22222, 43234, 45321, 56432, 34312, 73643, 74627, 64536, 25352, 86452, 57632, 73535, 53444, 72334, 24444, 35555]
    // },
    // {
    //   name: "Press",
    //   data: [65641, 59283, 28492, 68271, 57361, 49990, 68292, 52637, 36351, 42736, 52634, 35555, 44444, 33333, 22222, 43234, 45321, 56432, 34312, 73643, 74627, 64536, 25352, 86452, 27632, 93535, 93444, 52334, 34444, 25555]
    // },
    // {
    //   name: "Assy",
    //   data: [75641, 39283, 58492, 58271, 27361, 59990, 88292, 42637, 26351, 42736, 22634, 25555, 44444, 33333, 22222, 43234, 45321, 56432, 34312, 73643, 74627, 64536, 25352, 86452, 37632, 43535, 23444, 92334, 84444, 75555]
    // }
  ],
  chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#56A546', '#46A666', '#A1B300', '#2B5323'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Average Emission',
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
    title: {
      text: 'Month'
    }
  },
  yaxis: {
    title: {
      text: 'Total Emission'
    },
    min: 20000,
    max: 100000
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
};

var chart = new ApexCharts(document.querySelector("#chart9"), options);
chart.render();

// chart 10
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
    range: XAXISRANGE,
  },
  yaxis: {
    max: 100
  },
  legend: {
    show: false
  },
};

var chart = new ApexCharts(document.querySelector("#chart10"), options);
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
