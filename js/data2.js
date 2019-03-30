var url = "https://gist.githubusercontent.com/kristine919717/6616886f0e6167bf42e9a445fdde2795/raw/86cd3071158be6090d7b262ec7625d495b394f28/singlevscoupleincome.csv";
d3.csv(url).get(function(error,data){
  var height=380;
  var width = 1100;

  // var parseTime = d3.timeParse("%y");

  data.forEach(function(d) {
        // d.year = parseTime(d.date);
        d.couple = +d.couple;
        d.single = +d.single;
        d.maria = +d.maria;
      });

  var maxYear =d3.max(data, function(d){return d.year;});
  var minYear =d3.min(data, function(d){return d.year;});
  var maxSingle =d3.max(data, function(d){return d.single;});
  var maxCouple =d3.max(data, function(d){return d.couple;});
  var tip = d3.tip()
      .attr('class','d3-tip')
      .offset([-10, 0])
      .html(function(d){
        return "single-parent families ("+d.year+"): <strong>"+d.single+"</strong> CAD"
      });
  var tip2 = d3.tip()
      .attr('class','d3-tip')
      .offset([-10, 0])
      .html(function(d){
        return
"couple families ("+d.year+"): <strong>"+d.couple+"</strong> CAD"
      });
  var imagesrc="images/donationimpact/1.png";
      var tip3 = d3.tip()
          .attr('class','d3-tip mariatip')
          .offset([-10, 0])
          .html(function(d){
            return "<img src="+ imagesrc +">"+d.mariades+" <br><br><strong>Maria's income ("+d.year+"): "+d.maria+" CAD</strong>"
          });
  var y = d3.scaleLinear()
            .domain([10000,100000])
            .range([height,0]);
  var x = d3.scaleLinear()
            .domain([minYear, maxYear])
            .range([0,width]);
  var yAxis = d3.axisLeft(y)
                .tickSize(-width)
;
  var xAxis = d3.axisBottom(x).ticks(d3.timeYear.every(1));
        // .tickFormat(d3.timeFormat("%Y")(d.year));

  var svg = d3.select('body').append('svg')
              .attr('height', '100%')
              .attr('width', '100%')
              .attr('class','firstgraph')
              .attr('id','firstgraph')
              // .attr('data-aos','fade-up')
              // .attr('data-aos-anchor','#trigger-left')
              // .attr('data-aos-delay','1000');
  var chartGroup2 = svg.append('g')
                      .attr('transform','translate(100,150)');
  var line_single = d3.line()
                .x(function(d){return x(d.year);})
                .y(function(d){return y(d.single);});
                 // .curve(d3.curveMonotoneX) ;

  var line_couple = d3.line()
                      .x(function(d){return x(d.year);})
                      .y(function(d){return y(d.couple);});
                      // .curve(d3.curveMonotoneX) ;
  var line_maria = d3.line()
                      .x(function(d){return x(d.year);})
                      .y(function(d){return y(d.maria);});
  var graph1 = chartGroup2.append('path').attr('d',line_couple(data)).attr('id','maingraph1');
  var graph2 = chartGroup2.append('path').attr('d',line_single(data)).attr('id','maingraph2');
  var graph3 = chartGroup2.append('path').attr('d',line_maria(data)).attr('id','maingraph3');

  chartGroup2.append('g').attr('class','x-axis2').attr('transform','translate(0,390)').call(xAxis.ticks(7)).style("font", "14px san-serif");;
  chartGroup2.append('g').attr('class','y-axis2').attr('transform','translate(-20,0)').call(customYAxis).style("font", "14px san-serif");

 var dots1 = chartGroup2.selectAll(".dot")
  .data(data)
  .enter()
  .append("circle")
    .attr("class", "dot")
    .attr("cx", function(d){return x(d.year)})
    .attr("cy", function(d){return y(d.couple)})
    // .on('mouseover', tip2.show)
    // .on('mouseout', tip2.hide)
    .attr("r", 7);
 var dots2 = chartGroup2.selectAll(".dot2")
     .data(data)
     .enter()
     .append("circle")
       .attr("class", "dot2")
       .attr("cx", function(d){return x(d.year)})
       .attr("cy", function(d){return y(d.single)})
       .on('mouseover', tip.show)
       .on('mouseout', tip.hide)
       .attr("r", 7);
var dots3 = chartGroup2.selectAll(".dot3")
    .data(data)
    .enter()
    .append("circle")
      .attr("class", "dot3")
      .attr("cx", function(d){return x(d.year)})
      .attr("cy", function(d){return y(d.maria)})
      .on('mouseover', tip3.show)
      .on('mouseout', tip3.hide)
      .attr("r", 7);
var totalLength1 = graph1.node().getTotalLength();
graph1
.attr("stroke-dasharray", totalLength1 + " " + totalLength1)
.attr("stroke-dashoffset", totalLength1)
.transition()
  .duration(2000)
  .attr("stroke-dashoffset", 0);
var totalLength2 = graph2.node().getTotalLength();
  graph2
  .attr("stroke-dasharray", totalLength2 + " " + totalLength2)
  .attr("stroke-dashoffset", totalLength2)
  .transition()
    .duration(2000)
    .attr("stroke-dashoffset", 0);
var totalLength3 = graph3.node().getTotalLength();
  graph3
  .attr("stroke-dasharray", totalLength3 + " " + totalLength3)
  .attr("stroke-dashoffset", totalLength3)
  .transition()
    .duration(2000)
    .delay(2000)
    .attr("stroke-dashoffset", 0);
chartGroup2.call(tip);
chartGroup2.call(tip2);
chartGroup2.call(tip3);

    function customYAxis(g) {
      g.call(yAxis);
      g.select(".domain").remove();
      g.selectAll(".tick ").attr("stroke-dasharray", "4,5");
      g.selectAll(".tick text").attr("x", 4).attr("dy", 2);
    }
    $( ".story-6-hover-area" ).click(function() {
      $( ".sixthclickimage1" ).show();
      $( ".firstgraph" ).show();
      graph1
      .attr("stroke-dasharray", totalLength1 + " " + totalLength1)
      .attr("stroke-dashoffset", totalLength1)
      .transition()
        .duration(2000)
        .attr("stroke-dashoffset", 0);
        graph2
        .attr("stroke-dasharray", totalLength2 + " " + totalLength2)
        .attr("stroke-dashoffset", totalLength2)
        .transition()
          .duration(2000)
          .attr("stroke-dashoffset", 0);
          graph3
          .attr("stroke-dasharray", totalLength3 + " " + totalLength3)
          .attr("stroke-dashoffset", totalLength3)
          .transition()
            .duration(2000)
            .delay(2000)
            .attr("stroke-dashoffset", 0);
    });
});
