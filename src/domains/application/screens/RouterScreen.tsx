import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { PROPERTIES_LIST_ROUTE } from 'domains/application/constants/routes';
import PropertiesListScreen from 'domains/properties/screens/PropertiesListScreen';
import Header from 'domains/application/components/Header';

export default function RouterScreen() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mx-auto py-9 px-5">
        <Switch>
          <Route
            path={PROPERTIES_LIST_ROUTE}
            component={PropertiesListScreen}
            exact
          />
          <Redirect to={PROPERTIES_LIST_ROUTE} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}
