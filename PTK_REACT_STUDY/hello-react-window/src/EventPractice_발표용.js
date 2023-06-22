import React, { Component } from 'react';

class EventPractice extends Component {

    // #3 state에 input 값 담아보기, 임의 메서드 생성
    // state = {
    //     message: ''
    // }

    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleChange(e) {
    //     this.setState({
    //         message: e.target.value
    //     });
    // }
    
    // handleClick(e) {
    //     this.setState({
    //         message: ''
    //     });
    // }


    // -------------------------------------
    // input 여러개 다루기 
    state = {
        username: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    // KeyPress 이벤트 추가
    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }


    render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
                {/* 
                    #2 onChange 이벤트 설정
                    input 요소를 랜더링 하는 코드와 해당 요소에 onChange 이벤트를 설정 
                <input 
                    type="text" 
                    name="message"
                    placeholder="아무거나 입력해 보세요!"
                    onChange={
                        (e) => {
                            // console.log(e);
                            console.log(e.target.value);
                        }
                    }
                />
                */}

                {/* #3 state에 input 값 담기 */}
                {/* <input 
                    type="text" 
                    name="message"
                    placeholder="아무거나 입력해 보세요!"
                    value={this.state.message}
                    onChange={
                        (e) => {
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                /> */}

                {/* #4 alert 창에 출력 및 초기화 버튼 */}
                {/* <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        });
                    }
                }>확인</button> */}

                {/* 임의 메서드 생성 후 input 요소 수정 */}
                {/* <input 
                    type="text" 
                    name="message"
                    placeholder="아무거나 입력해 보세요!"
                    value={this.state.message}
                    onChange={this.handleChange}
                />

                <button onClick={this.handleClick}>확인</button> */}


            {/* input 여러개 다루기 */}
            <input 
                type="text" 
                name="username"
                placeholder="사용자명"
                value={this.state.username}
                onChange={this.handleChange}
            />
            <input 
                type="text" 
                name="message"
                placeholder="아무거나 입력해 보세요!"
                value={this.state.message}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyPress}
            />

            <button onClick={this.handleClick}>확인</button>

			</div>
		);
	}
}

export default EventPractice;