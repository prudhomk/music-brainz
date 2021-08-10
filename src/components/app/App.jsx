import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainDisplay from '../Artist/MainDisplay';

export default function App() {
  return (
    <Switch>
      <Route>
        <MainDisplay />
      </Route>
    </Switch>
    
  );
}
