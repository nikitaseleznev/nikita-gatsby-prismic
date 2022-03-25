import React from 'react'
import { Link } from 'gatsby'

const Projects = ({ data }) => {
    return (
        <>
            <h1>Projects</h1>
            <ul>
                {data.projects.edges.map(({ node }) => (
                    <li key={node.uid}><Link to={node.uid}>{node.data.title.text}</Link></li>
                ))}
            </ul>
        </>
    )
}

export default Projects