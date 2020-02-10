import React from 'react';

class Comment_board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputSentence: '',
            liked_array: [],
            former_liked: [],
        }
        this.handleBtnInput = this.handleBtnInput.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }
    handleBtnClick() {
        if (this.state.inputSentence) {
            this.setState({
                list: [...this.state.list, this.state.inputSentence],
                inputSentence: '',
                former_liked: [...this.state.former_liked, 0],
                liked_array: [...this.state.liked_array, 0]
            })
        }

    }
    handleBtnInput(e) {
        this.setState({
            inputSentence: e.target.value
        })
    }
    likeBtnClick(index) {
        const liked_array=[...this.state.liked_array];
        liked_array[index]=1-liked_array[index]
        this.setState({
            liked_array:liked_array
        })
    }
    render() {
        return (
            <div>
                <div>
                    <input value={this.state.inputSentence} onChange={this.handleBtnInput} />
                    <button onClick={this.handleBtnClick}>确认发布</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <div>
                                <div>{index + 1}楼</div>
                                <div>{item}</div>
                                <button onClick={this.likeBtnClick.bind(this,index)}>
                                    点赞:{this.state.former_liked[index] + this.state.liked_array[index]}
                                </button>
                            </div>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Comment_board;
