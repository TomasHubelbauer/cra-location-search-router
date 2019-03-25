import React, { Component } from "react";
import Link from "./Link";
import { Route } from "./App";

type ItemsProps = { navigate: (route: Route) => void; }

export default class Items extends Component<ItemsProps> {
  render() {
    return (
      <div>
        <h2>Items</h2>
        <ul>
          <li>
            <Link path="item" id={1} navigate={this.props.navigate}>Item #1</Link>
          </li>
          <li>
            <Link path="item" id={2} navigate={this.props.navigate}>Item #2</Link>
          </li>
          <li>
            <Link path="item" id={3} navigate={this.props.navigate}>Item #3</Link>
          </li>
          <li>
            <Link path="item" id={4} navigate={this.props.navigate}>Item #4</Link>
          </li>
        </ul>
      </div>
    );
  }
}
