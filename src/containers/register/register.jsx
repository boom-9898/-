/*
用户注册的路由组件
 */
import React, {Component} from 'react'
import {NavBar,List,WingBlank,WhiteSpace,InputItem,Radio,Button}from'antd-mobile'
import {connect}from'react-redux'

import {register} from "../../redux/actions";
import Logo from '../../components/logo/logo'
import {reqRegister} from "../../api";


export default class Register extends Component {
    state={
        username:'',
        password:'',
        password2:'',
        type:'dashen'
    };


    //跳转登陆
    toLogin = ()=>{
        this.props.history.replace('/login')
    };
    //请求注册
    register = () => {
        console.log(this.state)
        this.props.register(this.state)
    }

    //更新状态
    handleChange = (name,val)=>{
        this.setState({
            [name]:val
        })
    };


    render() {
        const {type} = this.state
        const {msg, redirectTo} = this.props.user
        // 判断是否需要自动跳转
        if(redirectTo) {
            return <Redirect to={redirectTo}/>  // 在render()中实现自动跳转指定路由
        }
        return (
            <div>
                <NavBar>用户注册</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem type='text' placeholder='请输入用户名'
                                   onChange={(val) => this.handleChange('username', val)}>用户名: </InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder='请输入密码'
                                   onChange={(val) => this.handleChange('password', val)}>密码: </InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder='请输入确认密码'
                                   onChange={(val) => this.handleChange('password2', val)}>确认密码: </InputItem>
                        <WhiteSpace/>
                        <List.Item>
                            <span>用户类型: </span>&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='laoban'} onChange={() => {this.handleChange('type', 'laoban')}}>老板</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='dashen'} onChange={() => {this.handleChange('type', 'dashen')}}>大神</Radio>
                        </List.Item>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toLogin}>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
export default connect(
    state => ({user: state.user}),  // 向UI组件Register中传入哪些一般属性
    {register} // 向UI组件Register中传入哪些函数属性
    // 传给UI组件不是异步action函数本身, 而是包含分发异步action的一个新的函数
)(Register)

/*
函数属性:
  function (user) {
    distpatch(register(user))
  }
 */
