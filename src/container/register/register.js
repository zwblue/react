import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, Radio, WhiteSpace, Button } from 'antd-mobile'
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'boss',//boss或者牛人genuis
            pwd: '',
            user: '',
            repeatpwd: ''
        }
        this.handleRegister = this.handleRegister.bind(this);
    }
    register() {
        this.props.history.push('/register')
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    handleRegister() {
        console.log('注册信息', this.state)
    }
    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo></Logo>
                <List>
                    <InputItem onChange={v => this.handleChange('user', v)}>用户名</InputItem>
                    <InputItem type='password' onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
                    <InputItem type='password' onChange={v => this.handleChange('repeatpwd', v)}>确认密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <RadioItem checked={this.state.type === 'boss'} onChange={() => this.handleChange('type', 'boss')}>
                        BOSS
                    </RadioItem>
                    <RadioItem checked={this.state.type === 'genuis'} onChange={() => this.handleChange('type', 'genuis')}>
                        牛人
                    </RadioItem>
                    <WhiteSpace></WhiteSpace>
                    <Button type='primary' onClick={this.handleRegister}>注册</Button>
                </List>
            </div>
        )
    }
}
export default Register