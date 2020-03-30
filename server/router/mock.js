const fs = require('fs');
const path = require('path');
const Router = require('koa-router');

const router = new Router();


router.all('*', ctx => {
  // fetch设置  mode: "cors", 可以跨域之后，还是需要后端设置～
  // ctx.set("Access-Control-Allow-Origin", "*");
  // ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
  // ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
  // ctx.set("Access-Control-Allow-Credentials", true);
  // mock路由，优先查找JS，其次是JSON，找不到返回默认值
  const JSFilePath = path.join(__dirname, '../mock/', `${ctx.request.path}.js`);
  const JSONFilePath = path.join(__dirname, '../mock/', `${ctx.request.path}.json`);
  if (fs.existsSync(JSFilePath)) {
    require(JSFilePath)(ctx);
  } else if (fs.existsSync(JSONFilePath)) {
    const file = fs.readFileSync(JSONFilePath);
    ctx.body = JSON.parse(file);
  } else {
    ctx.body = ({
      code: '0',
      desc: '成功',
      data: '0'
    });
  }
});

module.exports = router;
