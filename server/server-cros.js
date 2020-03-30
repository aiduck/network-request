const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');

const app = new Koa();
const router = new Router();

// 可以替代webpack的proxy吗？
// 可以，但是需要具体配置
// 比如如果在我们请求中设置了allowHeaders之外的头部信息，那么就会触发跨域
// app.use(
//     cors({
//         origin: function(ctx) { //设置允许来自指定域名请求
//             return 'http://localhost:8080' //默认允许本地请求8080端口可跨域
//         },
//         maxAge: 5, //指定本次预检请求的有效期，单位为秒。
//         credentials: true, //是否允许发送Cookie "Access-Control-Allow-Credentials"
//         allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
//         allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
//         exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
//    })
// );

app.use(bodyParser());
app.use(router.routes())

const mock = require('./router/mock');

 
app.use(mock.routes());

// 这个部分被mock替代
// const home = require('./home')
// router.get('/list', async(ctx, next) => {
//   ctx.body = home
//   await next()
// })

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

app.listen(4200);  //这里的端口要和webpack里devServer的端口对应
console.log('app started at port 4200')