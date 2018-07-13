import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './Auth.redux'
import App from "./app";

function Erying() {
    return <h2>二营</h2>
}
function Qibinglian() {
    return <h2>骑兵连</h2>
}
@connect(
    state => state.auth, {
        logout
    }
)
class Dashboard extends React.Component {
    render() {
        const url = this.props.match.url;//真实的， path带变量的
        const app = (
            <div>
                <h2>Dashboard Page 主页面</h2>
                <div>
                    <h1>独立团</h1>
                    {this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
                    <ul>
                        <li>
                            <Link to={`${url}`}>一营</Link>
                        </li>
                        <li>
                            <Link to={`${url}/erying`}>二营</Link>
                        </li>
                        <li>
                            <Link to={`${url}/qibinglian`}>骑兵连</Link>
                        </li>
                    </ul>
                </div>
                <Route path={`${url}`} exact component={App} ></Route> {/* 完全匹配 -- 如果不加exact那么path=/erying会将path=/也包进去了 */}
                <Route path={`${url}/erying`} component={Erying} ></Route>
                <Route path={`${url}/qibinglian`} component={Qibinglian} ></Route>
            </div>
        )
        const redirectToLogin = <Redirect to='/login'></Redirect>
        return this.props.isAuth ? app : redirectToLogin
    }
}
export default Dashboard;