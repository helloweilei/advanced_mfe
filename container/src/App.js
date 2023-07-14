import React, { Suspense, lazy, useEffect } from 'react';
import Header from './components/Header';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Progress from './components/Progress';
import { useState } from 'react';
import { createBrowserHistory } from 'history';

const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co_',
});

const history = createBrowserHistory();

export default () => {
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (signedIn) {
      history.push('/dashboard');
    }
  }, [signedIn]);

  return <StylesProvider generateClassName={generateClassName}>
    <Router history={history}>
      <Header signedIn={signedIn} onSignOut={() => setSignedIn(false)} />
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route path="/auth" component={AuthApp}>
            <AuthApp onSignIn={() => setSignedIn(true)}></AuthApp>
          </Route>
          <Route path="/dashboard">
            {signedIn ? <DashboardApp></DashboardApp> : <Redirect to="/" /> }
          </Route>
          <Route path="/" component={MarketingApp} />
        </Switch>
      </Suspense>
    </Router>
  </StylesProvider>;
}