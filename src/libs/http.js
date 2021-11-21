import axios from 'axios'
import qs from 'qs'

function axiosPost (options){
    axios({
        url:options.url,
        method:'post',
        header:{
            'content-type':'application/x-www-form-urlencoded'
        },
        data :qs.stringify(options.data)
    }).then((res)=>{
        options.success(res.data)
    }).catch((error)=>{
        options.error(error)
    })
}
export {
    axiosPost
}