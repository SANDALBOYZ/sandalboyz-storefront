import React from 'react'
import { css } from 'react-emotion'
// import Link from 'gatsby-link'

const className = css({
  marginTop: '20px',
  height: '1000px',
  backgroundColor: 'lightgray'
})

const IndexPage = ({ data }) => {
  console.log(data)

  return (
    <div className={className}>
      <h1>Hi people</h1>
      <p>Welcome to the new SANDALBOYZ storefront.</p>
      <p>It's still under construction if you couldn't tell.</p>
    </div>
  )
}

export default IndexPage
