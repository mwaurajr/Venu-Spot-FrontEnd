//Import react and any used hooks
import React, { useState } from 'react';

//Import React-router-dom 
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

//Import spring animation
import {useSpring, animated} from 'react-spring'

//Import Components
import NavBar from './components/navBar';
import SideNav from './components/sideNav';
import Footer from './components/footer';

//Components for routing
import Dashboard from './components/dashboard';
import AllUsers from './components/allUsers';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import ForgotPassword from './components/forgotPassword';
import PageNotFound from './components/pageNotFound';
import InternalServerError from './components/internalServerError';
import AccessDenied from './components/accessDenied';
import Charts from './components/charts';
import Tables from './components/tables';

const App = () => {
  //Define states:
  const [open,setOpen] = useState(true)

  //Define the animation of the sidenav
  const animateSideNav = useSpring({left: open ? 0 : -500, display: open ? "block" : "none" ,from: {left: open ? 0 : -500}})

  //Render the components
  return (
    <Router>
      <div className="App">
            {/* Navigation bar */}
            <NavBar setOpen={setOpen} />

            <div id="layoutSidenav">

                {/* Sidebar navigation */}
                <animated.div style={animateSideNav} id="layoutSidenav_nav">
                    <SideNav />
                </animated.div>
                <div id="layoutSidenav_content">
                  
              {/* Main section */}
                <main>
                {/* React-router-dom switch*/}
                  <Switch>
                    <Route exact path="/tables">
                      <Tables />
                    </Route>
                    <Route exact path="/charts">
                      <Charts />
                    </Route>
                    <Route exact path="/internal-server-error">
                      <InternalServerError />
                    </Route>
                    <Route exact path="/access-denied">
                      <AccessDenied />
                    </Route>
                    <Route exact path="/page-not-found">
                      <PageNotFound />
                    </Route>
                    <Route  path="/forgot-password">
                      <ForgotPassword />
                    </Route>
                    <Route  path="/register">
                      <RegisterForm />
                    </Route>
                    <Route  path="/login">
                      <LoginForm />
                    </Route>
                    <Route  path="/all-users">
                      <AllUsers />
                    </Route>
                    <Route  path="/add-user">
                      <RegisterForm />
                    </Route>
                    <Route exact path="/">
                      <Dashboard />
                    </Route>
                    <Route exact path="*">
                      <PageNotFound />
                    </Route>
                  </Switch>     
                </main>

                    {/* Footer */}
                    <Footer />
                    
                </div>
            </div>
        </div>
    </Router>
  );
}

export default App;
