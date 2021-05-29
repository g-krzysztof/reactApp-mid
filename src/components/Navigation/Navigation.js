import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Button } from 'components'
import { Container, List, NavigationWrapper } from './Navigation.css'
import { useTranslation } from 'react-i18next'

function Navigation ({ items = [], RightElement }) {
  const { t } = useTranslation()
  return (
    <Container>
      <NavigationWrapper>
        <List>
          {items.map(item => (
            <li key={item.to}>
              <Button variant='inline' to={item.to}>{t(item.content)}</Button>
            </li>
          ))}
        </List>
        {RightElement}
      </NavigationWrapper>
    </Container>
  )
}

Navigation.propTypes = {
  items: PropTypes.array.isRequired
}

export default Navigation
