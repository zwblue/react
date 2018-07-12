// 新建store
import { createStore } from 'redux'
// 通过reducer简历
// 根据老的state和action 生成新的state
function counter(state = 0, action) {
    switch (action.type) {
        case '加机关枪':
            return state + 1;
        case '减机关枪':
            return state - 1;
        default:
            return 10
    }
}
const store = createStore(counter);
const init = store.getState();
console.log(init)