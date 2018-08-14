import {reqLogin, reqRegister} from "../api";

// 注册/登陆成功的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user});
// 显示错误信息的同步action
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg});


/*
注册的异步action
 */
export function register({username,password,type}) {
    return async dispatch => {
        const response = await reqRegister({username, password, type})
        //异步得到的结果
        const result = response.data;
        if (result.code === 0) {
            const user = result.data;
            dispatch(authSuccess(user))
        } else {
            const msg = result.msg;
            dispatch(errorMsg(msg))
        }
    }
}

//登陆成功首位同步action
export function login({username,password}) {
    return async dispatch=>{
        const response = await reqLogin(username, password)
        const result = response.data;
        if (result.code===0){
            const user = result.data;
            dispatch(authSuccess(user))
        } else {
            const msg = result.msg;
            dispatch(errorMsg(msg))
        }
    }
}