import React from "react";
import FabIntegrationSnackbar from './SnackBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from "./Auth/LoginPage";
import { Button } from "@material-ui/core";
import { render } from "@testing-library/react";
import { Component } from "react";

class ReactRouterExample extends Component {
    render() {
    return (
        <Router>
        {/* <div> */}
            {/* <nav> */}
            {/* <ul> */}
                {/* <li> */}
                {/* <Link to="/">Home</Link> */}
                {/* </li> */}
                {/* <li> */}
                {/* <Link to="/Snackbar">Snackbar</Link> */}
                {/* </li> */}
                {/* <li> */}
                {/* <Link to="/LoginPage">LoginPage</Link> */}
                {/* </li> */}
                {/* <Button variant="contained" */}
            {/* color="secondary" href="/LoginPage">LoginPage</Button> */}
            {/* </ul> */}
            {/* </nav> */}
            {/* </div> */}

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
            <Route path="/Snackbar">
                <FabIntegrationSnackbar />
            </Route>
            <Route path="/">
                <LoginPage />
            </Route>
            {/* <Route path="/">
                <Home />
            </Route> */}
            </Switch>
        
        </Router>
    )
    }
}

export default ReactRouterExample


