import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Navigation } from "components";
import theme from "utils/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Navigation />
            </div>
        </ThemeProvider>
    );
}

export default App;
