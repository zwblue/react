import axios from "../../node_modules/axios";
import { Toast } from 'antd-mobile'
import { getRedirectPath } from '../util'
import { userInfo } from "os";

const RESISTER_SUCCESS = 'RESISTER_SUCCESS';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const LOAD_DATA = 'LOAD_DATA';

const initState = {
    redirectTo: '',
    msg: '',
    isAuth: '',
    user: '',
    pwd: '',
    type: ''
}
export function user(state = initState, action) {
    switch (action.type) {
        case RESISTER_SUCCESS:
            return { ...state, msg: '', redirectTo: getRedirectPath(action.data), isAuth: true, ...action.data }
        case LOGIN_SUCCESS:
            return { ...state, msg: '', redirectTo: getRedirectPath(action.data), isAuth: true, ...action.data }
        case LOAD_DATA:
            return { ...state, ...action.data }
        case ERROR_MSG:
            if (action.msg) {
                Toast.fail(action.msg)
            }
            return { ...state, isAuth: false, msg: action.msg }
        default:
            return state;
    }
}
export function login({ user, pwd }) {
    if (!user || !pwd) {
        return errorMsg('用户名密码必须输入')
    }
    return dispatch => {
        axios.post('user/login', { user, pwd }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                Toast.success(res.data.msg)
                dispatch(loginSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        }).catch()
    }
}
function loginSuccess(data) {
    return { data: data, type: LOGIN_SUCCESS }
}
function errorMsg(msg) {
    return { msg, type: ERROR_MSG }
}
function registerSuccess(data) {
    return { data: userInfo, type: RESISTER_SUCCESS }
}
export function loadData(data) {
    return { data: data, type: LOAD_DATA }
}
// export function userinfo() {
//     return dispatch => {
//         axios.get('/user/info').then(
//             res => {
//                 if (res.status === 200) {
//                     if (res.data.code === 0) {
//                         // 有登录信息
//                     } else {
//                         this.props.loadData(res.data.data);
//                         this.props.history.push('/login')
//                     }
//                 }
//             }
//         ).catch(

//         )
//     }
// }
export const register = ({ user, pwd, repeatpwd, type }) => {
    console.log('register')
    if (!user || !pwd || !repeatpwd || !type) {
        return errorMsg('用户名密码必须输入')
    } if (pwd !== repeatpwd) {
        return errorMsg('密码和确认密码不同')
    }
    return dispatch => {
        axios.post('user/register', { user, pwd, type }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                Toast.success(res.data.msg)
                dispatch(registerSuccess({ user, pwd, type }))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        }).catch()
    }

}
