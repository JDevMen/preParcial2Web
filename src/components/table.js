import React, { Component, useState } from "react";
import Table from "react-bootstrap/Table";
import TableBody from "./tableBody";
function TableComponent() {
  const [movies, setMovies] = useState([]);

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
