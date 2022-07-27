import React, { useState } from 'react'
import { useEffect } from 'react';

const UseEffect02 = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('NickName');

  const undateInput = (e) => {
    setName(e.target.value);
  }
  const updateCount = () => {
    setCount(count + 1)
  }

  // 렌더링마다 매번 사이드 이펙트 실행
  // useEffect(() => {
  //   console.log('go 🧇');

  // });

  //마운팅 %% count 가 바뀔때마다 실행
  // useEffect(() => {
  //   console.log('count 변경될 때 🥞')
  // }, [count]);

  //마운팅 && name
  // useEffect(() => {
  //   console.log('name 변경될 때 🥞')
  // }, [name]);

  //최초 마운팅 될때만...
  useEffect(() => {
    console.log('최초 마운트')

  }, []);

  return (
    <div className='container'>
      <p> COUNT : {count}</p>
      <button
        onClick={updateCount}
      >Update</button>
      <div>
        <input type='text' onChange={undateInput} />
      </div>
      <p>{name}</p>
    </div>

  )
}

export default UseEffect02