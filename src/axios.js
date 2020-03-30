// using the CancelToken.source factory 
const axios = require('axios');
const CancelToken = axios.CancelToken 
const source = CancelToken.source()

export function initAxios() {

    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        console.log('interceptors request config', config)
        // 可以添加统一信息等等（header cookie)等等
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        // Do something with response data
        if (response.status === 200) {   
            console.log('interceptors response', response.data)     
            return Promise.resolve(response);        
        } else {        
            return Promise.reject(response);        
        }  
    }, function (error) {
        console.log('interceptors response error', error.response)
        // Do something with response error
        return Promise.reject(error);
    });

    // axios.get('/comment/list', {
    //     cancelToken: source.token
    // }).then(res=> {
    //     console.log(res)
    // }).catch(function (thrown) {
    //     if (axios.isCancel(thrown)) {
    //         console.log('Request canceled', thrown.message);
    //     } else {
    //         // handle error
    //     }
    // });

    axios.get('/comment/list').then(res=> {
        console.log('/comment/list',res)
    }).catch(err => {
        console.log(err)
    });
    

    
    // // post
    // axios.post('/user/1', {
    //     name: ''
    // }, {
    //     cancelToken: source.token
    // })

    // cancel request 参数可选
    // source.cancel('取消上次请求')
}
