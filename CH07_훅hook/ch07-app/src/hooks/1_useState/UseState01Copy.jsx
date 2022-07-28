import React, { useState } from 'react'

export const UseState01Copy = () => {

  const [time, setTime] = useState(1);

  const handleClick = () => {
    if (time >= 24) {
      setTime(1);

    } else {
      setTime(time + 1);
    }
  }




  return (
    <>
      <span>현재 시간{time}시 입니다.</span>
      <button onClick={handleClick}>클릭</button>
    </>
  )
}
