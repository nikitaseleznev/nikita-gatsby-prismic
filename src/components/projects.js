import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import s from './projects.module.css'

const Projects = ({ data, location }) => {
    const [preview, setPreview] = useState(null)

    useEffect(() => {
        document.body.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <>
            <h1>Projects</h1>
            <div className={s.container}>
                <ul className={s.ul}>
                    {data.projects.edges.map(({ node }, i) => (
                        <li key={node.uid}>
                            <Link
                                to={`/${node.uid}`}
                                className={location.pathname === `/${node.uid}` && s.current}
                                onPointerEnter={() => setPreview(node.data.preview.url)}
                                onPointerLeave={() => setPreview(null)}
                            >
                                {node.data.title.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={s.previews}>
                    {data.projects.edges.map(({ node }, i) => !node.data.preview?.url ? null : (
                        <img
                            key={i}
                            src={node.data.preview.url}
                            style={{
                                opacity: preview === node.data.preview.url ? 1 : 0,
                                zIndex: i,
                            }}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects