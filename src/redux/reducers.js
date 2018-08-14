/*
包含多个用于生成新的state的reducer函数的模块
 */
import {combineReducers}from'redux';
import {getRedirectPath} from "../utils";

import {
    AuTH_SUCESS,
    ERROR_MSG
}from'./action-types'


const initUser = {
    username:'',
    type:'',
    msg:'',//错误信息提示
    redirectTo: ''
}

function user(state=initUser,action) {
    switch (action.type){
        case AUTH_SUCCESS:
            const user = action.data;
            return {...user, redirectTo:'/'}
        case ERROR_MSG:
            const msg = action.data;
            return {...state.msg};
        default:
            return state
    }
}


export default combineReducers({
    user
})