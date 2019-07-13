
import React, { Suspense, lazy, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect, Router as BrowserRouter } from 'react-router';
import history from '$config/history';

import App from './App';
import './style/index.less';

const FindMusic = lazy('./views/FindMusic');

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <App>
          <Suspense fallback="loading">
            <Switch>
              <Route
                exact
                path="/web"
                render={() => <Redirect to="/findMusic" />}
              />
              {/* <Route path="/web/FindMusic" component={FindMusic} /> */}
            </Switch>
          </Suspense>
        </App>
      </BrowserRouter>
    );
  }
}
