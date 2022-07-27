import React from 'react'
import Comment from './Comment'

const list = [{
  name: 'ken',
  comment: '안녕하세요 피자입니다',
  avatarUrl: 'images/simple/2627.jpg'
}, {
  name: 'tom',
  comment: '안녕하세요 톰입니다',
  avatarUrl: 'images/simple/1056.jpg'

}, {
  name: 'real',
  comment: '안녕하세요 real입니다',
  avatarUrl: 'images/simple/796.jpg'

}, {
  name: 'awge',
  comment: '안녕하세요 awge입니다',
  avatarUrl: 'images/simple/908.jpg'

}]


function CommentList() {

  return (
    <>{
      list.map((data, idx) => {
        return (
          <Comment name={data.name} comment={data.comment} avatarUrl={data.avatarUrl} />
        )
      })
    }
    </>
  )
}

export default CommentList