import React, { Component } from 'react';
import Counter from './Counter'

class Index extends Component{
    render() {
        return (
            <Counter
                value={'store.getState()'}
                onIncrement={() => console.log({ type: 'INCREMENT' })}
                onDecrement={() => console.log({ type: 'DECREMENT' })}
            />
        ) 
    }
}

export default Index