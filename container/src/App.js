import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Progress from './components/Progress';
import { useState } from 'react';

const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co_',
});

export default () => {
  const [signedIn, setSignedIn] = useState(false);
  return <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
      <Header signedIn={signedIn} onSignOut={() => setSignedIn(false)} />
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route path="/auth" component={AuthApp}>
            <AuthApp onSignIn={() => setSignedIn(true)}></AuthApp>
          </Route>
          <Route path="/dashboard" component={DashboardApp} />
          <Route path="/" component={MarketingApp} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </StylesProvider>;
}