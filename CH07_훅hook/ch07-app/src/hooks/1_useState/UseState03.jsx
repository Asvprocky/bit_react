import React, { useState } from 'react'

export const UseState03 = () => {

  const [number, setNumber] = useState(0);

  const cliked = () => {
    setNumber(number + 1);
  }

  return (
    <>
      <span> you clicked {number} time</span>
      <button onClick={() => {
        setNumber(number + 1);
      }}>clcick</button>
    </>
  )
}
