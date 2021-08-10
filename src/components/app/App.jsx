import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainDisplay from '../Artist/MainDisplay';
import AlbumList from '../Artist/AlbumList';

export default function App() {
  return (
    <Switch>
      <Route path="/">
        <MainDisplay />
      </Route>
      <Route path="/:id/releases">
        <AlbumList />
      </Route>
    </Switch>
    
  );
}
