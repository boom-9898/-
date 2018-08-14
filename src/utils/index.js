
/*
* 包含工具函数的模块
* 得到跳转的路由路径
* dashen
* laoban
* dashenInfo
* laobanInfo
* */
export function getRedirectPath(type,header) {
    let path = '';  //初始化的状态

   // 定义根据状态跳转的路径
    if (type === 'dashen'){
        path = '/dashen'
    } else {
        path = '/laoban'
    }

    //如果信息未完善 跳转到info
    if (!header){
        path +='info'
    }
    return path
}