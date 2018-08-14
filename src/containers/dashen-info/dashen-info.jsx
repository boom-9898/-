import React,{Component}from 'react';
import {connect}from 'react-redux';
import {NavBar, List, WingBlank, InputItem, TextareaItem, Button}from 'antd-mobile';


import {updateUser}from '../../redux/actions'


class LaobanInfo extends Component{
    //定义交互的信息


    render(){
        return(
            <div>
                <NavBar>老板信息完善</NavBar>
                <HeaderSelector/>
                <WingBlank>
                    <List>
                        <InputItem onChange={val=>{this.handleChange('post',val)}}>招聘职位：</InputItem>
                        <InputItem onChange={val=>{this.handleChange('company',val)}}>公司名称：</InputItem>
                        <InputItem onChange={val=>{this.handleChange('post',val)}}>职位薪资：</InputItem>
                    </List>
                </WingBlank>
            </div>
        )
    }
}