import { useState } from "react"

export default function LoginPage(){
    const [user,setUser] = useState({
        id : 0,
        name : '',
        email : ''
    });
    return(
        <>
        <div>
            <form>
                <h1> 로그인</h1>
                    <li >이름<input type = "text" onChange={(e)=>{
                        setUser({
                            ...user,
                            [name]:e.target
                        })
                    }}/></li>
                    <li>이메일<input type = "email" onChange={(e)=>{
                        setUser({
                            ...user,
                            [email] : e.target.value
                        })
                    }}/></li>
                    {console.log(user)}
                    <li><button onClick ={()=>{
                        setUser({
                            id:0,
                            name:'',
                            email:''
                        })
                    }}>확인 </button>
                    <button >취소</button></li>
            </form>
            <div id = "modal">
                입력된 이름은 <span>{user.name}</span>이고 입력된 이메일은 <span>{user.email}</span>
            </div>
        </div>
        </>
    )
}