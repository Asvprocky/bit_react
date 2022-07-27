import React from "react";
import Book from "./Book";


function Library(props) {
  return (
    <div>
      <Book name="파이썬이 제일 쉬웠어요요" page='100' />
      <Book name="리액트란?" page='500' />
      <Book name="자바가 뭐임?" page='700' />
    </div>
  );
}

export default Library;