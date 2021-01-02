import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { Navigation } from "components";
import theme from "utils/theme";

import GlobalStyles from "./index.css";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="App">
                <Navigation items={[]} />
            </div>
        </ThemeProvider>
    );
}

export default App;
