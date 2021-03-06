import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Navigation, Wrapper, LoadingIndicator, Button } from 'components'
import theme from 'utils/theme'

import GlobalStyles from './index.css'

function App () {
  const { i18n } = useTranslation()
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navigation
          items={[
            { content: 'homePage', to: '/' },
            { content: 'budgetPage', to: '/budget' },
            { content: 'infoPage', to: '/info' }
          ]}
          RightElement={(
            <div style={{ display: 'flex' }}>
              <Button variant='regular' onClick={() => i18n.changeLanguage('pl')}>pl</Button>
              <Button variant='regular' onClick={() => i18n.changeLanguage('en')}>en</Button>
            </div>
                    )}
        />
        <Wrapper>
          <Switch>
            <Route exact path='/'>Homepage</Route>
            <Route path='/budget'>Budget page</Route>
          </Switch>
        </Wrapper>
      </Router>
    </>
  )
}

function RootApp () {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  )
}

export default RootApp
