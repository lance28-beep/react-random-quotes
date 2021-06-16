import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { randomQoutes, selectCount } from './features/counterSlice'
import Handlers from './Handlers'
import Quotes from './Quotes'

function App() {
  const gquote = useSelector(selectCount)
  const [qoutes, setqoutes] = useState([])
  const dispatch = useDispatch(randomQoutes)
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857',
  ]

  const [backGround, setbackGround] = useState('#161623')
  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
      )
      .then((res) => {
        setqoutes(
          res.data.quotes[
            Math.floor(Math.random() * res.data.quotes.length - 1)
          ]
        )
      })
    return () => {}
  }, [setqoutes])

  const randomClickHandler = () => {
    setbackGround(colors[Math.floor(Math.random() * colors.length - 1)])
    axios
      .get(
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
      )
      .then((res) => {
        setqoutes(
          res.data.quotes[
            Math.floor(Math.random() * res.data.quotes.length - 1)
          ]
        )
      })
    dispatch(randomQoutes(qoutes))
  }

  return (
    <div className='App'>
      <div
        className='background__design'
        style={{ backgroundColor: `${backGround}` }}
      >
        <div className='container'>
          <div className='container__quotes' id='quote-box'>
            {/* //random quote */}
            <Quotes
              quote={gquote?.quote || qoutes?.quote}
              author={gquote?.author || qoutes?.author}
            />
            <Handlers Click={randomClickHandler} color={backGround} />
            {/* icons  and buttons*/}
            {/* <button onClick={randomClickHandler}>Random Quotes</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
