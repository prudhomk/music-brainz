import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainDisplay from '../MainDisplay';

export default function App() {
  return (
    <Switch>
      <Route>
        <MainDisplay />
      </Route>
    </Switch>
    
  );
}
