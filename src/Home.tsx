import React, { Component } from "react";
import Link from "./Link";
import { Route } from "./App";

type HomeProps = { navigate: (route: Route) => void; }

export default class Home extends Component<HomeProps> {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          <li>
            <Link path="" navigate={this.props.navigate}>Home</Link>
          </li>
          <li>
            <Link path="items" navigate={this.props.navigate}>Items</Link>
          </li>
        </ul>
      </div>
    );
  }
}
