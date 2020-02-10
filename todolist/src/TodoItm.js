// JavaScript source code
import React from 'react';

class TodoItm extends React.Component {
    handleDelete() {
        this.props.handleDelete(this.props.index);
    }
    render() {
        return <li onClick={this.handleDelete.bind(this)}>{this.props.content}</li>
    }
}
export default TodoItm;