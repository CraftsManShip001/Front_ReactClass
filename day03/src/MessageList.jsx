import './App.css';

function Message({data}){
    return(
        <>
        <div className='wrapper'>{data}</div>
        </>
    )
}

export default function MessageList(){
    const msgLists = ["안녕하세요. 오늘의 일정입니다.", 
        "점심시간이 11시 30분으로 변경되었습니다.",
        "이제 곧 회의가 시작됩니다."   
        ];
    return(
        <>
        <h2>Message 컴포넌트</h2>
        {
        msgLists.map((item)=>{
            return(
                <Message data = {item}></Message>
            )
        })}
        </>
    )
}
