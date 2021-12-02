import React from "react";
import { FormattedDate, FormattedNumber, FormattedPlural } from "react-intl";

const TableBody = (props) => {
  return (
    <tr
      onClick={() => props.setSelectedMovie(props.movie)}
      style={{ cursor: "pointer" }}
    >
      <th scope="row">{props.movie.id}</th>
      <td>{props.movie.name}</td>
      <td>{props.movie.directedBy}</td>
      <td>{props.movie.country}</td>
      <td>
        {props.movie.budget}
        <FormattedPlural
          value={props.movie.budget}
          one=" million"
          other=" millions"
        />
      </td>
      <td>
        <FormattedDate
          value={new Date(props.movie.releaseDate)}
        ></FormattedDate>
      </td>
      <td>
        <FormattedNumber value={props.movie.views}></FormattedNumber>
      </td>
    </tr>
  );
};

export default TableBody;
