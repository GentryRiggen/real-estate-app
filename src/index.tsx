import React from 'react';
import ReactDOM from 'react-dom';

import 'lib/styles/global.css';
import RouterScreen from 'domains/application/screens/RouterScreen';
import { APICacheProvider } from 'lib/data/APICacheContext';
import { HeaderProvider } from 'domains/application/contexts/HeaderContext';

ReactDOM.render(
  <React.StrictMode>
    <APICacheProvider>
      <HeaderProvider>
        <RouterScreen />
      </HeaderProvider>
    </APICacheProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
