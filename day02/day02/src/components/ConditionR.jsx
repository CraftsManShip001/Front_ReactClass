import '../styles/style.css'
import { useState } from 'react';

export default function Condition(){

    const [isLogin, setisLogin] = useState(0);

    const changeLoged = ()=>{
        setisLogin(!isLogin);
    }
    return(
        <>
        {isLogin ? <h2>환영해 승찬아</h2> : <></>}
        <div className = {`btn ${isLogin ? 'sky' : 'blue'}`} onClick={changeLoged}>{isLogin ? '로그아웃' : '로그인'}</div>
        <hr></hr>
        <h2>모두 함께 리액트 공부</h2>
        </>
    )
}