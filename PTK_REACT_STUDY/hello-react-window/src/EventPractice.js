import React, { Component, useState } from 'react';

// 함수형 컴포넌트로 구현한 이벤트
const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ': ' + messsage);
        setUsername('');
        setMessage('');
    };

    const onKeyDown = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습_함수 컴포넌트</h1>
            <input 
                type="text" 
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChangeUsername}
            />
            <input 
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChangeMessage}
                onKeyDown={onKeyDown}
            />

            <button onClick={onClick}>확인</button>
        </div>
    );
};


export default EventPractice;