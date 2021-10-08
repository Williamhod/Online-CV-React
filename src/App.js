import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import'./styles/App.scss'

import Home from "./pages/home/Home";
import Knowledges from "./pages/knowledges/Knowledges";
import Portfolio from "./pages/portfolio/PortFolio";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import Navigation from "./components/navigation/Navigation";


function App() {
  return (
    <>
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/competences" exact component={Knowledges} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
          <Route exact component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
