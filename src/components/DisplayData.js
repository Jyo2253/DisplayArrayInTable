import React, { Component } from "react";
import { products } from "./data.js";
export class DisplayData extends Component {
  render() {
    return (
      <div>
        <table border={1}>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          {products.map((item) => {
            return (
              <tr key={item.id}>
                <td>{this.id}</td>
                <td>{this.title}</td>
                <td>{this.price}</td>
                <td>{this.quantity}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
export default DisplayData;
