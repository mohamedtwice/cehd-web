import React, { FunctionComponent } from 'react'
import { useMenu } from '../../hooks/useMenu'
import { useWp } from '../../hooks/useWp'
import { Logo } from '../logo'
interface IHeaderProps {
  isMenuOpen: boolean
  onClick: () => void
}

export const Header: FunctionComponent<IHeaderProps> = ({ isMenuOpen, onClick }) => {
  const {
    allSettings: { generalSettingsTitle },
  } = useWp()

  const { name } = useMenu()

  return (
    <header id="masthead">
      {/*<div className="logo">*/}
      {/*  <a href="/" rel="home">*/}
      {/*    <Logo />*/}
      {/*  </a>*/}
      {/*</div>*/}
      <p style={{ fontSize: "1.75em" }}> 

        <a href="/" rel="home">
          {`${generalSettingsTitle}`}
        </a>
      </p>

      {isMenuOpen ? (
        <a id="susty-back-link" rel="home" href="" onClick={onClick}>
          ✖<span className="screen-reader-text">Close menu</span>
        </a>
      ) : (
        // <a href="" onClick={onClick}>
        //   {name}
        // </a>
        <a href="" onClick={onClick}>
          Menu
        </a>
      )}
    </header>
  )
}
