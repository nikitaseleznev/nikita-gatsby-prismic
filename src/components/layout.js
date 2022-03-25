import React, { memo } from 'react';
import { Link } from 'gatsby';
import Seo from './seo'
import MobileMenu from './mobile-menu'
import s from './layout.module.css'

import './styles.css';

const links = [
    {
        className: `header-link`,
        content: 'Projects',
        to: '/projects',
    },
    {
        className: `header-link`,
        content: 'About',
        to: '/about',
    },
]

const Layout = ({ children, location }) => (
    <>
        <Seo />
        <div className="main">
            <ul className={s.links}>
                <li>
                    <Link className={`header-link ${s.home}`} to="/">
                        NIKITA SELEZNEV
                    </Link>
                </li>
                <div className={s.menu}>
                    {links.map((x, i) => (
                        <li key={i}>
                            <Link className={`${x.className} ${location.pathname.includes(x.to) && s.current}`} to={x.to}>
                                {x.content}
                            </Link>
                        </li>
                    ))}
                </div>
                <MobileMenu
                    items={links}
                />
            </ul>
            <div className="container">
                {children}
            </div>
        </div>
    </>
);

export default memo(Layout);
