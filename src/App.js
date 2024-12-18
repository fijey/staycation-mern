import React from "react";
import { Switch, Route } from "react-router-dom";
import './assets/scss/style.scss';
import LandingPage from "pages/LandingPage";
import DetailPage from "pages/DetailPage";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/detail/:id" component={DetailPage} />
      </Switch>
    </div>
  );
}

export default App;
