import './App.css';
import { useState } from 'react';

export const posts = [
    {
      name: '오주현',
      comment: '안녕하세요. 오주현입니다.',
      time: '2시간 전',
      avatar: 'https://www.w3schools.com/howto/img_avatar.png', // 기본 아바타 이미지 URL
    },
    {
      name: '문소정',
      comment: '리액트로 프로젝트 만들고 있습니다.',
      time: '3시간 전',
      avatar: 'https://www.w3schools.com/howto/img_avatar2.png', // 기본 아바타 이미지 URL
    },
    {
      name: '황지영',
      comment: '리액트 재미있어요.',
      time: '5시간 전',
      avatar: ' https://www.w3schools.com/w3images/avatar6.png', // 기본 아바타 이미지 URL
    },
    {
      name: '공덕현',
      comment: '리액트 벌써 3주차라니........',
      time: '5시간 전',
      avatar: ' https://www.w3schools.com/w3images/avatar5.png', // 기본 아바타 이미지 URL
    },
  ];

function Comment({name,say}){
    const [like,setLike] = useState(0);
    const [unlike,setUnlike] = useState(0);

    return(
        <>
        <div className='wrapper'>
            <div style={{float:'left',marginRight:'20px'}}>
                <img style = {{width:'100px', height:'120px'}} src = "" className='image'></img>
            </div>
            <div>
                <div className='nameText'>{name}</div>
                <div onClick={()=>{setLike(like+1)}}>좋아요 <span>{like}</span></div>
                <div onClick={()=>{setUnlike(unlike+1)}}>싫어요 <span>{unlike}</span></div>
                <div className='commentText'>{say}</div>
            </div>
        </div>
        </>
    )
}

export default function CommentList(){
    const comments = [
        {
            name : '류승찬',
            comment : '나는 애니가 좋아'
        },
        {
            name : '김한결',
            comment : '못 참겠어'
        },
        {
            name : '서정현',
            comment : '진정해'
        }
    ]
    return(
        <>
        <div >
            {
                comments.map((item)=>{
                    return(
                        <>
                        <Comment
                        name = {item.name}
                        say = {item.comment}></Comment>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}