import { useState,useRef } from "react";
import "./App.css";

const User = ({ id, name, email, selected, onToggle, onDelete, onModify }) => {
    return (
      <tr style={{ backgroundColor: selected ? "#ffecec" : "white" }}>
        <td>{id}</td>
        <td
          onClick={() => onToggle(id)}
          style={{ color: selected ? "blue" : "black", cursor: "pointer" }}
        >
          <strong>{name}</strong>
        </td>
        <td>{email}</td>
        <td>
          <button onClick={() => onDelete(id)}>삭제</button>
          <button onClick={() => onModify(id)}>수정</button>
        </td>
      </tr>
    );
  };

  
export default function UserModify() {
    const [inputs, setInputs] = useState({
      name: "",
      email: "",
    });
  
    const [users, setUsers] = useState([
      { id: 1, name: "강민지", email: "strongminji@gmail.com", selected: false },
      { id: 2, name: "정소울", email: "soulright@bssm.hs.kr", selected: false },
      { id: 3, name: "이승현", email: "victorynow@example.com", selected: false },
    ]);
  
    const { name, email } = inputs;
    const nextId = useRef(4);

    const onCreate = () => {
        if (name.trim() === "" || email.trim() === "") {
          alert("이름과 이메일을 입력해주세요!");
          return;
        }
        
        const newUser = { id: nextId.current, name, email,selected:false };
        setUsers([...users, newUser]);
        setInputs({ name: "", email: "" });
        nextId.current += 1;
    };

    const onToggle = (id) => {
        setUsers(users.map(user => 
            user.id === id 
              ? { ...user, selected: !user.selected } 
              : { ...user, selected: false }
        ));
  
        const selectedUser = users.find((user) => user.id === id);
        console.log(selectedUser.selected);
        if (!selectedUser.selected) {
            setInputs({
            name: selectedUser.name,
            email: selectedUser.email,
            });
        }
        else{
            setInputs({
                name:'',
                email:''
            })
        }
    };
        
        
  
    const onModify = (id) => {
      setUsers(users.map((user) =>
        user.id === id ? { ...user, name, email, selected: false } : user
      ));
      setInputs({ name: "", email: "" });
    };
  
    const onDelete = (id) => {
      setUsers(users.filter((user) => user.id !== id));
    };
  
    return (
      <div className="container">
        <div className="input-group">
          <input
            name="name"
            value={name}
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            placeholder="이름 입력"
          />
          <input
            name="email"
            value={email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            placeholder="이메일 입력"
          />
          <button onClick={() => {
            users.find((u) => u.selected)?.id ? onModify(users.find((u) => u.selected)?.id) : onCreate()}
          }>
            {users.find((u) => u.selected) ? '수정' : '등록'}
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>연번</th>
              <th>이름</th>
              <th>이메일</th>
              <th>작업</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User
                key={user.id}
                {...user}
                onToggle={onToggle}
                onModify={onModify}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  