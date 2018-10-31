import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import Counter from './views/redux/counter/Counter'
import counter from './views/redux/counter/reducer'

const store = createStore(counter)

const render = () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    document.getElementById('root'));

render()
store.subscribe(render)
