/*
用户登陆的路由组件
 */
import React, {Component} from 'react'
import {NavBar,List,WingBlank,WhiteSpace,InputItem,Radio,Button}from'antd-mobile'

import Logo from '../../components/logo/logo'


export default class Login extends Component {
    //定义初始化状态
    state = {
        username:'',
        password:'',
    }

    //跳转到注册
    toRegister = ()=>{
        this.props.history.replace('/register')
    }
    //请求登陆
    login = () =>{
        console.log(this.state)
    }
    //更新状态
    handleChange=(name,val)=>{
        this.setState({
            [name]:val
        })
    }

    render () {
        return (
            <div>
                <NavBar>用户登陆</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem type='text' placeholder='请输入用户名'
                                   onChange={(val) => this.handleChange('username', val)}>用户名: </InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder='请输入密码'
                                   onChange={(val) => this.handleChange('password', val)}>密码: </InputItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;陆</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
