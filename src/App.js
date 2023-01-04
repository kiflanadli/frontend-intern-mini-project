import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HelloWorld from "./Components/HelloWorld";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <HelloWorld name="James" />
        <Switch>
          <Route path="/" exact>
            <h1 className="font-bold text-2xl">This is the home page</h1>
          </Route>
          <Route path="/about">
            <h1 className="font-bold text-2xl">About us</h1>
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
