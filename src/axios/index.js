import axios from 'axios'
import qs from 'qs'

import router from '@/router'
import store from '@/store'

const instance = axios.create({
    timeout: 15000,
});

const xhr = {
    get(url, data, config) {
        return new Promise((resolve, reject) => {
            instance.get(url, {params: data}, config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    fetch(url, data, config, methods) {
        return new Promise((resolve, reject) => {
            instance[methods](url, data, config).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    post(url, data, config) {
        return this.fetch(url, data, config, 'post')
    }
}

// instance.defaults.headers.common['token'] = store.state.token

//请求拦截器新增非get请求添加请求头和token
instance.interceptors.request.use(config => {
    if (config.method != 'get') {
        config.data = qs.stringify(config.data)
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    let token = store.state.token
    if (token) {
        config.headers.common['token'] = token
    }
    return config;
}, error => {
    return Promise.reject(error)
})

//响应拦截器
instance.interceptors.response.use(response => {
    // console.log(response)
    // 对响应数据做点什么
    return response;
}, error => {
    if (error.response) {
        console.log('error.response',error.response)
    }
    // 对响应错误做点什么

    return Promise.reject(error);
});

export default xhr
