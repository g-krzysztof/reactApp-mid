import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Navigation } from "components";
import theme from "utils/theme";

import GlobalStyles from "./index.css";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <Navigation items={[
                    { content: 'Home Page', to: '/' },
                    { content: 'Budget Page', to: '/budget' },
                ]} />
                <Switch>
                    <Route exact path="/">Homepage</Route>
                    <Route path="/budget">Budget page</Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
