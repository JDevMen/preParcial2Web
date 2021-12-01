import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import TableBody from "./tableBody";
class TableComponent extends Component {
  render() {
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
          <tbody></tbody>
        </Table>
      </div>
    );
  }
}

export default TableComponent;
