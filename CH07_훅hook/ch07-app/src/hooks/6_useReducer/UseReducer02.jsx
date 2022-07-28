import React, { useState } from 'react'

function UseReducer02() {

  const [money, setMoney] = useState(0);

  return (
    <div className='container'>
      <h6>useReducer 은행에 오신것을 환영합니다.</h6>

      <h2>잔고 : 10000000000000000</h2>
      <div>
        <input className='form-control mb-2'
          type={'number'}
          step='1000'
        />
        <button className='btn btn-info ml-1'>예금</button>
        <button className='btn btn-info ml-1'>출금</button>
      </div>
    </div>
  )
}

export default UseReducer02