import React from 'react'
import { useSelector } from 'react-redux'
import { selectCount } from './features/counterSlice'
import TwitterIcon from '@material-ui/icons/Twitter'
import './Handlers.css'

function Handlers({ Click, color }) {
  const gquote = useSelector(selectCount)
  return (
    <div className='handlers'>
      <a
        id='tweet-quote'
        target='blanck'
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
          '"' + gquote?.quote + '" ' + gquote?.author
        )}`}
      >
        <TwitterIcon />
      </a>
      <button
        id='new-quote'
        onClick={Click}
        style={{ backgroundColor: `${color}` }}
      >
        Random
      </button>
    </div>
  )
}

export default Handlers
