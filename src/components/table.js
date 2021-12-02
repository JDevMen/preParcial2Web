import React, { Component, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import TableBody from "./tableBody";
function TableComponent() {
  const [movies, setMovies] = useState([]);

  const urlEsp =
    "https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json";
  const urlEng =
    "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json";

  useEffect(() => {
    fetch(urlEng)
      .then((resp) => resp.json())
      .then((jsonData) => {
        console.log("JSON Data", jsonData);
        setMovies(jsonData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div id="tabla">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Directed by</th>
            <th>Country</th>
            <th>Budget</th>
            <th>Release</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          {console.log("movies", movies)}
          {movies.map((e, i) => (
            <TableBody key={i} movie={e} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableComponent;
