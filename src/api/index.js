import ajax from './ajax'


const BASE='';

// 请求注册
export const reqRegister = ({uasername,password,type}) => ajax( BASE+'/register', uasername,password,type, 'POST')
// 请求登陆
export const reqLogin = (uasername,password) => ajax(BASE+'/login', uasername,password, 'POST')
