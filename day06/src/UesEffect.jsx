import React, { useEffect, useState } from 'react';

function Modal() {
  useEffect(() => {
    return () => {
      alert('Modal 컴포넌트 언마운트 알림창이 뜨게 하시오.');
    };
  }, []);

  return <div>useEffect 실습입니다.</div>;
}

export default function UseEffect1() {
  const [name, setName] = useState('');
  const [depName, setDepName] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log('Effect 실행:', depName);

    return () => {
      console.log('Cleanup - 이전 이름:', depName);
    };
  }, [depName]);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름 입력"
      />
      <button onClick={() => setDepName(name)}>등록</button>

      <div>
        <b>이름:</b> {name}
      </div>
      <div>
        <b>등록된 이름:</b> {depName}
      </div>

      {showModal && <Modal />}
    </div>
  );
}
