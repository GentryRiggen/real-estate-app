import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { PROPERTIES_LIST_ROUTE } from 'domains/application/constants/routes';
import PropertiesListScreen from 'domains/properties/screens/PropertiesListScreen';
import Header from 'domains/application/components/Header';

type Props = {};

export default function RouterScreen(props: Props) {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mx-auto py-9 px-2 md:px-4">
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
