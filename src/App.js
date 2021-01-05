import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Navigation, Wrapper, LangButton } from "components";
import theme from "utils/theme";

import GlobalStyles from "./index.css";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <Navigation
                    items={[
                        { content: 'Home Page', to: '/' },
                        { content: 'Budget Page', to: '/budget' },
                    ]}
                    RightElement={(
                        <div style={{display: 'flex'}}>
                            <LangButton>pl</LangButton>
                            <LangButton>en</LangButton>
                        </div>
                    )}
                />
                <Wrapper>
                    <Switch>
                        <Route exact path="/">Homepage</Route>
                        <Route path="/budget">Budget page</Route>
                    </Switch>
                </Wrapper>
            </Router>
        </ThemeProvider>
    );
}

export default App;
