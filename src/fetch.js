export function initFetch() {
    const options = {
        method: "GET", // 请求参数
        headers: { "Content-Type": "application/json"}, // 设置请求头
        // body: JSON.stringify({name:'123'}), // 请求参数
        credentials: "same-origin", // cookie设置
        mode: "no-cors", // 跨域
    }
    let url = 'http://localhost:4200/comment/listById';
    // let url = '/comment/listError?name=12'
    fetch(url,options)
        .then(function(response) {
            // 将webpack 的proxy修改掉就可以实现404
            // 注意：当和服务器建立简介，并收到服务器的异常状态码如404、500等并不能触发onerror。当网络故障时或请求被阻止时，才会标记为 reject，如跨域、url不存在，网络异常等会触发onerror。
            // 所以使用fetch当接收到异常状态码都是会进入then而不是catch。这些错误请求往往要手动处理。
            // console.log(response);

            // 在fetch()处理完promises之后返回一个Response实例，也可以手动创建一个Response实例
            // 为何用json =>  this._initBody(bodyInit) 因为fetch源码中response内容封装到了Body这个对象中
            // body这个对象中具有.json(),.text(),.formData等方法
            // 只能使用一次读取流，body.bodyUsed = true，这个参数的原因
            // console.log(response.text()); // 报错
            // response.json();
            // response.formData();
            console.log(response);
            return response.text(); 
        })
        .then(function(myJson) {
            console.log(myJson); // 响应数据
        })
        .catch(function(err){
            console.log(err); // 异常处理
        })
}