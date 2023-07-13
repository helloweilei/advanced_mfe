import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { Switch, Route, Router  } from 'react-router-dom';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au_',
})

export default ({ history, onSignIn }) => {
  return <div>
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin">
            <Signin onSignIn={onSignIn}></Signin>
          </Route>
          <Route path="/auth/signup">
            <Signup onSignIn={onSignIn}></Signup>
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  </div>;
}