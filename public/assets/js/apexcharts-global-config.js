// Global
var normalScreenConfig = {
  chart: {
    height: '100%',
    foreColor: '#fbfbfb'
  },

  xaxis: {
    logBase: 10,
  },

  // YAxis
  yaxis: {
    labels: {
      style: {
        fontSize: '10px', 
      },
      offsetX: 0,
      offsetY: 0,
      minWidth: 60,
      maxWidth: 60,
      formatter: function(val, chart) {
        if( val >= 1000) {
          val = (val / 1000).toFixed(0) + 'K'
        }
        
        return val + " KgCO2"
      }
    }
  },

  // Tooltip
  // tooltip: {
  //   style: {
  //     fontSize: '13px',
  //     fontFamily: undefined
  //   }
  // },
}

var largeScreenConfig = {
  // Chart
  chart: {
    height: '70%',
    foreColor: '#fbfbfb'
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
    }
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
        fontSize: '30px', 
      },
      offsetX: 0,
      offsetY: 10,
    }
  },

  // YAxis
  yaxis: {
    labels: {
      style: {
        fontSize: '30px', 
      },
      offsetX: 0,
      offsetY: 10,
      minWidth: 200,
      maxWidth: 200,
      formatter: function(val, chart) {
        if( val >= 1000) {
          val = (val / 1000).toFixed(0) + 'K'
        }
        
        return val + " KgCO2"
      },
    }
  },

  // Tooltip
  tooltip: {
    style: {
      fontSize: '40px',
      fontFamily: undefined
    }
  },

  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '40px',
        },
        value: {
          fontSize: '40px',
          formatter: function(val){
              let label = (val/100)*total;
            return label.toFixed(2) +" KgCO2"
          }
        },
        total: {
          fontSize: '40px',
          show: true,
          label: 'Total',
          formatter: function (w) {
            return total +" KgCO2"
          }
        }
      }
    }
  }
}


// Calculate breakpoint on page load
var getBreakpoint = function () {
  return window.getComputedStyle(document.body, ':before').content.replace(/\"/g, '');;
};
var breakpoint = getBreakpoint();

function setApexChartsGlobalConfig (screenSize) {
  if (screenSize === 'large') {
    window.Apex = largeScreenConfig
  } else {
    window.Apex = normalScreenConfig
  }
}

setApexChartsGlobalConfig(breakpoint)
