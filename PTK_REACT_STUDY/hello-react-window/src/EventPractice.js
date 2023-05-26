import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        message: ''
    }


	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>

                {/* #2 input 요소를 랜더링 하는 코드와 해당 요소에 onChange 이벤트를 설정 */}
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

                {/* #3 state에 input 값 담기 */}
                <input 
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
                />

                {/* #4 alert 창에 출력 및 초기화 버튼 */}
                <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        });
                    }
                }>확인</button>
			</div>
		);
	}
}

export default EventPractice;