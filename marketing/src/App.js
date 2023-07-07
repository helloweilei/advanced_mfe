import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { Switch, Route, BrowserRouter  } from 'react-router-dom';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

export default () => {
  return <div>
    <h1>Marketing</h1>
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/pricing' component={Pricing}></Route>
          <Route path='/' component={Landing}></Route>
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  </div>;
}