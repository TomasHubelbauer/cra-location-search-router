import React, { Component } from "react";
import Link from "./Link";
import { Route } from "./App";

type ItemProps = { id: number; navigate: (route: Route) => void; }

export default class Item extends Component<ItemProps> {
  render() {
    return (
      <div>
        <h2>Item #{this.props.id}</h2>
        <ul>
          <li>
            <Link path="" navigate={this.props.navigate}>Back home</Link>
          </li>
          <li>
            <Link path="items" navigate={this.props.navigate}>Back to items</Link>
          </li>
        </ul>
      </div>
    );
  }
}
