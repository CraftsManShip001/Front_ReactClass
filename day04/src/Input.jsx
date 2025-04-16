import './App.css';
import { useState } from 'react';

export default function Input(){
    const [입력된값, 바꾸기입력된값] = useState('');
    return(
        <div className='container'>
            <input type = "text"  onChange={(e)=>{console.log(e.target.value); 바꾸기입력된값(e.target.value)}} value={입력된값}></input>
            <button className='btn' onClick={()=>{바꾸기입력된값('');}}>초기화</button>
            {입력된값 ? <div id='modal'>{입력된값}</div> : <></>}
        </div>
    )
}
