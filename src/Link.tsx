import React, { Component, MouseEventHandler } from "react";
import { Route } from "./App";

export default class Link extends Component<Route & { navigate: (route: Route) => void; }> {
  render() {
    switch (this.props.path) {
      case 'item':
        return <a href={this.props.path + '/' + this.props.id} onClick={this.handleClick}>{this.props.children}</a>;
      default:
        return <a href={this.props.path} onClick={this.handleClick}>{this.props.children}</a>;
    }
  }

  private readonly handleClick: MouseEventHandler<HTMLAnchorElement> = event => {
    event.preventDefault();
    this.props.navigate(this.props);
  };
}
