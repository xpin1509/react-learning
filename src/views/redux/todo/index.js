import React, { Component } from 'react';
import Footer from './Footer';
import VisibleTodoList from './containers/VisibleTodoList'
import AddTodo from './containers/AddTodo'

class Todo extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }
}

export default Todo