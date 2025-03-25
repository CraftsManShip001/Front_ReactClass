function Item({name,isPacked,idx}){
    return(
        <li>{idx} : {name} {isPacked ? 'V' : null}</li>
    )
}

export default function ConditionJsx(){
    const datas = [
        {'isPacked' : true, 'name' : '류승찬'},
        {'isPacked' : true, 'name' : '장인'},
        {'isPacked' : false, 'name' : '김한결'}
    ]
    return(
        <section>
            <h1>승찬아 안녕</h1>
            <ul>
                {
                    datas.map((item,index) =>{
                        return(
                            <Item
                            isPacked={item.isPacked}
                            name = {item.name}
                            idx = {index+1}
                            ></Item>
                        )
                    })
                }
            </ul>
        </section>
    )
}