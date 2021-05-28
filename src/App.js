import logo from "./logo.svg";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";

import Page001 from "./pages/Page001";
import Page002 from "./pages/Page002";
import Page003 from "./pages/Page003";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Page001} />
      <Route exact path="/page002" component={Page002} />
      <Route exact path="/page003" component={Page003} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
