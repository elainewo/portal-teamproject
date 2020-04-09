import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import "./home.css";
import Games from "./Components/Games";
import Politik from "./Components/Politik";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/politik" exact>
          <Politik />
        </Route>
        <Route path="/games">
          <Games />
        </Route>
        {/* <Route path="/kultur">
          <Kultur />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
