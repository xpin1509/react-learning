import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../../../redux/action'

class AddTodo extends Component {
    render() {
        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        if (!this.input.value.trim()) {
                            return
                        }
                        this.props.dispatch(addTodo(this.input.value))
                        this.input.value = ''
                    }}
                >
                    <input
                        ref={node => {
                            this.input = node
                        }}
                    />
                    <button type="submit">
                        Add Todo
                </button>
                </form>
            </div>
        )
    }

}

export default connect()(AddTodo)
