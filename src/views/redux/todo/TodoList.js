import React, { Component } from 'react'

class Todo extends Component {
    render() {
        const onClick = this.props.onClick
        const completed = this.props.completed
        const text = this.props.text
        return (
            <li
                onClick={ onClick }
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                { text }
            </li>
        )
    }
}

class TodoList extends Component {
    render() {
        const todos = this.props.todos
        const onTodoClick = this.props.onTodoClick
        return (
            <ul>
                {
                    todos.map(todo => (
                        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
                    ))
                }
            </ul>
        )
    }
}

export default TodoList