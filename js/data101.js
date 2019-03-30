var margin = {top: 5, right: 5, bottom: 20, left: 20},
	    width = 450 - margin.left - margin.right,
	    height = 450 - margin.top - margin.bottom;

	  var svg = d3.select(".chart").append("svg")
	      .attr("width", width + margin.left + margin.right)
	      .attr("height", height + margin.top + margin.bottom)
	    .append("g")
	      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	  var x = d3.scaleLinear()
	      .range([0,width]);

	  var y = d3.scaleLinear()
	      .range([height,0]);

	  var xAxis = d3.axisBottom()
	      .scale(x);

	  var yAxis = d3.axisLeft()
	      .scale(y);
        var url = "https://gist.githubusercontent.com/kristine919717/1276a44dfac8f637144993daf0708d37/raw/717b2e313a59086a13bc3af3d92ffd7cec54c72d/Number_of_single_parent_families_in_Canada_from_2006_to_2017.csv";

d3.csv(url).get(function(error,data){
	    y.domain(d3.extent(data, function(d){ return d["alcohol"]}));
	    x.domain(d3.extent(data, function(d){ return d["quality"]}));

	    // see below for an explanation of the calcLinear function
	    var lg = calcLinear(data, "x", "y", d3.min(data, function(d){ return d["quality"]}), d3.min(data, function(d){ return d["quality"]}));

	    svg.append("line")
	        .attr("class", "regression")
	        .attr("x1", x(lg.ptA.x))
	        .attr("y1", y(lg.ptA.y))
	        .attr("x2", x(lg.ptB.x))
	        .attr("y2", y(lg.ptB.y));

	    svg.append("g")
	        .attr("class", "x axis")
	        .attr("transform", "translate(0," + height + ")")
	        .call(xAxis)

	    svg.append("g")
	        .attr("class", "y axis")
	        .call(yAxis);

	    svg.selectAll(".point")
	        .data(data)
	      .enter().append("circle")
	        .attr("class", "point")
	        .attr("r", 3)
	        .attr("cy", function(d){ return y(d["alcohol"]); })
	        .attr("cx", function(d){ return x(d["quality"]); });

	  });

	  function types(d){
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



	    return d;
	  }

    // Calculate a linear regression from the data

		// Takes 5 parameters:
    // (1) Your data
    // (2) The column of data plotted on your x-axis
    // (3) The column of data plotted on your y-axis
    // (4) The minimum value of your x-axis
    // (5) The minimum value of your y-axis

    // Returns an object with two points, where each point is an object with an x and y coordinate

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
