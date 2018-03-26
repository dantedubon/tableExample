import React from "react";
import { Table, Column, Cell } from "fixed-data-table-2";
import "./tableExample.css";

// Table data as a list of array.
const rows = Array(100).fill({
  noteNumber: "3N24363A",
  originalPrincipalAmount: "$40,000.00",
  currentPrincipalAmount: "$85,000.00",
  term: "1 Year",
  rate: "1.0%",
  purchaseDate: "08/19/17",
  openDate: "08/21/17",
  maturityDate: "07/31/20",
  status: "Open",
  legacyNoteNumber: "8475844",
  viewDetail: "View Details"
});

// .... and more
// Custom cell implementation with special prop
const MyCustomCell = ({ mySpecialProp }) => (
  <Cell>
    {mySpecialProp === "column2" ? "I'm column 2" : "I'm not column 2"}
  </Cell>
);

export default class TableExample extends React.Component {
  render() {
    return (
      <Table
        className="table-example"
        rowHeight={50}
        rowsCount={rows.length}
        width={900}
        height={300}
        headerHeight={50}
      >
        <Column
          columnKey="noteNumber"
          header={
            <Cell className="text-muted fixed cell-centered">Note Number</Cell>
          }
          cell={({ rowIndex, ...props }) => (
            <Cell className="cell-centered" {...props}>
              {rows[rowIndex].noteNumber}
            </Cell>
          )}
          width={150}
          fixed={true}
        />
        <Column
          columnKey="originalPrincipalAmount"
          header={
            <Cell className="text-muted cell-right ">
              Original principal amount
            </Cell>
          }
          cell={({ rowIndex, ...props }) => (
            <Cell className="cell-right" {...props}>
              {rows[rowIndex].originalPrincipalAmount}
            </Cell>
          )}
          width={150}
        />
        <Column
          columnKey="currentPrincipalAmount"
          header={
            <Cell className="text-muted cell-right">
              Current principal amount
            </Cell>
          }
          cell={({ rowIndex, ...props }) => (
            <Cell className="cell-right" {...props}>
              {rows[rowIndex].currentPrincipalAmount}
            </Cell>
          )}
          width={150}
        />
        <Column
          columnKey="term"
          header={<Cell className="text-muted cell-centered">Term</Cell>}
          cell={({ rowIndex, ...props }) => (
            <Cell className="cell-centered" {...props}>
              {rows[rowIndex].term}
            </Cell>
          )}
          width={80}
        />
        <Column
          columnKey="rate"
          header={<Cell className="text-muted cell-centered">Rate</Cell>}
          cell={({ rowIndex, ...props }) => (
            <Cell className="cell-centered" {...props}>
              {rows[rowIndex].rate}
            </Cell>
          )}
          width={80}
        />
        <Column
          columnKey="purchaseDate"
          header={
            <Cell className="text-muted cell-centered">Purchase Date</Cell>
          }
          cell={({ rowIndex, ...props }) => (
            <Cell className="cell-centered" {...props}>
              {rows[rowIndex].purchaseDate}
            </Cell>
          )}
          width={150}
        />
        <Column
          columnKey="openDate"
          header={<Cell className="text-muted cell-centered">Open Date</Cell>}
          cell={({ rowIndex, ...props }) => (
            <Cell className="cell-centered" {...props}>
              {rows[rowIndex].openDate}
            </Cell>
          )}
          width={150}
        />
        <Column
          columnKey="maturityDate"
          header={
            <Cell className="text-muted cell-centered">Maturity Date</Cell>
          }
          cell={({ rowIndex, ...props }) => (
            <Cell className="cell-centered" {...props}>
              {rows[rowIndex].maturityDate}
            </Cell>
          )}
          width={150}
        />
        <Column
          columnKey="status"
          header={<Cell className="text-muted cell-centered">Status</Cell>}
          cell={({ rowIndex, ...props }) => (
            <Cell className="cell-centered" {...props}>
              <span class="badge badge-success">Open</span>
            </Cell>
          )}
          width={150}
        />
        <Column
          columnKey="legacyNoteNumber"
          header={
            <Cell className="text-muted cell-centered">Legacy Note Number</Cell>
          }
          cell={({ rowIndex, ...props }) => (
            <Cell className="cell-centered" {...props}>
              {rows[rowIndex].legacyNoteNumber}
            </Cell>
          )}
          width={150}
        />
        <Column
          columnKey="viewDetail"
          header={
            <Cell className="text-muted cell-centered">View Details</Cell>
          }
          cell={({ rowIndex, ...props }) => (
            <Cell className="cell-centered" {...props}>
              <button type="button" class="btn btn-info btn-outline btn-sm">
                View details
              </button>
            </Cell>
          )}
          width={150}
        />
      </Table>
    );
  }
}
