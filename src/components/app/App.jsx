import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainDisplay from '../Artist/MainDisplay';
import ReleaseList from '../Artist/ReleaseList';
import RecordingList from '../Artist/RecordingList';

export default function App() {
  return (
    <Switch>

      <Route path="/" exact>
        <MainDisplay />
      </Route>

      <Route path="/:id/releases">
        <ReleaseList />
      </Route>

      <Route path="/:id/recordings">
        <RecordingList />
      </Route>

    </Switch>
    
  );
}
