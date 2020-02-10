import React from 'react';
import Todoitm from './TodoItm';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputValue: '',
        }
        this.handleBtnInput = this.handleBtnInput.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
       // this.Delete = this.Delete.bind(this,index);
    }
    handleBtnClick() {
        if (this.state.inputValue) {
            this.setState({
                list: [...this.state.list, this.state.inputValue],
                inputValue: ''
            })
        }
        
    }
    handleBtnInput(e) {
        this.setState({
            inputValue:e.target.value
        })
    }
    Delete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
    render() {
        return (
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleBtnInput} />
                    <button onClick={this.handleBtnClick}>add</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <Todoitm handleDelete={this.Delete.bind(this)} key={index} content={item}
                            index={index} />
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;
