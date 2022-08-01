import React, { useState } from 'react'
import Child from './Child'
function Parents() {
  const [parentAge, setParentAge] = useState(0);

  const [chiledAge, setChiledAge] = useState(0);

  const incresementParentAge = () => {
    setParentAge(parentAge + 1);
  }
  const incresementChiledAge = () => {
    setChiledAge(chiledAge + 1);
  }
  console.log("부모 컴포넌트 랜더링...")
  return (
    <div className='container border border'>
      <div className='alert alert-info'>
        <h5>
          <i className="fa-solid fa-children"></i>
          <span>age : {parentAge}</span>
        </h5>
      </div>
      <button className='mb-3 d-flex'
        onClick={incresementParentAge}
      >부모 나이 증가+</button>
      <button
        onClick={incresementChiledAge}
      >자식 나이 증가+</button>
      <div>

      </div>
      <Child name={'우영우'} age={chiledAge} />
    </div >
  )
}

export default Parents