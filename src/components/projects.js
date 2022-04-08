import React, { useState } from 'react'
import { Link } from 'gatsby'
import * as s from './projects.module.css'

const Projects = ({ data, location }) => {
    const [preview, setPreview] = useState(null)
    return (
        <>
            <h1>Projects</h1>
            <div className={s.container}>
                <ul>
                    {data.projects.edges.map(({ node }, i) => (
                        <li key={node.uid}>
                            <Link
                                to={`/${node.uid}`}
                                className={location.pathname === `/${node.uid}` ? s.current : undefined}
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
                        <div
                            key={i}
                            className={s.previewContainer}
                            style={{
                                opacity: preview === node.data.preview.url ? 1 : 0,
                                zIndex: i,
                            }}
                        >
                            <img
                                src={node.data.preview.url}
                                alt=''
                            />
                            <div
                                className={s.description}
                                style={{
                                    display: !node.data.description.html && 'none',
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: node.data.description.html,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects