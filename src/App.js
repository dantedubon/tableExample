import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "fixed-data-table-2/dist/fixed-data-table.css";
import "bootstrap/dist/css/bootstrap.css";
import "./fonts/fonts/fonts.css";
import TableExample from "./myTable/tableExample";
class App extends Component {
  render() {
    return <TableExample />;
  }
}

export default App;
