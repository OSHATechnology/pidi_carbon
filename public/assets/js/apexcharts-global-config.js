// Global
window.Apex = {
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
      labels: {
        colors: 'fbfbfb'
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
          colors: '#ebebeb',
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
          colors: '#ebebeb',
          fontSize: '35px', 
        },
        offsetX: 0,
        offsetY: 10,
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
            color: '#fbfbfb',
            fontSize: '40px',
            formatter: function(val){
                let label = (val/100)*total;
              return label.toFixed(2) +" TonCO2"
            }
          },
          total: {
            color: '#fbfbfb',
            fontSize: '40px',
            show: true,
            label: 'Total',
            formatter: function (w) {
              return total +" TonCO2"
            }
          }
        }
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
            },
            labels: {
              colors: '#fbfbfb'
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
                colors: '#ebebeb',
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
                colors: '#ebebeb',
                fontSize: '10px', 
              },
              offsetX: 0,
              offsetY: 0,
            }
          },
  
          // Tooltip
          tooltip: {
            style: {
              fontSize: '13px',
              fontFamily: undefined
            }
          },
        }
    }]
  }