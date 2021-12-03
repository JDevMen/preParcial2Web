import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import TableBody from "./tableBody";
import CardComponent from "./card";
import { FormattedMessage } from "react-intl";
import BarChart from "./barChart";

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

console.log("Table console", browserLanguage());

function TableComponent() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const urlEsp =
    "https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json";
  const urlEng =
    "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json";

  let url = "";

  if (browserLanguage() === "es") url = urlEsp;
  else if (browserLanguage() === "en") url = urlEng;
  else url = "";

  console.log("urlll", url);
  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("movies") === null) {
        setMovies([]);
      } else {
        setMovies(JSON.parse(localStorage.getItem("movies")));
      }
    } else {
      fetch(url)
        .then((resp) => resp.json())
        .then((jsonData) => {
          console.log("JSON Data", jsonData);
          localStorage.setItem("movies", JSON.stringify(jsonData));
          setMovies(jsonData);
        })
        .catch((error) => console.error(error));
    }
  }, []);
  const isSelectedMovieNull = selectedMovie === null;

  return (
    <div className="container">
      <div className="row">
        <div className={`col-${isSelectedMovieNull ? "12" : "8"}`} id="tabla">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>
                  <FormattedMessage id="Name" />
                </th>
                <th>
                  <FormattedMessage id="Directed by" />
                </th>
                <th>
                  <FormattedMessage id="Country" />
                </th>
                <th>
                  <FormattedMessage id="Budget" />
                </th>
                <th>
                  <FormattedMessage id="Release" />
                </th>
                <th>
                  <FormattedMessage id="Views" />
                </th>
              </tr>
            </thead>
            <tbody>
              {console.log("movies", movies)}
              {movies.map((e, i) => (
                <TableBody
                  key={i}
                  movie={e}
                  setSelectedMovie={setSelectedMovie}
                />
              ))}
            </tbody>
          </Table>
        </div>
        {!isSelectedMovieNull && (
          <div className="col" id="card">
            <CardComponent selectedMovie={selectedMovie} />
          </div>
        )}
      </div>
      <BarChart movies={movies} />
    </div>
  );
}

export default TableComponent;
