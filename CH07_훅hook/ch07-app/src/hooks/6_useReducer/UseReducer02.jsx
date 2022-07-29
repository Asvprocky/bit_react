import React, { useReducer, useState } from 'react'

const ACTION_TYPES = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
}

//(account상태값, 요구내용)
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case ACTION_TYPES.DEPOSIT:
      return state + action.payload;

    case ACTION_TYPES.WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
}

function UseReducer02() {

  const [money, setMoney] = useState(0);
  const [account, dispatch] = useReducer(reducer, 0);//[state,dispatch함수]


  return (
    <div className='container'>
      <h6>useReducer 은행에 오신것을 환영합니다.</h6>

      <h2>잔고 : {account}원</h2>
      <div>
        <input className='form-control mb-2'
          type={'number'}
          value={money}
          step='1000'
          onChange={(e) => { setMoney(parseInt(e.target.value)) }}
        />
        <button className='btn btn-info ml-1'
          onClick={() => { dispatch({ type: ACTION_TYPES.DEPOSIT, payload: money }) }}
        >예금</button>
        <button className='btn btn-info ml-1'
          onClick={() => { dispatch({ type: ACTION_TYPES.WITHDRAW, payload: money }) }}
        >출금</button>
      </div>
    </div>
  )
}

export default UseReducer02