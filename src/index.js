import React from 'react'
import ReactDom from 'react-dom'
import App from './app';
import { createStore } from 'redux';
import { counter, addGUN, removeGUN } from './index.redux'
// 新建store
const store = createStore(counter)
function render() {
    ReactDom.render(<App store={store} addGUN={addGUN} removeGUN={removeGUN} />, document.getElementById('root'))
}
render();
store.subscribe(render)//状态改变过后重新执行一下render函数