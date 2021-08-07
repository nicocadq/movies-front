import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Movies } from "./Movies";
import { Movie } from "./Movie";
import { CreateMovie } from "./CreateMovie";

const App = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

export default App;
