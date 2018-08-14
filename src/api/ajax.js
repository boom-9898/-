import axios from 'axios'

export default function ajax(url,data={},type='GET') {
   if (type === 'GET'){
       let queryStr='';
       Object.keys(data).forEach(key=>{
           const value = data[key]; //遍历值 返回一个[username，password]组成的数组
           queryStr+=`${key}=${value}&`
       })
       if (queryStr){
           queryStr=queryStr.substring(0,queryStr.length-1)
           url+='?'+queryStr
       }
       return axios.get(url)//地址+?
   }else {
       return axios.post(url,data)
   }
}