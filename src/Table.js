import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Nome</th>
        <th>e-mail</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Natacsha</td>
        <td>nat@mail.com</td>
      </tr>
      <tr>
        <td>João</td>
        <td>joao@mail.com</td>
      </tr>
      <tr>
        <td>José</td>
        <td>jose@mail.com</td>
      </tr>
      <tr>
        <td>Anna</td>
        <td>anna@mail.com</td>
      </tr>
      <tr>
        <td>Jeison</td>
        <td>jeison@mail.com</td>
      </tr>
    </tbody>
  );
};

class Table extends Component {
  render() {
    return (
      <table className="table">
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}
export default Table;
