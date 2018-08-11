/*
用户注册的路由组件
 */
import React, {Component} from 'react'

export default class Register extends Component {
    state={
        username:'',
        password:'',
        password2:'',
        type:'dashen'
    }
    login = ()=>{
        this.props.history.replace('./logo')
    }
    render() {
        const {type}=this.store;
        return (
            <div>
                <NavBar>用户注册</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem type='text' placeholder='请输入用户名'>用户名: </InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder='请输入密码'>密码: </InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder='请输入确认密码'>确认密码: </InputItem>
                        <WhiteSpace/>
                        <List.Item>
                            <span>用户类型: </span>&nbsp;&nbsp;&nbsp;
                            <Radio>老板</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio>大神</Radio>
                        </List.Item>
                        <WhiteSpace/>
                        <Button type='primary'>注&nbsp;&nbsp;册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toLogin}>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
