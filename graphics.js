var topLeftX = 46;
var topLeftY = 36;

var bottomRightX = 1088;
var bottomRightY = 544;

var width = 54.27083 * 0.3048;
var height = 26.2916 * 0.3048;

function displayPath() {
  clearPoses();
  drawPoses();
  drawPath();
}

function pixelsToMeters(x, y) {
  var xScaleFactor = width / (bottomRightX - topLeftX);
  var yScaleFactor = height / (bottomRightY - topLeftY);

  var adjustedXPixels = x - topLeftX;
  var adjustedYPixels = y - topLeftY;

  return [adjustedXPixels * xScaleFactor, adjustedYPixels * yScaleFactor];
}

function metersToPixels(x, y) {
  var xScaleFactor = width / (bottomRightX - topLeftX);
  var yScaleFactor = height / (bottomRightY - topLeftY);

  var adjustedXPixels = x / xScaleFactor;
  var adjustedYPixels = y / yScaleFactor;

  return [adjustedXPixels + topLeftX, adjustedYPixels + topLeftY];
}

function drawPoses() {


  var points = document.getElementById("points");
  var availablePoints = points.rows.length - 1;
  var pointsList = []

  var visitedPoints = 0;
  var count = 0;

  while (visitedPoints < availablePoints) {
    console.log(count);
    try {
      var name1 = "x" + count;
      var name2 = "y" + count;
      var name3 = "theta" + count;

      var x = document.getElementById(name1).value;
      var y = document.getElementById(name2).value;
      var theta = document.getElementById(name3).value;

      var coord = metersToPixels(x, y);

      // alert(x + ", " + y + ", " + theta);
      visitedPoints = visitedPoints + 1;
      pointsList.push([coord[0], coord[1], theta]);
    } catch {

    }
    count = count + 1;
  }

  // alert(pointsList);
  var mA = math.matrix([[1, 2], [3, 4], [5, 6]]);
  for (var i=0; i<pointsList.length; i++) {
    drawPose(pointsList[i], i);
  }
}

function drawPose(pose, i) {
  var x = pose[0];
  var y = pose[1];
  var theta = pose[2];

  var cir = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  cir.setAttribute("x", x);
  cir.setAttribute("y", y);
  cir.setAttribute("width", 80);
  cir.setAttribute("height", 80);
  cir.setAttribute("style", "fill:none;stroke-width:3;stroke:rgb(0,0,0)");
  cir.setAttribute("transform", "rotate(" + (-theta) + ") translate(-40,-40)");
  cir.id = ("p" + i);
  // cir.setAttribute("style", );
  console.log(x + ", " + y);

  document.getElementById("field").appendChild(cir);
}

function clearPoses() {
  var field = document.getElementById("field");
  var availablePoints = field.children.length - 1;

  var visitedPoints = 0;
  var count = 0;

  while (visitedPoints < availablePoints) {
    console.log(count);
    try {
      var name = "p" + count;
      // alert(name);
      var element = document.getElementById(name);
      element.remove();

      visitedPoints = visitedPoints + 1;
    } catch {

    }
    count = count + 1;
  }

}

function drawPath() {

}
