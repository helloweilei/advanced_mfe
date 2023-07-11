import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { Switch, Route, Router  } from 'react-router-dom';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma_',
})

export default ({ history }) => {
  return <div>
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path='/pricing' component={Pricing}></Route>
          <Route path='/' component={Landing}></Route>
        </Switch>
      </Router>
    </StylesProvider>
  </div>;
}