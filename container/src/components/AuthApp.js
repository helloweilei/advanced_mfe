import { mount } from 'auth/base';

import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {

  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current,
      { onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (nextPathname !== pathname) {
          history.push(nextPathname);
        }
      }
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
}