import React from 'react';
import {AppBar, CssBaseline, Toolbar, Typography} from "@material-ui/core";
import InputForm from "./InputForm";

function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Tool of Joy
                    </Typography>
                </Toolbar>
            </AppBar>
            <InputForm />
        </React.Fragment>
    );
}

export default App;
