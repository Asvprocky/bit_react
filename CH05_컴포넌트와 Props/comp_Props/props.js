/**
 *  컴포넌트 입력(Props)
 * : '속성'
 * 읽기 전용
 * 
 * 자바스크립트 객체 { }
 * 
 */
function App(props) {
  return (
    <Profile name='Tom' intro='안녕' hit={100} />
  );
}
//props 객체를 이런식으로 사용할수있다 파라미터에 props 대신 props 의 객체
//this.name ....등 this 생략가능
function Profile(name, intro, hit) {
  return (
    <>
      <h2>{name}의 블로그 입니다.</h2>
      <p>{intro}</p>
      <hr />
      <span>{hit}</span>
    </>
  );
}
