import React from 'react'
import { useState } from 'react'

export const UseState02 = () => {

  const [input, setInput] = useState('');
  const [names, setNames] = useState([]);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
    console.log(input);

  }
  const uploadHandler = () => {
    setNames((preState) => {
      console.log(preState)
      return [...preState, input + '\n']
    });
  }

  return (
    <div className='container'>
      <div style={{ display: 'flex' }}>
        <input type='text' className='form-control' placeholder='이름을 입력해주세요.'
          onChange={inputChangeHandler}
        />
        <button className='btn btn-danger ms-1'
          onClick={uploadHandler}
        >업로드</button>
      </div>
      <textarea className='form-control mt-3'
        efaultValue={names.toString().split(',').join('')}
      />
    </div>
  )
}
// defaultValue={names.toString().split(',').join('')}

