import React, { Component } from 'react';
import Counter from './Counter'
import { createStore } from 'redux'
import counter from './reducer'

const store = createStore(counter)
class Index extends Component{
    render() {
        return (
            <Counter
                value={store.getState()}
                onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
            />
        ) 
    }
}

export default Index