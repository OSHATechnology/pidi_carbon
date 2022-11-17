// Replace Math.random() with a pseudo-random number generator to get reproducible results in e2e tests
// Based on https://gist.github.com/blixt/f17b47c62508be59987b
var _seed = 42;
Math.random = function() {
  _seed = _seed * 16807 % 2147483647;
  return (_seed - 1) / 2147483646;
};

var lastDate = 0;
var data = []
var TICKINTERVAL = 86400000
let XAXISRANGE = 777600000
var lastMonthRealtimeSeries = new Date().getTime()-(86400000*30)

function getDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  while (i < count) {
    var x = baseval;
    var y = parseFloat((Math.random() * (yrange.max - yrange.min + 1) + yrange.min).toFixed(2));

    data.push({
      x, y
    });
    lastDate = baseval
    baseval += TICKINTERVAL;
    i++;
  }
}

getDayWiseTimeSeries(lastMonthRealtimeSeries, 30, {
  min: 10,
  max: 90
})

function getNewSeries(baseval, yrange) {
  var newDate = baseval + TICKINTERVAL;
  lastDate = newDate

  for(var i = 0; i< data.length - 10; i++) {
    // IMPORTANT
    // we reset the x and y of the data which is out of drawing area
    // to prevent memory leaks
    data[i].x = newDate - XAXISRANGE - TICKINTERVAL
    data[i].y = 0
  }


  data.push({
    x: newDate,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  })
}

function getNewSeries(baseval, yrange) {
  var newDate = baseval + TICKINTERVAL;
  lastDate = newDate

  for(var i = 0; i< data.length - 10; i++) {
    // IMPORTANT
    // we reset the x and y of the data which is out of drawing area
    // to prevent memory leaks
    data[i].x = newDate - XAXISRANGE - TICKINTERVAL
    data[i].y = 0
  }


  data.push({
    x: newDate,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  })
}

function resetData(n){
  // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series 
  data = data.slice(data.length - n, data.length);
}