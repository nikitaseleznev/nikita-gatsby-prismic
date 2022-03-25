import React from 'react'
import { Link } from 'gatsby'
import s from './projects.module.css'

const Projects = ({ data, location }) => {
    return (
        <>
            <h1>Projects</h1>
            <ul>
                {data.projects.edges.map(({ node }) => (
                    <li key={node.uid}>
                        <Link
                            to={node.uid}
                            className={location.pathname.includes(`/${node.uid}`) && s.current}
                        >
                            {node.data.title.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Projects