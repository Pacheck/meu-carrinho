import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Fretado from './pages/FretePago';
import Gratis from './pages/FreteGratis';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/com-frete">
          <Fretado />
        </Route>
        <Route path="/sem-frete">
          <Gratis />
        </Route>
      </Switch>
    </Router>
  );
}
