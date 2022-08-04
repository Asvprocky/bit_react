import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';

import axios from 'axios';
/** JS에서 비동기 HTTP 통신
 * ajax,fetch,axios
 * 
 */
/**
 * REST API
 * (Reprensentational State Transfer)
 * 두 컴퓨터 시스템이 인터넷을 통해 
 * 정보를 교환하기 위해 사용하는 인터페이스입니다.
 * HTTP Method : GET, POST, PUT, DELETE
 */

const MyImg = styled.img`
 width:50px;
 border-radius: 50%;
`;


function App() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     url: 'https://jsonplaceholder.typicode.com/posts',

  //   }).then((res) => {
  //     setPosts(res.data)
  //   })
  // }
  //   , []);

  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      setPosts(res.data)
      console.log("hi______!!");
    })

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts',
    })
      .then((res) => {
        setPosts(res.data)
      })
      .catch((e) => { console.log(e) });
  }, []);


  return (
    <div className="App">
      <header className="App-header">

        <div className='d-flex' style={{ alignItems: 'center' }}>
          <img src='https://cdn.pixabay.com/photo/2017/08/25/18/48/watercolor-2681039__340.jpg'
            alt='' styled={{ width: 100, height: 100, borderRadius: 100 }} />
          <div className='d-flex'>
            <input className='form-control' />
            <button className='btn btn-danger ml-1'>search</button>
          </div>
        </div>

        <div className='container'>
          <span style={{ color: '#999' }}>{`Total${posts.length}`}</span>
          <hr />
          <table className='table text-light' style={{ fontSize: '1rem' }}>
            <thead>
              <tr>
                <th scope='col'>No</th>
                <th scope='col'>ID</th>
                <th scope='col'>TITLE</th>
                <th scope='col'>body</th>
              </tr>
            </thead>
            <tbody>
              {
                posts.map((post, idx) => {
                  return (
                    <tr key={idx}>
                      <th scope='row'>{post.id}</th>
                      <td><MyImg src={post.thumbnailUrl} alt='' /></td>
                      <td>{post.title}</td>
                      <td>{post.body}</td>
                    </tr>
                  );
                })
              }
              <tr>
                <th scope='row'>{posts.id}</th>
                <td><MyImg src={posts.thumbnailUrl} alt='' /></td>
                <td>{posts.title}</td>
                <td>{posts.body}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </header>
    </div>
  );
}

export default App;