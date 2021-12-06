import React from 'react';
import ReactDOM from 'react-dom';

import 'lib/styles/global.css';
import RouterScreen from 'domains/application/screens/RouterScreen';
import { HeaderProvider } from 'domains/application/contexts/HeaderContext';
import { PropertyFavoritesProvider } from 'domains/properties/contexts/FavoritePropertiesContext';

ReactDOM.render(
  <React.StrictMode>
    <PropertyFavoritesProvider>
      <HeaderProvider>
        <RouterScreen />
      </HeaderProvider>
    </PropertyFavoritesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
