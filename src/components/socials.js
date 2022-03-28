import React from 'react'
import s from './socials.module.css'

const Socials = ({ data }) => {
    // chrome only allow <a download> from same domain
    function forceDownload(blob, filename) {
        var a = document.createElement('a');
        a.download = filename;
        a.href = blob;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }
    function downloadResource(url, filename) {
        if (!filename) filename = url.split('\\').pop().split('/').pop();
        fetch(url, {
            headers: new Headers({
                'Origin': 'https://nikita-seleznev.com' // location.origin
            }),
            mode: 'cors'
        })
            .then(response => response.blob())
            .then(blob => {
                let blobUrl = window.URL.createObjectURL(blob);
                forceDownload(blobUrl, filename);
            })
            .catch(e => console.error(e));
    }

    return (
        <div className={s.container}>
            <a
                onClick={e => {
                    e.preventDefault()
                    downloadResource(data.cv?.url ?? "https://docs.google.com/document/d/e/2PACX-1vRioH2RT1qibRX1Wl98U-nf-3srSwI84rYBpHNDq35nQdDKp7bOZHCnVU5K-8V_fV_B30EHXHBQEk58/pub?embedded=true", 'cv.pdf')
                }}
            >
                CV
            </a>
            &nbsp;&#47;&#47;&nbsp;
            <a
                onClick={e => {
                    e.preventDefault()
                    downloadResource(data.press?.url ?? "https://docs.google.com/document/d/e/2PACX-1vRioH2RT1qibRX1Wl98U-nf-3srSwI84rYBpHNDq35nQdDKp7bOZHCnVU5K-8V_fV_B30EHXHBQEk58/pub?embedded=true", 'cv.pdf')
                }}
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