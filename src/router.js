
import React, { Suspense, lazy, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import App from './App';
import './style/index.less';

const FindMusic = lazy('./views/FindMusic');

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Suspense fallback="loading">
            <Switch>
              <Route exact path="/web" component={FindMusic} />
              <Route path="/web/FindMusic" component={FindMusic} />
            </Switch>
          </Suspense>
        </App>
      </BrowserRouter>
    );
  }
}
