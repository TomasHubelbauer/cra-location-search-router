import React, { Component } from "react";
import Link from "./Link";
import { Route } from "./App";

type ErrorProps = { route: string; navigate: (route: Route) => void; }

export default class Error extends Component<ErrorProps> {
  render() {
    return (
      <div>
        <h2>Error</h2>
        <p>The route <code>{this.props.route}</code> was not found.</p>
        <ul>
          <li>
            <Link path="" navigate={this.props.navigate}>Home</Link>
          </li>
        </ul>
      </div>
    );
  }
}
