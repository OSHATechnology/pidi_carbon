// OPTION 1
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

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();

// chart4
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

var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();

// chart5
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

var chart = new ApexCharts(document.querySelector("#chart5"), options);
chart.render();

// chart6
var options = {
series: [{
name: 'Fuel',
data: [44, 55, 41, 37]
}, {
name: 'Gas',
data: [53, 32, 33, 52]
}, {
name: 'Electricity',
data: [12, 17, 11, 9]
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
color: ['#479e35','#479e35','#479e35']
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
    series: [{
      name: "percentage",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 100]
  }],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: 'straight'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart8"), options);
  chart.render();

// chart 9
var options = {
    series: [{
      name: "percentage",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 100]
  }],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: 'straight'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart9"), options);
  chart.render();

  // chart 10
var options = {
    series: [{
      name: "percentage",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 100]
  }],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: 'straight'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart10"), options);
  chart.render();