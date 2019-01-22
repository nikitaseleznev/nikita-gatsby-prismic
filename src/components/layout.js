import React, { memo } from "react"
import { Link } from "gatsby"

import "./styles.css"

import Video from './video-back'

const Layout = ({ children, location }) => (
  <>
    <div className="video-background">
      <div className="video-foreground">
        <Video />
      </div>
    </div>
    <div className={location.pathname === '/' ? 'main' : 'main white'}>
      <ul className="links container">
        <li>
          <Link className="header-link" to="/">Home</Link>
        </li>
        <li>
          <Link className="header-link" to="/projects">Projects</Link>
        </li>
        <li>
          <Link className="header-link" to="/about">About</Link>
        </li>
      </ul>
      <div className="container">{children}</div>
    </div>
  </>
);

export default memo(Layout)
