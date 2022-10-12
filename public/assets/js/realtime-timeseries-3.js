var lastDate3 = 0
var TICKINTERVAL3 = 86400000

function generateSecondWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = []
  while (i < count) {
    var x = baseval;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    lastDate3 = baseval
    baseval += TICKINTERVAL3;
    i++;
  }
  return series;
}

function getNewData(baseval, yrange) {
  var newTime = baseval + 300000;
  return {
    x: newTime,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  }
}