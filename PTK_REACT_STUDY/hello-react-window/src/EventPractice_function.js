import React, { Component, useState } from 'react';

// 함수형 컴포넌트로 구현한 이벤트
// #1 onChange 함수 활용 
/*
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
*/

// #2 useState 함수 활용
const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });

    const { username, message } = form;
    const onChange = e => {
        const nextForm = {
            // 기존의 form 내용을 이 자리에 복사한 뒤
            ...form,
            // 원하는 값을 덮어 씌우기
            [e.target.name]: e.target.value
        };

        setForm(nextForm);
    };

    const onClick = () => {
        alert(username + ': ' + messsage);
        setForm ({
            username: '',
            message: ''
        });
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
                onChange={onChange}
            />
            <input 
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />

            <button onClick={onClick}>확인</button>
        </div>
    );
};


export default EventPractice;