import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import MusicPage from '../pages/AllSongsPage';
import NotFoundPage from '../pages/NotFoundPage';
import SingleSongPage from '../pages/SingleSongPage';

export default () => {
  return (
    <Router basename={process.env.PUBLIC_URL + '/'}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/music" component={MusicPage} />
        <Route path="/music/:songTitle" component={SingleSongPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};
