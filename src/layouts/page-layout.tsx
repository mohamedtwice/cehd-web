import React, { Fragment, FunctionComponent, useState } from 'react'
import { Header } from '../components/header'
import { Navigation } from '../components/navigation/navigation'

const PageLayout: FunctionComponent = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Fragment>
      <Header isMenuOpen={isMenuOpen} onClick={handleMenu} />
      {isMenuOpen ? <Navigation onClick={handleMenu} /> : children}
    </Fragment>
  )
}

export default PageLayout
