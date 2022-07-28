/** UseReducer
 * : state 생성 및 관리 도구
 * 
 * 언제 사용 하는가
 * : 여래개의 하위값을 갖는 복잡한 state를 다뤄야 할 때
 * {
 *   teacher : 'jhon',
 *   students : ['', '', ''],
 *   count : 3,
 *   location : [{country: 'korea', name:'A' }, {}, {}]
 * }
 * 
 * 3가지 기본 개념 요소
 * 
 * [Reducer]
 * : 컴포넌트 state 값을 변경(은행)
 * 
 * [Dispatch]
 * : 컴포넌트의 state 변경 요청(고객)
 *  
 * [Action]
 * : 컴포넌트 의 state 변경 내용('만원 출금')
 * 
 * Dispatch(Action)--->Reducer(state ,Action)---> state Update 가됨
 *  
 *  
 *  [Action]에서 변경한 내용이 [Dispatch]로 이동해서 요청을하고 [Reducer] 에도착해서 값이 변경 된다
 * 
 */