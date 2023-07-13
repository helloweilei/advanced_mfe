import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory ?? createMemoryHistory();
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(
    <App history={history} />,
    el
  )

  return {
    onParentNavigate: ({ pathname }) => {
      const { pathname: currentPathname } = history.location;
      if (pathname !== currentPathname) {
        history.push(pathname);
      }
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const appRoot = document.getElementById('app');

  if (appRoot) {
    mount(appRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };