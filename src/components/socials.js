import React from 'react'
import * as s from './socials.module.css'

const Socials = ({ data }) => {
    return (
        <div className={s.container}>
            <a
                href={data.cv?.url}
                target={'_blank'}
                rel='noreferrer'
            >
                CV
            </a>
            &nbsp;&#47;&#47;&nbsp;
            <a
                href={data.press?.url}
                target={'_blank'}
                rel='noreferrer'
            >
                PRESS
            </a>
            <br />
            <a href='mailto:seleznevnikitasculptura@gmail.com'>
                seleznevnikitasculptura@gmail.com
            </a>
        </div>
    )
}

export default Socials