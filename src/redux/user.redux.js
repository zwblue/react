import axios from "../../node_modules/axios";
import { Toast } from 'antd-mobile'
const RESISTER_SUCCESS = 'RESISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';

const initState = {
    msg: '',
    isAuth: '',
    user: '',
    pwd: '',
    type: ''
}
export function user(state = initState, action) {
    switch (action.type) {
        case 'RESISTER_SUCCESS':
            return { ...state, msg: '', isAuth: true, ...action.data }
        case 'ERROR_MSG':
            if (action.msg) {
                Toast.fail(action.msg, 2)
            }
            return { ...state, isAuth: false, msg: action.msg }
        default:
            return state;
    }
}
function errorMsg(msg) {
    return { msg, type: ERROR_MSG }
}
function registerSuccess(data) {
    return { data: data, type: RESISTER_SUCCESS }
}
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
                dispatch(registerSuccess({ user, pwd, type }))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        }).catch()
    }

}
