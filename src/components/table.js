import React, { Component } from "react";
class Table extends Component {
  render() {
    return (
      <div>
        <h1>Table</h1>
        <Table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </Table>
      </div>
    );
  }
}

export default Table;
