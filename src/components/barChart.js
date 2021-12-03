import React, { useRef } from "react";
import * as d3 from "d3";

const BarChart = (props) => {
  const tWidth = 500;
  const tHeight = 400;

  const d3Chart = useRef(null);

  const margin = { top: 20, right: 30, bottom: 40, left: 90 },
    width = tWidth - margin.left - margin.right,
    height = tHeight - margin.top - margin.bottom;

  const svg = d3
    .select(d3Chart.current)
    .attr("width", tWidth)
    .attr("height", tHeight)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const x = d3
    .scaleBand()
    .domain(props.movies.map((d) => d.id))
    .range([0, width])
    .padding(0.2);
  svg
    .append("g")
    .call(d3.axisBottom(x))
    .attr("transform", `translate(0, ${height})`);

  const y = d3.scaleLinear().domain([0, 10000000]).range([height, 0]);

  svg.append("g").call(d3.axisLeft(y));

  //Bars
  svg
    .selectAll("rect")
    .data(props.movies)
    .join("rect")
    .attr("x", (d) => x(d.id))
    .attr("y", (d) => y(d.views))
    .attr("width", x.bandwidth())
    .attr("height", (d) => height - y(d.views))
    .style("fill", "steelblue");

  return (
    <div id="chartD3">
      <svg ref={d3Chart}></svg>
    </div>
  );
};

export default BarChart;
