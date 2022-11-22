
import styled from 'styled-components'
// import { UnorderedListOutlined } from 'antd';
// import 'antd/dist/reset.css';
const bookinfo = [
  {
    lang:'korea',
    cover: 'https://ncpcog.co.kr/img/book/bookcover/01.jpg',
    title: '하나님의 비밀과 생명수의 샘',    
  },
  {
    lang:'korea',
    cover: 'https://ncpcog.co.kr/img/book/bookcover/02.jpg',
    title: '라오디게아 교회에 보내는 기별',    
  },  
  {
    lang:'korea',
    cover: 'https://ncpcog.co.kr/img/book/bookcover/03.jpg',
    title: '새 예루살렘과 신부 여자들의 수건 문제 해석',    
  },   
  {
    lang:'korea',
    cover: 'https://ncpcog.co.kr/img/book/bookcover/04.jpg',
    title: '성서설교집 제2권',    
  },    
]


function BookList() {
  
  console.log(bookinfo)

  return (
    <div id='booklist'>

    </div>
  );
}

export default BookList;
