var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

/*
 * value accessor - returns the value to encode for a given data object.
 * scale - maps value to a visual display encoding, such as a pixel position.
 * map function - maps from data value to display value
 * axis - sets up axis
 */

// setup x
var xValue = function(d) { return d.quality;}, // data -> value
    xScale = d3.scale.linear().range([0, width]), // value -> display
    xMap = function(d) { return xScale(d.quality);}, // data -> display
    xAxis = d3.svg.axis().scale(xScale).orient("bottom");

// setup y
var yValue = function(d) { return d["fixed acidity"];}, // data -> value
    yScale = d3.scale.linear().range([height, 0]), // value -> display
    yMap = function(d) { return yScale(d["fixed acidity"]);}, // data -> display
    yAxis = d3.svg.axis().scale(yScale).orient("left");


// add the graph canvas to the body of the webpage
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// add the tooltip area to the webpage
// var tooltip = d3.select("body").append("div")
//     .attr("class", "tooltip")
//     .style("opacity", 0);

// load data
var url ="https://gist.githubusercontent.com/kristine919717/43d85053e2b1208013e41db9d3be5081/raw/c8cc96722f495d4bbd388b92dc9798db717bce6e/winequality-red%25202.csv";
d3.csv(url).get(function(error, data)  {

  // change string (from CSV) into number format
  data.forEach(function(d) {
    d.quality = +d.quality;
    d["fixed acidity"] = +d["fixed acidity"];
    d["volatile acidity"] = +d["volatile acidity"];
    d["citric acid"] = +d["citric acid"];
    d["residual sugar"] = +d["residual sugar"];
    d["chlorides"] = +d["chlorides"];
    d["free sulfur dioxide"] = +d["free sulfur dioxide"];
    d["total sulfur dioxide"] = +d["total sulfur dioxide"];
    d["density"] = +d["density"];
    d["pH"] = +d["pH"];
    d["sulphates"] = +d["sulphates"];
    d["alcohol"] = +d["alcohol"];
    d["ID"] = +d["ID"];

    console.log(d);
  });

  // don't want dots overlapping axis, so add in buffer to data domain
  xScale.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1]);
  // xScale.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1]);

  yScale.domain([d3.min(data, yValue)-1, d3.max(data, yValue)+1]);

  var lg = calcLinear(data, "x", "y", d3.min(data, function(d){ return d["quality"]}), d3.min(data, function(d){ return d["quality"]}));

	    svg.append("line")
	        .attr("class", "regression")
	        .attr("x1", xScale(lg.ptA.x))
	        .attr("y1", yScale(lg.ptA.y))
	        .attr("x2", xScale(lg.ptB.x))
	        .attr("y2", yScale(lg.ptB.y));
  // get the x and y values for least squares
  // var xLabels = data.map(function (d) { return d['quality']; })
  //
  // var xSeries = d3.range(1, xLabels.length + 1);
  // var ySeries = data.map(function(d) { return d['alcohol']; });
  //
  // var leastSquaresCoeff = leastSquares(xSeries, ySeries);
  //
  // apply the reults of the least squares regression
  // var x1 = xLabels[0];
  // var y1 = leastSquaresCoeff[0] + leastSquaresCoeff[1];
  // var x2 = xLabels[xLabels.length - 1];
  // var y2 = leastSquaresCoeff[0] * xSeries.length + leastSquaresCoeff[1];
  // var trendData = [[x1,y1,x2,y2]];
  //
  // var trendline = svg.selectAll(".trendline")
  //   .data(trendData);
  //
  // trendline.enter()
  //   .append("line")
  //   .attr("class", "trendline")
  //   .attr("x1", function(d) { return xScale(d[0]); })
  //   .attr("y1", function(d) { return yScale(d[1]); })
  //   .attr("x2", function(d) { return xScale(d[2]); })
  //   .attr("y2", function(d) { return yScale(d[3]); })
  //   .attr("stroke", "black")
  //   .attr("stroke-width", 1);

  // x-axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
        .text("Quality");

  // y-axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Alcohol");

  // draw dots
  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", xMap)
      .attr("cy", yMap)
      // // .style("fill", function(d) { return color(cValue(d));})
      // .on("mouseover", function(d) {
      //     tooltip.transition()
      //          .duration(200)
      //          .style("opacity", .9);
      //     tooltip.html(d["id"] + "<br/> (" + xValue(d)
	    //     + ", " + yValue(d) + ")")
      //          .style("left", (d3.event.pageX + 5) + "px")
      //          .style("top", (d3.event.pageY - 28) + "px");
      // })
      // .on("mouseout", function(d) {
      //     tooltip.transition()
      //          .duration(500)
      //          .style("opacity", 0);
      // });


});
function leastSquares(xSeries, ySeries) {
  var reduceSumFunc = function(prev, cur) { return prev + cur; };

  var xBar = xSeries.reduce(reduceSumFunc) * 1.0 / xSeries.length;
  var yBar = ySeries.reduce(reduceSumFunc) * 1.0 / ySeries.length;
  var ssXX = xSeries.map(function(d) { return Math.pow(d - xBar, 2); })
    .reduce(reduceSumFunc);

  var ssYY = ySeries.map(function(d) { return Math.pow(d - yBar, 2); })
    .reduce(reduceSumFunc);

  var ssXY = xSeries.map(function(d, i) { return (d - xBar) * (ySeries[i] - yBar); })
    .reduce(reduceSumFunc);

  var slope = ssXY / ssXX;
  var intercept = yBar - (xBar * slope);
  var rSquare = Math.pow(ssXY, 2) / (ssXX * ssYY);

  return [slope, intercept, rSquare];
}
function calcLinear(data, x, y, minX, minY){
     /////////
     //SLOPE//
     /////////

     // Let n = the number of data points
     var n = data.length;

     // Get just the points
     var pts = [];
     data.forEach(function(d,i){
       var obj = {};
       obj.x = d[x];
       obj.y = d[y];
       obj.mult = obj.x*obj.y;
       pts.push(obj);
     });

     // Let a equal n times the summation of all x-values multiplied by their corresponding y-values
     // Let b equal the sum of all x-values times the sum of all y-values
     // Let c equal n times the sum of all squared x-values
     // Let d equal the squared sum of all x-values
     var sum = 0;
     var xSum = 0;
     var ySum = 0;
     var sumSq = 0;
     pts.forEach(function(pt){
       sum = sum + pt.mult;
       xSum = xSum + pt.x;
       ySum = ySum + pt.y;
       sumSq = sumSq + (pt.x * pt.x);
     });
     var a = sum * n;
     var b = xSum * ySum;
     var c = sumSq * n;
     var d = xSum * xSum;

     // Plug the values that you calculated for a, b, c, and d into the following equation to calculate the slope
     // slope = m = (a - b) / (c - d)
     var m = (a - b) / (c - d);

     /////////////
     //INTERCEPT//
     /////////////

     // Let e equal the sum of all y-values
     var e = ySum;

     // Let f equal the slope times the sum of all x-values
     var f = m * xSum;

     // Plug the values you have calculated for e and f into the following equation for the y-intercept
     // y-intercept = b = (e - f) / n
     var b = (e - f) / n;

     // Print the equation below the chart
     document.getElementsByClassName("equation")[0].innerHTML = "y = " + m + "x + " + b;
     document.getElementsByClassName("equation")[1].innerHTML = "x = ( y - " + b + " ) / " + m;

     // return an object of two points
     // each point is an object with an x and y coordinate
     return {
       ptA : {
         x: minX,
         y: m * minX + b
       },
       ptB : {
         y: minY,
         x: (minY - b) / m
       }
     }

   }
