var lastDate2 = 0
var TICKINTERVAL2 = 86400000

function getRandom(max, min) {
  return Math.floor((Math.random() * (max - min + 1)) + min)
}

function getRangeRandom(yrange) {
  return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
}

function generateMinuteWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = []
  while (i < count) {
    var x = baseval;
    var y = parseFloat((Math.random() * (yrange.max - yrange.min + 1) + yrange.min).toFixed(2));

    series.push([x,y]);
    lastDate2 = baseval
    baseval += TICKINTERVAL2;
    i++;
  }
  console.log(series)
  return series;
}

function getNewData(baseval, yrange) {
  var newTime = baseval + 300000;
  return {
    x: newTime,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  }
}