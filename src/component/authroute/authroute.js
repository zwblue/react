import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
@withRouter
class AuthRoute extends React.Component {
    componentDidMount() {
        // 获取用户信息
        console.log(this.props, )
        const publicList = ['/login', 'register'];
        const pathname = this.props.location.pathname;
        if (publicList.indexOf(pathname) > -1) {
            return null;
        }
        console.log(this.props.pathname)
        axios.get('/user/info').then(
            res => {
                if (res.status === 200) {
                    if (res.data.code === 0) {
                        // 有登录信息
                    } else {
                        console.log(this.props.history)
                        this.props.history.push('/login')
                    }
                    console.log(res.data);
                }
            }
        ).catch(

        )
        // 是否状态
        // 现在的url地址 login是不需要跳转的

        // 用户的type 身份是boss还是
        // 用户是否完善信息（选择头像 个人简介）
    }
    render() {
        return <div>判断跳转的地方</div>
    }
}
export default AuthRoute;