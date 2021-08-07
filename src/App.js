import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Loading } from 'components/Loading';

const Movies = lazy(() => import('components/Movies'));
const Movie = lazy(() => import('components/Movie'));
const CreateMovie = lazy(() => import('components/CreateMovie'));

const App = () => (
  <BrowserRouter>
    <Suspense delayMs={500} fallback={<Loading />}>
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route exact path="/create-movie">
          <CreateMovie />
        </Route>
        <Route exact path="/:id">
          <Movie />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export { App };
