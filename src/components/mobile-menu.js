import { memo } from "react";
import React, { useEffect, useState } from 'react'
import s from './mobile-menu.module.css'
import { Link } from 'gatsby';

const MobileMenu = ({ items }) => {
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        if (!document) {
            return
        }

        // disable body scroll while in menu
        document.body.style.touchAction = mobileOpen ? 'none' : 'auto'
    }, [mobileOpen])

    return (
        <>
            <button className={s.mobileButton}
                onClick={() => setMobileOpen(!mobileOpen)}
            >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style={{ opacity: mobileOpen ? 0 : 1 }}
                >
                    <path d="M0 11H32" stroke="black" strokeWidth="3" />
                    <path d="M0 20H32" stroke="black" strokeWidth="3" />
                </svg>

                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style={{ opacity: mobileOpen ? 1 : 0 }}
                >
                    <path d="M5 4L27.6274 26.6274" stroke="black" strokeWidth="3" />
                    <path d="M5 27L27.6274 4.37258" stroke="black" strokeWidth="3" />
                </svg>
            </button>

            <div className={s.mobileMenuContainer}
                style={{
                    left: mobileOpen ? -10 : '100vw',
                }}
            >
                <menu className={s.mobileMenu}>
                    {items.map((x, i) => (
                        <Link
                            className={s.mobileItem}
                            to={x.to}
                        >
                            {x.content}
                        </Link>
                    ))}
                </menu>
            </div>
        </>
    )
}

export default memo(MobileMenu)