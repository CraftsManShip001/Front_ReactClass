import { useRef, useState } from "react";
import "./App.css";

export default function UseRefAdd() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });
  const { name, email } = inputs;

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "강민지",
      email: "strongminji@gmail.com",
    },
    {
      id: 2,
      name: "정소울",
      email: "soulright@bssm.hs.kr",
    },
    {
      id: 3,
      name: "이승현",
      email: "victorynow@example.com",
    },
  ]);

  const nextId = useRef(4); // useRef로 초기값 4 설정
  const inputRef = useRef(null); // input 요소 참조

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClick = () => {
    const newUser = {
      id: nextId.current,
      name,
      email,
    };
    setUsers([...users, newUser]);
    setInputs({ name: "", email: "" }); // 입력 필드 초기화
    nextId.current += 1; // nextId 증가
  };

  const onReset = () => {
    setInputs({ name: "", email: "" }); // 입력 필드 초기화
    inputRef.current.focus(); // name 입력란에 포커스
  };

  return (
    <div>
      <input
        name="name"
        onChange={onChange}
        value={name}
        ref={inputRef}
        placeholder="이름을 입력"
      />
      <input
        name="email"
        onChange={onChange}
        value={email}
        placeholder="이메일을 입력"
      />
      <button onClick={onClick}>확인</button> {/* 입력값 추가 */}
      <button onClick={onReset}>초기화</button> {/* 입력값 초기화 및 포커스 */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}