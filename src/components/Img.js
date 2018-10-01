import React from 'react'

export default ({ src, ...props }) => 
  <img className="img" src={src} alt="" {...props} />