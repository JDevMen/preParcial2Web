import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import TableHead from "./tableHead";
import TableBody from "./tableBody";
class TableComponent extends Component {
  render() {
    return (
      <div id="tabla">
        <Table striped bordered hover>
          <TableHead />
          <TableBody />
        </Table>
      </div>
    );
  }
}

export default TableComponent;
