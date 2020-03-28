const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

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

app.listen(4000);  //这里的端口要和webpack里devServer的端口对应
console.log('app started at port 4000')