import React from 'react';
import { AppBar, Button, CssBaseline, Toolbar } from "@material-ui/core";
import Alphabet from './Alphabet';
import Encoder from './Encoder';
import Decoder from './Decoder';
import Home from './Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Button color="inherit" component={Link} to={'/'}>Tool of Joy</Button>
                    <div style={{flexGrow:1}}></div>
                    <Button color="inherit" component={Link} to={'/alphabet'}>Alphabet</Button>
                    <Button color="inherit" component={Link} to={'/encoder'}>Encoder</Button>
                    <Button color="inherit" component={Link} to={'/decoder'}>Decoder</Button>
                </Toolbar>
            </AppBar>
            <Switch>
                <Route path="/alphabet">
                    <Alphabet />
                </Route>
                <Route path="/encoder">
                    <Encoder />
                </Route>
                <Route path="/decoder">
                    <Decoder />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
