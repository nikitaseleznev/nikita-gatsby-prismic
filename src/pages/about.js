import React from 'react'

import Layout from '../components/layout'
const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <h2>About</h2>
    <p>b. 1990, Perm, USSR.  Based in Saint-Petersburg,Russia. He is half of <a href="http://NKlab.design/" target="_blank" rel="noopener noreferrer">NKLab</a>, a founding member of the artist co-op <a href="https://bezmestie.tumblr.com" target="_blank" rel="noopener noreferrer">BZMST</a>.
   </p>

    <p>
      <a href="https://docs.google.com/document/d/e/2PACX-1vRioH2RT1qibRX1Wl98U-nf-3srSwI84rYBpHNDq35nQdDKp7bOZHCnVU5K-8V_fV_B30EHXHBQEk58/pub?embedded=true" target="_blank" rel="noopener noreferrer">CV</a>&nbsp;&#47;&#47; seleznevnikitasculptura@gmail.com
    </p>
   
  </Layout>
)

export default IndexPage
