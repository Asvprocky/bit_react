import React, { useRef, useState } from 'react'

export const UseRef02 = () => {

  //State 변수 사용
  const [count, setCount] = useState(0);

  //Ref 변수 사용
  const countRef = useRef(0);

  const increaseCountState = () => {
    setCount(count + 1);
  };
  const increaseCountRef = () => {
    countRef.current++;
    console.log(countRef.current)
  };
  return (
    <div>
      <h3>state:{count}</h3>
      <h3>Ref &nbsp;:{countRef.current}</h3>

      <button className='btn btn-info' onClick={increaseCountState}>
        State &nbsp;
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
      <button className='btn btn-success' onClick={increaseCountRef}>
        Ref &nbsp;
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>


    </div>
  )
}
