import React, { Component } from 'react';
import Home from './Home';
import Items from './Items';
import Item from './Item';
import Error from './Error';

export type Route =
  | { path: '' }
  | { path: 'items' }
  | { path: 'item', id: number }
  ;

export default class App extends Component {
  render() {
    const [path, id] = location.search ? location.search.slice(1).split('/') : ['', undefined];
    switch (path) {
      case '': return <Home navigate={this.navigate} />;
      case 'items': return <Items navigate={this.navigate} />;
      case 'item': return <Item id={Number(id)} navigate={this.navigate} />;
      default: return <Error route={location.pathname} navigate={this.navigate} />;
    }
  }

  componentDidMount() {
    window.addEventListener('popstate', _event => {
      // Render with the new URL so that the route gets picked up
      this.forceUpdate();
    });
  }

  private readonly navigate = (route: Route) => {
    switch (route.path) {
      case 'item':
        history.pushState(null, '', '/?' + route.path + '/' + route.id);
        break;
      default:
        history.pushState(null, '', '/?' + route.path);
        break;
    }


    // Render with the new URL so that the route gets picked up
    this.forceUpdate();
  };
}
