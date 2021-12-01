import React from "react";

const TableBody = (props) => {
  return (
    <tr>
      <th scope="row">{props.movie.id}</th>
      <td>{props.movie.name}</td>
      <td>{props.movie.directedBy}</td>
      <td>{props.movie.country}</td>
      <td>{props.movie.budget}</td>
      <td>{props.movie.releaseDate}</td>
      <td>{props.movie.views}</td>
    </tr>
  );
};

export default TableBody;
