import React from "react";

function Book(props) {
  let info = {
    color: 'white',
    backgroundColor: 'crimson',
    border: '1px solid',
    display: 'flex',
  };
  let img = {
    width: '100px',
    height: '100px',
    borderRadius: '100px',
    marginRight: '50px',
  }
  let urlImg = "https://bimage.interpark.com/partner/goods_image/7/4/0/9/249927409g.jpg"

  return (
    <div style={info}>
      <img src={urlImg} style={img} />
      <div>
        <h2>{`이 책의 이름은 ${props.name} 입니다.`}</h2>
        <h3>{`이 책은 총 ${props.page} 페이지입니다.`}</h3>
      </div>
    </div>
  );
};

export default Book;

//<Book title="모두읜 sql" page='100'/>