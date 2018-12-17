import React from 'react';
import Todo from './Todo';

class App extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            todos: [
                {id: 1, text: '結衣超可愛', completed: false},
                {id: 2, text: '顆顆', completed: true},
                {id: 3, text: '嘻嘻', completed: false},
            ],
            newId: 4,
            newText: '',
        }
    }
    
    // 取 todo 的內容
    getNewValue (e) {
        const newText = e.target.value;
        
        this.setState({
            newText: newText,
        });
    }
    

    // 新增
    addTodo (e) {
        const {todos, newText, newId} = this.state;
        
        if (!newText) {
            e.preventDefault();
            return;
        }
        
        this.setState({
            todos: [
                ...todos,
                {id: newId, text: newText, completed: false}
            ],
            newId: newId +1,
            newText: '',
        });
    }

    // 刪除
    deleteTodo (id) {
        const {todos} = this.state;
        
        let newTodos = todos.filter((item) => item.id !== id);
        
        this.setState({
            todos: newTodos,
        });        
    }

    // 完成
    checkTodoToggle (id) {
        const {todos} = this.state;

        let newTodos = todos.map((item) => {
            if(item.id === id){
                item.completed = !item.completed;
            }
            return item;
        });
        
        this.setState({
            todos: newTodos,
        })
    }

    /*
    // 編輯
    editTodo(e) {
        console.log(e)
        //const {todos} = this.state;
        
        //const newText = e.target

        
        let newTodos = todos.map((item) => {
            if(item.id === id){
                item.text = newText;
            }
            return item;
        });
        
        this.setState({
            todos: newTodos,
        })
        
    }
    */


    render () {
        let {todos} = this.state;
        console.log(todos)

        return (
            <div className="container">
                <div className="title">
                    <h1>Todo list</h1>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" id="input-add" placeholder="I'm gonna do..."
                        value={this.state.newText}
                        onChange={(e) => this.getNewValue(e)} />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            onClick={(e) => this.addTodo(e)}
                        >add</button>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    {todos.map((todo) =>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            remove={(id) => this.deleteTodo(id)}
                            checkToggle={(id) => this.checkTodoToggle(id)}
                            edit={(e) => this.editTodo(e)}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

export default App;
