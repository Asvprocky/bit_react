import React, { useMemo, useCallback } from 'react'

/**
 * useCallback()
 * 
 * useMemo() 
 * 값이 아닌 함수를 반환한다
 * 
 * 자바 스크립트에서 함수는 객체의 한 종류 이다.
 */

export const UseCallback01 = () => {

  const memo = useCallback(() => { }, []);

  return (
    <div>UseCallback01</div>
  )
}
