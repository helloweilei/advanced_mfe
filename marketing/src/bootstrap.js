import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory } from 'history';

const mount = (el) => {
  const history = createMemoryHistory();
  ReactDOM.render(
    <App history={history} />,
    el
  )
}

if (process.env.NODE_ENV === 'development') {
  const appRoot = document.getElementById('app');

  if (appRoot) {
    mount(appRoot);
  }
}

export { mount };