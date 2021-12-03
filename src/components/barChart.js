import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

function browserLanguage() {
  let lang = navigator.language || navigator.userLanguage;

  if (lang.startsWith("es")) {
    return "es";
  } else if (lang.startsWith("en")) {
    return "en";
  } else {
    return "en";
  }
}

const BarChart = () => {
  const urlEsp =
    "https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json";
  const urlEng =
    "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json";

  let url = "";

  if (browserLanguage() === "es") url = urlEsp;
  else if (browserLanguage() === "en") url = urlEng;
  else url = "";

  const tWidth = 500;
  const tHeight = 400;

  const d3Chart = useRef();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((jsonData) => {
        console.log("Peliculear", jsonData);
        setMovies(jsonData);
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
          .domain(movies.map((d) => d.id))
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
          .data(movies)
          .join("rect")
          .attr("x", (d) => x(d.id))
          .attr("y", (d) => y(d.views))
          .attr("width", x.bandwidth())
          .attr("height", (d) => height - y(d.views))
          .style("fill", "steelblue");
      });
  }, []);

  return (
    <div id="chartD3">
      <svg ref={d3Chart}></svg>
    </div>
  );
};

export default BarChart;
