import React from 'react'

export default function Clock() {
  let now = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  return (
    <>
      <span>{now + " " + time}</span>
    </>

  )
}

