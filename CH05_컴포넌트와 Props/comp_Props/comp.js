/* 
  컴포넌트
*/


/*
  함수 컴포넌트
*/
function Welcome1(name) {
  return <h1>Hello, {name}</h1>
};

/* 
  클래스 컴포넌트
*/
import React from 'react';

const comp = () => {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
    </div>
  );
};
<Welcome1 name="철수"></Welcome1>
export default comp;