import React, { useState, useEffect } from 'react'


export default function Keys () {
  const [number, setNumber] = useState(0)

  function handleClick (e) {
    console.log(e.target.dataset.value);
  }
  return (
    <>
      <div>{}</div>
      <div className="keys">
        <button 
          className="key ac"
          onClick={handleClick}
          data-value=""
        >AC</button>
        <button 
          className="key division"
          onClick={handleClick}
          data-value="/"
        >/</button>
        <button 
          className="key times"
          onClick={handleClick}
          data-value="X"
        >x</button>
        <button 
          className="key seven"
          onClick={handleClick}
          data-value="7"
        >7</button>
        <button 
          className="key eight"
          onClick={handleClick}
          data-value="8"
        >8</button>
        <button 
          className="key nine"
          onClick={handleClick}
          data-value="9"
        >9</button>
        <button 
          className="key menus"
          onClick={handleClick}
          data-value="-"
        >-</button>
        <button 
          className="key four"
          onClick={handleClick}
          data-value="4"
        >4</button>
        <button 
          className="key five"
          onClick={handleClick}
          data-value="5"
        >5</button>
        <button 
          className="key sixe"
          onClick={handleClick}
          data-value="6"
        >6</button>
        <button 
          className="key plus"
          onClick={handleClick}
          data-value="+"
        >+</button>
        <button 
          className="key one"
          onClick={handleClick}
          data-value="1"
        >1</button>
        <button 
          className="key two"
          onClick={handleClick}
          data-value="2"
        >2</button>
        <button 
          className="key three"
          onClick={handleClick}
          data-value="3"
        >3</button>
        <button 
          className="key equal"
          onClick={handleClick}
          data-value="="
        >=</button>
        <button 
          className="key zero"
          onClick={handleClick}
          data-value="0"
        >0</button>
        <button 
          className="key dot"
          onClick={handleClick}
          data-value="."
        >.</button>
      </div>
    </>
  )
}