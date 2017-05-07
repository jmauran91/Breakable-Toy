import React from 'react';
import {ReactDOM, render} from 'react-dom';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import IndexContainer from './containers/IndexContainer';
import ShowContainer from './containers/ShowContainer';

const App = (props) => {
  return(
    <Router history={browserHistory}>
      <route path="/" component={IndexContainer} />
      <route path="/users/:id" component={ShowContainer} />
    </Router>
  )
}

export default App;
