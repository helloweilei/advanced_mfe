import React from 'react';
import ReactDOM from 'react-dom';

const mount = (el) => {
  ReactDOM.render(
    <h1>Hi there</h1>,
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