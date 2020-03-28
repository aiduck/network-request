module.exports = async function(ctx, next) {
    // 如果jsonp 的请求为GET
    if ( ctx.method === 'GET') {
        let callbackName = ctx.query.callback || 'callback'
        console.log(callbackName);
        let returnData = {
            text: 'this is a jsonp api',
            time: new Date().getTime(),
        } 

        let jsonpStr = `;${callbackName}(${JSON.stringify(returnData)})`
        // 用text/javascript，让请求支持跨域获取
        ctx.type = 'text/javascript'
        // 输出jsonp字符串
        ctx.body = jsonpStr

    } else {
        ctx.body = 'hello jsonp'
    }
}