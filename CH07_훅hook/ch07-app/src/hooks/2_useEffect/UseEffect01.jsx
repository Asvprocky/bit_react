import React, { useState } from 'react'
import { useEffect } from 'react';

/**클래스 컴포넌트 생명주기 함수
 * useEffect(콜백함수 , 의존성배열[, , , ,] );
 * 
 * useEffect( ()=>{} , [의존성변수1,변수2,] );
 * 
 * 
 */

const styles = {
  container: {
    padding: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 20,
  },
  icon: {
    fontSize: 25,
  }
}



let kiwis = [];
export const UseEffect01 = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 0) kiwis = [];
    kiwis.push('🥝');

    document.title = '🍇🍓' + count + 'update';
  }, [count]);

  return (
    <div className='container' style={styles.container}>

      <span>{kiwis + '💨' + count}</span>
      <hr></hr>
      <p className='h3'>You clicked {count} times</p>
      <hr />

      <button className='btn btn-info' style={styles.btn}
        onClick={() => {
          setCount(count + 1);
        }}>

        <i className="fa-solid fa-computer-mouse" style={styles.icon}></i>
        <br />
        <span>Click Me</span>
      </button>

    </div>



  )
}
