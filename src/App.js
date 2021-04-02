import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Navigation, Wrapper, LangButton } from "components";
import theme from "utils/theme";

import GlobalStyles from "./index.css";

function App() {
    const { t, i18n } = useTranslation();
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <Navigation
                    items={[
                        { content: t('homePage'), to: '/' },
                        { content: t('budgetPage'), to: '/budget' },
                        { content: t('budgetPageTralala'), to: '/budget2' },
                    ]}
                    RightElement={(
                        <div style={{display: 'flex'}}>
                            <LangButton onClick={()=>i18n.changeLanguage('pl')}>pl</LangButton>
                            <LangButton onClick={()=>i18n.changeLanguage('en')}>en</LangButton>
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

function RootApp() {
    return (
     <React.Suspense fallback={'wait for it...'}>
         <App />
     </React.Suspense>
    )
}

export default RootApp;
