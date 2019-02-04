import React, { memo } from 'react';
import { Link } from 'gatsby';

import './styles.css';

import Video from './video-back';
import Seo from './seo'

const Layout = ({ children, location }) => (
  <>
    <Seo />
    {location.pathname === '/' && (
      <div className="video-background">
        <div className="video-foreground">
          <Video />
        </div>
      </div>
    )}
    <div className="main">
      <ul className="links container">
        <li>
          <Link className="header-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="header-link" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="header-link" to="/about">
            About
          </Link>
        </li>
      </ul>
      <div className="container">{children}</div>
    </div>
  </>
);

export default memo(Layout);
