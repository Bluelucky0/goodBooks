// 请求数据层

import { axiosPost } from '../libs/http';
import { API } from '../configs/apis';

function getBookCategory(){
    return new Promise((resolve,reject)=>{
        axiosPost({
            url:API.GET_BOOK_CATEGORY,
            success(data){
                resolve(data.result)
            },
            error(err){
                reject(err)
            }
        })
    })
}

function getBookList(options){
    const { catalogId,pageNum } = options;
    return new Promise((resolve,reject)=>{
        axiosPost({
            url:API.GET_BOOK_LIST,
            data:{
                catalog_id:catalogId,
                pn:pageNum,
                rn:20
            },
            success(data){
                resolve(data)
            },
            error(err){
                reject(err)
            }
        })
    })
}

export {
    getBookCategory,
    getBookList
}