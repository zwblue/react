import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, Radio, WhiteSpace, Button } from 'antd-mobile'
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'boss'//boss或者牛人genuis
        }
    }
    register() {
        this.props.history.push('/register')
    }
    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo></Logo>
                <List>
                    <InputItem>用户名</InputItem>
                    <InputItem>密码</InputItem>
                    <InputItem>确认密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <RadioItem checked={this.state.type === 'boss'}>
                        BOSS
                    </RadioItem>
                    <RadioItem checked={this.state.type === 'genuis'}>
                        牛人
                    </RadioItem>
                    <WhiteSpace></WhiteSpace>
                    <Button type='primary'>注册</Button>
                </List>
            </div>
        )
    }
}
export default Register