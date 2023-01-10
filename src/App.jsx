import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import TopNavBar from "./components/topnavbar/TopNavBar";
import SideNavBar from "./components/sidenavbar/SideNavBar";



function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <Router>
      <TopNavBar />
      <div className="container">
        <SideNavBar width={width} />
        <Switch>
          <Route exact path="/">
            <HomePage width={width} />
          </Route>
          <Route path="/users">
            <UsersPage width={width} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);