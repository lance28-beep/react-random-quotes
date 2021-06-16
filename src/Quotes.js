import React from 'react'
import './Quotes.css'

function Quotes({ quote, author }) {
  return (
    <div className='quotes' >
      <h1 id='text'><span>"</span>{quote}</h1>
      <span id='author'>{author}</span>
    </div>
  )
}

export default Quotes
