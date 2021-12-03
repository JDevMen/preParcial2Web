import React from "react";
import {
  FormattedDate,
  FormattedNumber,
  FormattedPlural,
  FormattedMessage,
} from "react-intl";

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
          one={<FormattedMessage id="Million" />}
          other={<FormattedMessage id="Millions" />}
        />
      </td>
      <td>
        <FormattedDate
          value={new Date(props.movie.releaseDate)}
          year="numeric"
          month="numeric"
          day="numeric"
        ></FormattedDate>
      </td>
      <td>
        <FormattedNumber value={props.movie.views}></FormattedNumber>
      </td>
    </tr>
  );
};

export default TableBody;
