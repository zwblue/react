import axios from 'axios';
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'
const initState = {
    isAuth: false,
    user: '李云龙',
    age: 20
}
export function auth(state = initState, action) {
    console.log(state, action)
    switch (action.type) {
        case LOGIN:
            return { ...state, isAuth: true };
        case LOGOUT:
            return { ...state, isAuth: false };
        case USER_DATA:
            return { ...state, ...action.payload }
        default:
            return state;//如果没有相应的type值变化，state的值也就不会变。
    }
}
export function getUserData() {
    // 用dispatch来通知数据修改
    return dispatch => {
        axios.get('/data').then(res => {
            console.log(1111, res)
            if (res.status === 200) {
                dispatch({ type: USER_DATA, payload: res.data[1] })//改变了action中的type的值，执行某个代码。
            }
        }).catch(err => {

        })
    }
}
// action creator
//外面执行login() === dispatch(login) === dispatch({type:LOGIN}) ==改变了action的值就会执行某一代码
export function login() {
    return { type: LOGIN }
}
export function logout() {
    return { type: LOGOUT }
}