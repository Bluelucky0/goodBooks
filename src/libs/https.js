import axios from 'axios'
import qs from 'qs'
//查询字符串解析和将对象序列化的库。data中有数组的时候，是需要序列化才能与后台进行传递的。
//1.qs.stringify():将对象序列化成url的形式；以&进行拼接
//2.qs.parse():将url解析成对象形式；


//根据环境变量区分接口的默认地址
switch (process.env.NODE_ENV) {
    case 'production':
        axios.default.baseURL = '';
        break;
    case 'text':
        axios.default.baseURL = '';
        break;
    default:
        axios.default.baseURL = '';
}

//设置超时时间和跨域是否携带凭证
axios.default.timeout = 10000;
axios.default.withCredentials= false;

//post的请求数据格式
axios.default.header['content-type'] = 'application/x-www-form-urlencoded';
axios.default.transformRequest = data =>qs.stringify(data);

//请求拦截器
axios.intercepeor.request.use(config=>{
    let token = localStorage.getItem('token');
    token && (config.header.Authorization = token);
    return config;
},error=>{
    return Promise.reject(error)
})

//响应拦截器
axios.intercepeor.response.use(response=>{
    return response.data
},error=>{
    let { response } = error;
    if(response){
        switch (response.status) {
            case 400:
                    error.message = '错误请求'
                    break;
                case 401:
                    error.message = '未授权，请重新登录';
                    break;
                case 403:
                    error.message = '拒绝访问'
                    break;
                case 404:
                    error.message = '请求错误,未找到该资源'
                    break;
                case 405:
                    error.message = '请求方法未允许'
                    break;
                case 408:
                    error.message = '请求超时'
                    break;
                case 500:
                    error.message = '服务器端出错'
                    break;
                case 501:
                    error.message = '网络未实现'
                    break;
                case 502:
                    error.message = '网络错误'
                    break;
                case 503:
                    error.message = '服务不可用'
                    break;
                case 504:
                    error.message = '网络超时'
                    break;
                case 505:
                    error.message = 'http版本不支持该请求'
                    break;
                default:
                    error.message = `连接错误${response.status}`
        }
    }else{
        if(!window.navigator.onLine){
            //断网处理，可以跳转到断网页面
            return
        }
        return Promise.reject(error)
    }
})