import React from 'react';

class Todo extends React.Component {
    
    deleteTodo () {
        this.props.remove(this.props.id);
    }

    checkTodoToggle () {
        this.props.checkToggle(this.props.id);
    }

    /*
    editTodo() {
        this.props.edit();
    }
    */

    render () {
        const {text, completed} = this.props;

        let listClassName = "list-group-item list-row";

        return (
            <li className={(completed) ? listClassName  + ' done' : listClassName}>
                <div className="btn-circle checkbox" onClick={() => this.checkTodoToggle()} >✓</div>
                <div className="list-text" contentEditable="true" onClick={() => this.editTodo()}>{text}</div>
                <div className="btn-circle delete" onClick={() => this.deleteTodo()} >✕</div>
            </li>
        );
    }
}

export default Todo;