import React, { Component, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import TableBody from "./tableBody";
import Image from "react-bootstrap/Image";

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
    <div className="container">
      <div className="row">
        <div className="col" id="tabla">
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
        <div className="col" id="card">
          <div className="card">
            <Image
              className="card-img-top"
              id="cardImage"
              src="https://seocom.agency/wp-content/uploads/2019/02/bootstrap-stack.png"
              alt="Card image cap"
              fluid
            />
            <div className="card-body">
              <h5 className="card-title" id="cardTitle">
                Card title
              </h5>
              <p className="card-text" id="cardDescription">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>

              <b className="card-text" id="cardFooter">
                bold text
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableComponent;
