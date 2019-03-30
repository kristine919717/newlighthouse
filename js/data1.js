
// var url = "http://haidaowuyu.com/getnumOfSingle.php";
// d3.json(url, function (json) {
//     console.log(json);
// });
// d3.csv("data/Number_of_single_parent_families_in_Canada_from_2006_to_2017.csv").get(function(error,data){
//   console.log(data);
// })
var url = "https://gist.githubusercontent.com/kristine919717/1276a44dfac8f637144993daf0708d37/raw/717b2e313a59086a13bc3af3d92ffd7cec54c72d/Number_of_single_parent_families_in_Canada_from_2006_to_2017.csv";
d3.csv(url).get(function(error,data){
  var height=600;
  var width = 1200;

  var maxYear =d3.max(data, function(d){return d.year;});
  var minYear =d3.min(data, function(d){return d.year;});
  var maxMillion =d3.max(data, function(d){return d.million;});

  var y = d3.scaleLinear()
            .domain([1.4,1.8])
            .range([height,0]);
  var x = d3.scaleLinear()
            .domain([minYear, maxYear])
            .range([0,width]);
  var yAxis = d3.axisLeft(y)
                .tickSize(-width)
;
  var xAxis = d3.axisBottom(x);

  var svg = d3.select('body').append('svg')
              .attr('height', '100%')
              .attr('width', '100%')
              .attr('class', 'firstgraph')
              .attr('id', 'firstgraph');
  var chartGroup = svg.append('g')
                      .attr('transform','translate(50,50)');
  var line = d3.line()
                .x(function(d){return x(d.year);})
                .y(function(d){return y(d.million);})
                 .curve(d3.curveMonotoneX) ;
  var graph = chartGroup.append('path').attr('d',line(data)).attr('id','maingraph');
  chartGroup.append('g').attr('class','x-axis').attr('transform','translate(0,650)').call(xAxis);
  chartGroup.append('g').attr('class','y-axis').call(customYAxis);

var totalLength = graph.node().getTotalLength();
  graph
  .attr("stroke-dasharray", totalLength + " " + totalLength)
  .attr("stroke-dashoffset", totalLength)
  .transition()
    .duration(2000)
    .attr("stroke-dashoffset", 0);

    function customYAxis(g) {
      g.call(yAxis);
      g.select(".domain").remove();
      g.selectAll(".tick line").attr("stroke", "#777").attr("stroke-dasharray", "4,5");
      g.selectAll(".tick text").attr("x", 4).attr("dy", 2);
    }
});
