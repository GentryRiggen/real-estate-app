import React from 'react';
import ReactDOM from 'react-dom';

import 'lib/styles/global.css';
import RouterScreen from 'domains/application/screens/RouterScreen';
import { HeaderProvider } from 'domains/application/contexts/HeaderContext';

ReactDOM.render(
  <React.StrictMode>
    <HeaderProvider>
      <RouterScreen />
    </HeaderProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
