var Mock = require("mockjs")

module.exports = async function(ctx, next) {
    try {
        // 设置cookie
        // ctx.cookies.set(
        //   'MyName','JSPang',{
        //     domain: 'localhost', // 写cookie所在的域名
        //     path: '/', // 写cookie所在的路径
        //     maxAge: 2 * 60 * 60 * 1000, // cookie有效时长
        //     expires: new Date('2018-02-08'), // cookie失效时间
        //     httpOnly: false, // 是否只用于http请求中获取
        //     overwrite: false // 是否允许重写
        //   }
        // );
        let MyName = ctx.cookies.get('MyName');
        console.log('MyName',MyName);

        // 请求数据的获取和解析
        // json数据？ koa中间件 koa-bodyparser 对请求参数的封装
        console.log('ctx.body',ctx.request.body);
        // 原生form数据怎么获取？(koa-怎么获取post数据)
        // let postdata = '';

        // ctx.req.addListener('data', (data) => {
        //   postdata += data;
        //   console.log('data',data)
        //   console.log('postdata',postdata);
        // })
        
        // ctx.req.addListener("end",function() {
        //   let queryStrList = postdata.split('&')
        //   console.log('queryStrList', queryStrList)
        // })

        //调用mock方法模拟数据
        var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|1-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1,
                'name|2-10': 'abd'
            }]
          }
        );
        // 接口返回文件信息
        ctx.body = {
            code: '0',
            desc: 'success',
            data: data
        };
    } catch (error) {
      console.error(error);
      // 发生错误
      ctx.body = {
        code: '0',
        desc: error,
        data: {
          url: '//yun.dui88.com/babi/img/f7h8s7nb6h.jpg'
        }
      };
    }
  };