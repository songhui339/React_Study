/*
    커스텀 엘리먼트
    쉐도우돔
    슬롯 (or template)
    이용하여 Custom modal 작성
*/

class TestModal  extends  HTMLElement {

    constructor() {
        super();

        this.attachShadow({mode: "open"});
        this._visible = false;

        this.shadowRoot.innerHTML = `
            <div class="modal-wrap">
                <div class="content-box">
                    <span class="close-btn">&#215;</span>
                    <div class="title">
                        <slot name="title"></slot>
                    </div>
                    <div class="content">
                        <slot name="content"></slot>
                    </div>
                </div>
            </div>

            <style>
            .modal-wrap {
                display: none;
                position: fixed;
                background-color: rgb(0, 0, 0);
                background-color: rgba(0, 0, 0, 0.4);
                z-index: 1;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: auto;
            }

            .content-box {
                background-color: #efefef;
                margin: 10% auto;
                padding: 50px 20px;
                border: 3px solid;
                width: 50%;
                border-radius: 15px;
            }

            .content-box .close-btn {
                color: #aaa;
                float: right;
                font-size: 28px;
                font-weight: 700;
            }

            .content-box .title {
                padding-bottom: 30px;
                font-size: 1.2rem;
                font-weight: 600;
            }

            .content-box .close-btn:hover,
            .content-box .close-btn:focus {
                color: black;
                text-decoration: none;
                cursor: pointer;
            }

        </style>

        `;
    }

    // 가상 트리가 document에 연결 된 후 콜백 
    connectedCallback() {
        this._modal = this.shadowRoot.querySelector('.modal-wrap');
        this.shadowRoot.querySelector('.close-btn').addEventListener('click', this.hide.bind(this));

        this.shadowRoot.querySelector('.content-box').style.borderColor
            = this.getAttribute('borderColor');

        this.shadowRoot.querySelector('.content-box .title').style.color = this.getAttribute('borderColor');
    }

    // 가상 트리가 document 에서 연결 해제 된 후 콜백
    disconnectedCallback() {
        this.shadowRoot.querySelector('.close-btn').removeEventListener('click', this.hide);

    }

    // 가상 트리가 document에서 연결 및 해제 될때 사용할 코드 
    hide() {
        this._visible = true;
        this._modal.style.display = 'none';
    }

    active() {
        this._visible = false;
        this._modal.style.display = 'block';
    }

}

customElements.define('test-modal', TestModal);